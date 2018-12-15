import {expect} from 'chai';
import {helloWorld} from '../../server/routes/index';

describe('basic testing', () => {
    it('should be HelloWorld', () => {
        expect(helloWorld()).to.equal('HelloWorld');
    });
});