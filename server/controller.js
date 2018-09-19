const db = require('../database/index');
const Models = require('../database/models');
const MockData = require('../database/mock/MOCK_DATA');
const ReviewData = require('../database/mock/REVIEW_DATA');

// exports.addProduct = function(req, res) {
    
// }

// exports.addReview = function(req, res) {

// }

// exports.removeProduct = function(req, res) {

// }

// exports.removeReview = function(req, res) {

// }

exports.getReviews = function(id, callback) {
    Models.reviews.find({productId: id}, (err, docs) => {
        if(err) {
            callback(err, null);
        } else {
            callback(null, docs);
        }
    });
}

exports.getProduct = function(id, callback) {
    Models.product.find({productId: id}, (err, doc) => {
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
        let newProd = new Models.product(product);
        newProd.save((err, res) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Added product successfully!')
            }
        });
    })

    ReviewData.forEach((review) => {
        let newReview = new Models.reviews(review);
        newReview.save((err, res) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Added review successfully!');
            }
        });
    });
    callback();
}