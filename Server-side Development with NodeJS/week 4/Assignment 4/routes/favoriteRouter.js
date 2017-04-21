var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Favorites = require('../models/favorites');
var Verify = require('./verify');

var router = express.Router();
router.use(bodyParser.json());
router.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Favorites.findOne({'postedBy': req.decoded._doc._id})
        .populate('postedBy dishes')
        .exec(function (err, favorite) {
            if (err) throw err;
            res.json(favorite);
    });
})
.post(Verify.verifyOrdinaryUser, function (req, res, next) {
    Favorites.findOneAndUpdate({'postedBy': req.decoded._doc._id}, {$set: {postedBy: req.decoded._doc._id}}, {upsert: true, new: true}, function (err, favorite) {
        if (err) throw err;

        if(favorite.dishes.indexOf(req.body._id) === -1){
            favorite.dishes.push(req.body);
            favorite.save(function (err, favorite) {
                if (err) throw err;
                console.log('Updated Favorite!');
                res.json(favorite);
            });
        }
        else {
            res.json(favorite);
        }               
    });
})
.delete(Verify.verifyOrdinaryUser, function (req, res, next) {
    Favorites.remove({'postedBy': req.decoded._doc._id}, function (err, resp) {
        if (err) throw err;
        
        res.json(resp);
    });
});

router.route('/:dishId')
.delete(Verify.verifyOrdinaryUser, function (req, res, next) {
    Favorites.findOne({'postedBy': req.decoded._doc._id}, function(err, favorite){
        if(err) throw err;

        favorite.dishes.pull(req.params.dishId);
        favorite.save(function (err, resp){
            if(err) throw err;
            res.json(resp);
        });
    });
});

module.exports = router;