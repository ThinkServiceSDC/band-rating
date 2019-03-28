import { expect } from 'chai';
import request from 'supertest';
import httpStatus from 'http-status';
import Kafka, { KafkaConsumer } from 'node-rdkafka';
import server from '../server/server';

describe('server api', function () {
  this.timeout(5000);
  let consumerStream;
  let kafkaClient;

  before(() => {
    kafkaClient = Kafka.AdminClient.create({
      'client.id': 'kafka-test',
      'metadata.broker.list': 'localhost:9092',
    });
  });

  beforeEach((done) => {
    kafkaClient.createTopic({
      topic: 'test',
      num_partitions: 1,
      replication_factor: 1,
    }, () => done());
  });

  beforeEach(function (done) {
    this.timeout(10000);
    // eslint-disable-next-line
    consumerStream = new KafkaConsumer.createReadStream({
      'group.id': 'test',
      'metadata.broker.list': 'localhost:9092',
    }, {}, { topics: ['test'] });
    setTimeout(() => done(), 9000);
  });

  afterEach((done) => {
    consumerStream.destroy();
    kafkaClient.deleteTopic('test', () => done());
    server.stop();
  });

  after(() => {
    kafkaClient.disconnect();
  });

  it('should respond with 201 and created object in body', (done) => {
    const requestBody = { bandName: 'bandName', vote: 'vote', comment: 'comment' };
    consumerStream.on('data', (data) => {
      expect(JSON.parse(data.value.toString())).to.eql(requestBody);
      done();
    });
    setTimeout(async () => {
      await request(server).put('/v1/api/evaluate').send(requestBody)
        .expect(httpStatus.CREATED)
        .expect(requestBody);
    }, 500);
  });

  it('should respond with 400 if no band name is provided in the request body', (done) => {
    const requestBody = { bandName: '', vote: 'vote', comment: 'comment' };
    request(server).put('/v1/api/evaluate').send(requestBody)
      .expect(httpStatus.BAD_REQUEST)
      .expect('Please provide all necessary data', done);
  });
});
