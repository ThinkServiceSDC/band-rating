import chai from 'chai';
import {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {Evaluator} from '../server/Evaluator';

chai.use(sinonChai);

let res;
let sandbox;

beforeEach(() => {
    sandbox = sinon.createSandbox();
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

afterEach(() => {
    sandbox.restore();
});


describe('Evaluator', () => {
    it('should respond with 201 and body if a correct body is given', () => {
        const req = {body: {bandName: 'bandName', vote: 'vote', comment: 'comment'}};
        new Evaluator().evaluate(req, res);
        expect(res.statusCalledWith).to.equal(201);
        expect(res.sendCalledWith).to.equal(req.body);
    });

    it('should error if no bandName is provided', () => {
        const req = {body: {bandName: '', vote: 'vote', comment: 'comment'}};
        new Evaluator().evaluate(req, res);
        expect(res.statusCalledWith).to.equal(400);
        expect(res.sendCalledWith).to.equal('Please provide all necessary data');
    });

    it('should error if no vote is provided', () => {
        const req = {body: {bandName: 'bandName', vote: '', comment: 'comment'}};
        new Evaluator().evaluate(req, res);
        expect(res.statusCalledWith).to.equal(400);
        expect(res.sendCalledWith).to.equal('Please provide all necessary data');
    });
});