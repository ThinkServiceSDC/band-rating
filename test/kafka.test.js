import {expect} from 'chai';
import {createConsumer, createProducer} from '../server/kafka';

describe('createProducer', () => {
    it('should create an object', () => {
        expect(createProducer()).to.be.a('object');
    });
});

describe('createConsumer', () => {
    it('should create an object', () => {
        expect(createConsumer()).to.be.a('object');
    });
});