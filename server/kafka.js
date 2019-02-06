import Kafka from 'node-rdkafka';

const Producer = new Kafka.Producer({'metadata.broker.list': 'localhost:9092', 'dr_cb': true}, {});
Producer.on('error', (err) => {
    console.log('Error occurred ', err);
});
Producer.on('event.error', (err) => {
    console.log('Event Error occurred ', err);
});

export default Producer;

export const createConsumer = (groupId) => {
    return new Kafka.KafkaConsumer({
        'group.id': groupId,
        'metadata.broker.list': 'localhost:9092'
    });
};