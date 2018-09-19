const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/product/:id', (req, res) => {
    console.log('GET @ product/:id');
    controller.getProduct(req.params.id, (err, doc) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200).send(doc)
        }
    });
});

router.post('product/:id', (req, res) => {
    console.log('POST @ product/:id');
    res.status(200).send("POST product information!");
})

router.get('/reviews/:id', (req, res) => {
    console.log('GET @ review/:id');
    controller.getReviews(req.params.id, (err, docs) => {
        if(err) {
            console.log(err);
            res.status(200).send();
        } else {
            res.status(200).send(docs);
        }
    });
})

router.post('/reviews/:id', (req, res) => {
    console.log('POST @ review/:id');
    res.status(200).send('POST a new review to product id!');
})

//Populate the database with 100 mock products
router.post('/populate', (req, res) => {
    console.log('Populating Database');
    controller.populate(() => {
        res.status(201).send();
    });
})

module.exports = router;