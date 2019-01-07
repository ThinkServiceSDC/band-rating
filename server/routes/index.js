import express from 'express';

let router = express.Router();

router.get('/HelloWorld', (req, res, next) => {
    res.status(200).json({"test": "testing test"});
});

export const helloWorld = () => 'HelloWorld';

export default router;
