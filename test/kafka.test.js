import { expect } from 'chai';
import createConsumer from '../server/kafka';

describe('createConsumer', () => {
  it('should create an object', () => {
    expect(createConsumer()).to.be.a('object');
  });
});
