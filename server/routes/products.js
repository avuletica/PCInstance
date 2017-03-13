var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://test:test@ds141328.mlab.com:41328/pcinstance_db', ['products']);

// Get all products
router.get('/products', function (req, res, next) {
    db.products.find(function (err, products) {
        if (err) {
            res.send(err);
        }
        res.json(products);
    });
});

// Get single product
router.get('/product/:id', function (req, res, next) {
    db.products.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, product) {
        if (err) {
            res.send(err);
        }
        res.json(product);
    });
});

//Save product
router.post('/product', function (req, res, next) {
    console.log("called");
    var product = req.body;
    if (!product.title) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.products.save(product, function (err, product) {
            if (err) {
                res.send(err);
            }
            res.json(product);
        });
    }
});

// Delete product
router.delete('/product/:id', function (req, res, next) {
    db.products.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, product) {
        if (err) {
            res.send(err);
        }
        res.json(product);
    });
});

// Update product
router.put('/product/:id', function(req, res, next){
    var product = req.body;
    var updPoduct = {};
    
    if(product.title){
        updPoduct.title = product.title;
    }
    
    if(product.price){
        updPoduct.price = product.price;
    }
    
    if(!updPoduct){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.products.update({_id: mongojs.ObjectId(req.params.id)},updPoduct, {}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
    }
});

module.exports = router;