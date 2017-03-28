var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var products = require('../model/products');

// Use bluebird
mongoose.Promise = require('bluebird');
var uri = 'mongodb://127.0.0.1:27017/pcinstance_db';
var db = mongoose.createConnection(uri);

// Get all products
router.get('/products', function (req, res, next) {
    db.model('products').find(function (err, products) {
        res.send(products);
    });
});

// Get single product
router.get('/product/:id', function (req, res, next) {
    console.log(req.params.id);
    db.model('products').findOne({ _id: req.params.id }, function (err, product) {
        if (err) {
            res.send(err);
        }
        res.json(product);
    });
});

//Save product
router.post('/product', function (req, res, next) {
    var product = req.body;

    if (!product.title && !product.price && !product.state) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.model('products').create(product, function (err, product) {
             if (err) {
                res.send(err);
            }
            res.json(product);
        });        
    }
});

// Delete product
router.delete('/product/:id', function (req, res, next) {
    db.model('products').findOneAndRemove({ _id: req.params.id }, function (err, product) {
        if (err) 
            res.send(err);
        
        res.json(product);
    });
});

// Update product
router.put('/product/:id', function (req, res, next) {
    var product = req.body;
    var updPoduct = {};

    if (product.title != null)
        updPoduct.title = product.title;

    if (product.price != null) 
        updPoduct.price = product.price;

    if (product.state != null) 
        updPoduct.state = product.state;
    
    if (!updPoduct) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } 

    db.model('products').findByIdAndUpdate(req.params.id, { $set: updPoduct }, { new: true }, function (err, product) {
        if (err)
            res.send(err);

        res.send(product);
    });
    
});

module.exports = router;