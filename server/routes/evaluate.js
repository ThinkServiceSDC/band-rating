import express from 'express';

const routePath = '/v1/api';

let router = express.Router();

router.put(routePath + '/evaluate', (req, res) => {
    evaluate(req, res);
});

export const evaluate = (req, res) => {
    if (!req.body.bandName) {
        res.status(400).send('Please provide a band name');
    } else {
        res.status(201).send(req.body);
    }
};

export default router;
