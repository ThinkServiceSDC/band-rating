import Kafka from 'node-rdkafka';

export const createProducer = () => {
    const producer = new Kafka.Producer({'metadata.broker.list': 'localhost:9092', 'dr_cb': true}, {});
    producer.on('error', (err) => {
        console.log('Error occurred ', err);
    });

    producer.on('event.error', (err) => {
        console.log('Event Error occurred ', err);
    });
    return producer;
};

export const createConsumer = (groupId) => {
    return new Kafka.KafkaConsumer({
        'group.id': groupId,
        'metadata.broker.list': 'localhost:9092'
    });
};