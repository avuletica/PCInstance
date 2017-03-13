var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://test:test@ds141328.mlab.com:41328/pcinstance_db', ['users']);

// Get all users
router.get('/users', function (req, res, next) {
    db.users.find(function (err, users) {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
});

// Get single user
router.get('/user/:id', function (req, res, next) {
    db.users.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});

module.exports = router;