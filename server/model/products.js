var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productsSchema = new Schema({
    title: String,
    price: String,
    state: String
});

mongoose.model('products', productsSchema);