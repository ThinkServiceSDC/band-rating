import Kafka from 'node-rdkafka';

export const createConsumer = (groupId) => {
    return new Kafka.KafkaConsumer({
        'group.id': groupId,
        'metadata.broker.list': 'localhost:9092'
    });
};