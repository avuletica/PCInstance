var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var products = require('../model/users');

// Use bluebird
mongoose.Promise = require('bluebird');
var uri = 'mongodb://127.0.0.1:27017/pcinstance_db';
var db = mongoose.createConnection(uri);

// Get all users
router.get('/users', function (req, res, next) {
    db.model('users').find(function (err, users) {
        res.send(users);
    });
});

// Get single user
router.get('/user/:id', function (req, res, next) {
    console.log(req.params.id);
    db.model('users').findOne({ _id: req.params.id }, function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});

//Save user
router.post('/user', function (req, res, next) {
    var user = req.body;

    if (!user.username && !user.password) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.model('users').create(user, function (err, user) {
             if (err) {
                res.send(err);
            }
            res.json(user);
        });        
    }
});

// Delete product
router.delete('/user/:id', function (req, res, next) {
    db.model('users').findOneAndRemove({ _id: req.params.id }, function (err, user) {
        if (err) 
            res.send(err);
        
        res.json(user);
    });
});

// Update product
router.put('/user/:id', function (req, res, next) {
    var user = req.body;
    var updUser = {};

    // Modify later
    updUser.username = user.username;
    updUser.password = user.password;     

    if (!updUser) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } 
    db.model('users').findByIdAndUpdate(req.params.id, { $set: updUser }, { new: true }, function (err, user) {
        if (err)
            res.send(err);

        res.send(user);
    });
    
});

module.exports = router;