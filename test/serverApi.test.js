import {expect} from 'chai';
import request from 'supertest';
import httpStatus from 'http-status';
import server from '../server/server';
import Kafka, {KafkaConsumer} from "node-rdkafka";

let consumerStream;
let kafkaClient;

describe('server api', function () {
    this.timeout(40000);

    before(function () {
        kafkaClient = Kafka.AdminClient.create({
            'client.id': 'kafka-test',
            'metadata.broker.list': 'localhost:9092'
        });
    });

    beforeEach(function (done) {
        kafkaClient.createTopic({
            topic: 'test',
            num_partitions: 1,
            replication_factor: 1
        }, () => done());
    });


    beforeEach(function () {
        consumerStream = new KafkaConsumer.createReadStream({
            'group.id': 'test',
            'metadata.broker.list': 'localhost:9092'
        }, {}, {topics: ['test']});
    });

    afterEach(function (done) {
        consumerStream.destroy();
        kafkaClient.deleteTopic('test', 10000, () => done());
    });

    after(function () {
        server.stop();
    });

    it('should respond with 201 and created object in body', function (done) {
        const requestBody = {bandName: 'bandName', vote: 'vote', comment: 'comment'};
        consumerStream.on('data', (data) => {
            expect(JSON.parse(data.value.toString())).to.eql(requestBody);
            done();
        });
        setTimeout(function () {
            request(server).put('/v1/api/evaluate').send(requestBody)
                .expect(httpStatus.CREATED)
                .then(() => {

                });
        }, 30000);
    });

    it('should respond with 400 if no band name is provided in the request body', function (done) {
        const requestBody = {bandName: '', vote: 'vote', comment: 'comment'};
        request(server).put('/v1/api/evaluate').send(requestBody)
            .expect(httpStatus.BAD_REQUEST)
            .expect('Please provide all necessary data', done);
    });
});