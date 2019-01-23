import express from 'express';
import {createProducer} from '../kafka';

const routePath = '/v1/api';

let router = express.Router();

router.put(routePath + '/evaluate', (req, res) => {
    evaluate(req, res);
});

export const evaluate = (req, res) => {
    if (!req.body.bandName) {
        return res.status(400).send('Please provide a band name');
    }

    if (!req.body.vote) {
        return res.status(400).send('Please provide a vote');
    }
    const producer = createProducer();
    return res.status(201).send(req.body);
};

export default router;
