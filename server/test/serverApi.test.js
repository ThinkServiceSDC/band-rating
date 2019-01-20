import request from 'supertest';
import httpStatus from 'http-status';
import server from '../main/server'

after(() => {
    server.stop();
});

describe('server api', () => {
    it('should respond with 201 and created object in body', (done) => {
        const requestBody = {bandName: 'bandName', vote: 'vote', comment: 'comment'};
        request(server).put('/v1/api/evaluate').send(requestBody)
            .expect(httpStatus.CREATED)
            .expect(requestBody, done);
    });

    it('should respond with 400 if no band name is provided in the request body', (done) => {
        const requestBody = {bandName: '', vote: 'vote', comment: 'comment'};
        request(server).put('/v1/api/evaluate').send(requestBody)
            .expect(httpStatus.BAD_REQUEST)
            .expect('Please provide a band name', done);
    });
});