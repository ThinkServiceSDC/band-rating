import request from 'supertest';
import httpStatus from 'http-status';
import server from '../server/server'

describe('basic controller test', () => {
    it('should respond with 200', (done) => {
        request(server).get('/HelloWorld')
            .expect(httpStatus.OK)
            .expect({test: 'test'}, done);
    });
});