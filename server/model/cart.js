var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = new Schema({
    title: String,
    price: String,
    state: String,
    quantity: Number
});

mongoose.model('cart', cartSchema);