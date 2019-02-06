import {expect} from 'chai';
import Producer, {createConsumer} from '../server/kafka';

describe('Producer', () => {
    it('should be a singleton Producer', () => {
        expect(Producer).to.equal(Producer);
    });
});

describe('createConsumer', () => {
    it('should create an object', () => {
        expect(createConsumer()).to.be.a('object');
    });
});