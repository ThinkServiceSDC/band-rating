import {expect} from 'chai';
import {evaluate} from '../../server/routes/evaluate';

let res;

beforeEach(() => {
    res = {
        sendCalledWith: null,
        statusCalledWith: null,
        send(arg) {
            this.sendCalledWith = arg;
        },
        status(status) {
            this.statusCalledWith = status;
            return res;
        }
    };
});


describe('evaluate', () => {
    it('should succeed if a correct body is given', () => {
        const req = {body: {bandName: 'bandName', vote: 'vote', comment: 'comment'}};
        evaluate(req, res);
        expect(res.statusCalledWith).to.equal(201);
        expect(res.sendCalledWith).to.equal(req.body);
    });

    it('should error if no bandName is provided', () => {
        const req = {body: {bandName: '', vote: 'vote', comment: 'comment'}};
        evaluate(req, res);
        expect(res.statusCalledWith).to.equal(400);
        expect(res.sendCalledWith).to.equal('Please provide a band name');
    });

    it('should error if no vote is provided', () => {
        const req = {body: {bandName: 'bandName', vote: '', comment: 'comment'}};
        evaluate(req, res);
        expect(res.statusCalledWith).to.equal(400);
        expect(res.sendCalledWith).to.equal('Please provide a vote');
    });
});