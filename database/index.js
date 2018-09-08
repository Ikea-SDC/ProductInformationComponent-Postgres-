const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ProductInfo')
const db = mongoose.connection;

db.on('error', () => {
    console.log("Failed to connect to productinfo component database!");
});
db.once('open', () => {
    console.log('Successfully connected to productinfo component database!');
})

