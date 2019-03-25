import Kafka from "node-rdkafka";

export class Evaluator {

    constructor() {
        this.evaluate = this.evaluate.bind(this);
        this.produceKafkaMessage = this.produceKafkaMessage.bind(this);
        this.producerReady = false;

        this.producer = new Kafka.Producer({'metadata.broker.list': 'localhost:9092', 'dr_cb': true}, {});
        this.producer.on('error', (err) => {
            console.log('Error occurred ', err);
        });
        this.producer.on('event.error', (err) => {
            console.log('Event Error occurred ', err);
        });
    }

    evaluate(req, res) {
        if (!req.body.bandName || !req.body.vote) {
            return res.status(400).send('Please provide all necessary data');
        }

        this.producer.on('ready', () => {
            this.producerReady = true;
            this.produceKafkaMessage(req.body);
        });

        if (!this.producerReady) {
            this.producer.connect();
        } else {
            this.produceKafkaMessage(req.body);
        }
        return res.status(201).send(req.body);
    };

    produceKafkaMessage(message) {
        this.producer.produce('test', -1, Buffer.from(JSON.stringify(message)), 'key', null, null);
    }
}
