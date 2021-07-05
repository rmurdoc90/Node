// Model dependencies
var mongoose = require('mongoose');

var relationshipsModel = mongoose.model('relationships', {
        //Our model will compose of three compulsory fields: source, target and weight
        source: {
            type: String,
            require:true
        },
        target: {
            type: String,
            require:true
        },
        weight : {
            type: Number,
            require: true
        }
});

module.exports = relationshipsModel;