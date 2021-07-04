// Dependencies for the router
var express = require('express');
var router = express.Router();

// Require relationships controller
var relationshipsController = require('./app/controllers/relationships');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

// API relationships
router.get('/api/relationships', relationshipsController.relationships);

// API check '/'
router.get('/', function (req,res){
    if(err){
        res
        .status(500)
        .send('Error' + err)
    } else {
        res
        .status(200)
        .send("API operating correctly")
    }    
})

module.exports = router