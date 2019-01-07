import Kafka from 'node-rdkafka';

export const producer = () => {
    const producer = new Kafka.Producer({'metadata.broker.list': 'localhost:9092', 'dr_cb': true}, {});
    producer.on('error', (err) => {
        console.log('Error occurred ', err);
    });

    producer.on('event.error', (err) => {
        console.log('Event Error occurred ', err);
    });
    return producer;
};

export const consumer = (groupId) => {
    return new Kafka.KafkaConsumer({
        'group.id': groupId,
        'metadata.broker.list': 'localhost:9092'
    });
};