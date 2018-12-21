import {expect} from 'chai';
import {helloWorld} from '../../server/routes';

describe('basic testing', () => {
    it('should be HelloWorld', () => {
        expect(helloWorld()).to.equal('HelloWorld');
    });
});