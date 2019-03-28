import Kafka from 'node-rdkafka';

const createConsumer = groupId => new Kafka.KafkaConsumer({
  'group.id': groupId,
  'metadata.broker.list': 'localhost:9092',
});

export default createConsumer;
