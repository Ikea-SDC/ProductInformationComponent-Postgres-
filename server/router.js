const express = require('express');
const router = express.Router();

router.get('/product/:id', (req, res) => {
    console.log('GET @ product/:id');
    res.status(200).send('GET product information!')
});

router.post('product/:id', (req, res) => {
    console.log('POST @ product/:id');
    res.status(200).send("POST product information!");
})

router.get('/review/:id', (req, res) => {
    console.log('GET @ review/:id');
    res.status(200).send('GET reviews for a product id!');
})

router.post('/review/:id', (req, res) => {
    console.log('POST @ review/:id');
    res.status(200).send('POST a new review to product id!');
})

module.exports = router;