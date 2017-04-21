var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Verify    = require('./verify');

var Promotions = require('../models/promotions');

var router = express.Router();
router.use(bodyParser.json());
router.route('/')
.get(Verify.verifyOrdinaryUser, function(req, res, next){
    Promotions.find({}, function(err, promotion){
        if(err) throw err;

        res.json(promotion);
    });
})
.post(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
    Promotions.create(req.body, function(err, promotion){
        if(err) throw err;
        console.log('Promotion created!');

        var id = promotion._id;
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Added the promotion with id: ' + id);
    });
})
.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
    Promotions.remove({}, function(err, resp){
        if(err) throw err;

        res.json(resp);
    });
});

router.route('/:promoId')
.get(Verify.verifyOrdinaryUser, function(req, res, next){
     Promotions.findById(req.params.promoId, function(err, promotion){
        if (err) throw err;

        res.json(promotion);
     });
})
.put(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
    Promotions.findByIdAndUpdate(
        req.params.promoId, 
        {$set: req.body}, 
        {new: true},
        function(err, promotion){
            if(err) throw err;

            res.json(promotion);
    });
})
.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
    Promotions.findByIdAndRemove(req.params.promoId, function(err, resp){
        if(err) throw err;

        res.json(resp);
    })
});

module.exports = router;