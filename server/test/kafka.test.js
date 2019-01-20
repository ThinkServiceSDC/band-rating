import {expect} from 'chai';
import {consumer, producer} from '../main/kafka';

describe('producer', () => {
    it('should create an object', () => {
        expect(producer()).to.be.a('object');
    });
});

describe('consumer', () => {
    it('should create an object', () => {
        expect(consumer()).to.be.a('object');
    });
});