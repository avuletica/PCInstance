var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://test:test@ds141328.mlab.com:41328/pcinstance_db', ['cart']);

// Get all cart items
router.get('/cart', function (req, res, next) {
    db.cart.find(function (err, cart) {
        if (err) {
            res.send(err);
        }
        res.json(cart);
    });
});

//Save cart item
router.post('/cart', function (req, res, next) {
    console.log("called");
    var cart = req.body;
    if (!cart) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.cart.save(cart, function (err, cart) {
            if (err) {
                res.send(err);
            }
            res.json(cart);
        });
    }
});

// Delete cart item
router.delete('/cart/:id', function (req, res, next) {
    db.cart.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, cart) {
        if (err) {
            res.send(err);
        }
        res.json(cart);
    });
});

module.exports = router;