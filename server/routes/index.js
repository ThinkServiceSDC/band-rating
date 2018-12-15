import express from 'express';

let router = express.Router();

router.get('/HelloWorld', function (req, res, next) {
    console.log("Hello World");
    res.status(200).json({"test": "testing test"});
});

export const helloWorld = () => 'HelloWorld';

export default router;
