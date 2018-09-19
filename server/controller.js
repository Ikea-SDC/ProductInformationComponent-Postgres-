const db = require('../database/index');
const Product = require('../database/models');
const MockData = require('../database/mock/MOCK_DATA');

// exports.addProduct = function(req, res) {
    
// }

// exports.addReview = function(req, res) {

// }

// exports.removeProduct = function(req, res) {

// }

// exports.removeReview = function(req, res) {

// }

// exports.getReviews = function(req, res) {

// }

exports.getProduct = function(id, callback) {
    console.log('id in get', id)
    Product.find({productId: id}, (err, doc) => {
        if(err) {
            console.log(err);
            callback(err, null);
        } else {
            callback(null, doc);
        }
    });
}

exports.populate = function(callback) {
    MockData.forEach((product) => {
        let newProd = new Product(product);
        newProd.save((err, res) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Added product successfully!')
            }
        });
    })
    callback();
}