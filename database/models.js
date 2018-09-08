const mongoose = require('mongoose');


const productsSchema = mongoose.Schema({
    //schema goes here
}) 

const Product = mongoose.model('Product', productsSchema);


module.exports = {
    'product': Product
};