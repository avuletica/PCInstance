var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    country: String,
    city: String,
    address: String,
    postalCode: Number,
    creditCardNumber: Number,
    userRole: String,
});

mongoose.model('users', usersSchema);