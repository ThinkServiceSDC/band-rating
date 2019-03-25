import {expect} from 'chai';
import request from 'supertest';
import httpStatus from 'http-status';
import server from '../server/server';
import Kafka, {KafkaConsumer} from "node-rdkafka";

describe('server api', function () {
    this.timeout(5000);
    let consumerStream;
    let kafkaClient;

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

    beforeEach(function (done) {
        this.timeout(10000);
        consumerStream = new KafkaConsumer.createReadStream({
            'group.id': 'test',
            'metadata.broker.list': 'localhost:9092'
        }, {}, {topics: ['test']});
        setTimeout(() => done(), 9000);
    });

    afterEach(function (done) {
        consumerStream.destroy();
        kafkaClient.deleteTopic('test', () => done());
        server.stop();
    });

    after(function () {
        kafkaClient.disconnect();
    });

    it('should respond with 201 and created object in body', function (done) {
        this.timeout(40000);

        const requestBody = {bandName: 'bandName', vote: 'vote', comment: 'comment'};
        consumerStream.on('data', (data) => {
            console.log(data.value.toString());
            expect(JSON.parse(data.value.toString())).to.eql(requestBody);
            done();
        });
        setTimeout(async function () {
            await request(server).put('/v1/api/evaluate').send(requestBody)
                .expect(httpStatus.CREATED)
                .expect(requestBody);
        }, 500);
    });

    it('should respond with 400 if no band name is provided in the request body', function (done) {
        const requestBody = {bandName: '', vote: 'vote', comment: 'comment'};
        request(server).put('/v1/api/evaluate').send(requestBody)
            .expect(httpStatus.BAD_REQUEST)
            .expect('Please provide all necessary data', done);
    });
});