var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var products = require('../model/cart');

// Use bluebird
mongoose.Promise = require('bluebird');
var uri = 'mongodb://127.0.0.1:27017/pcinstance_db';
var db = mongoose.createConnection(uri);

// Get cart items
router.get('/cart', function (req, res, next) {
    db.model('cart').find(function (err, cart) {
        res.send(cart);
    });
});

// Store product to cart
router.post('/cart', function (req, res, next) {
    var product = req.body;

    if (!product) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.model('cart').create(product);
        res.json(product);
    }
});

// Delete product
router.delete('/cart/:id', function (req, res, next) {
    db.model('cart').findOneAndRemove({ _id: req.params.id }, function (err, product) {
        if (err) 
            res.send(err);
        
        res.json(product);
    });
});

module.exports = router;