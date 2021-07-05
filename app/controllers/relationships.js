// Relationships controller
var relationshipsModel = require('../models/relationships')

module.exports = {
    relationships: function(req,res){
        relationshipsModel.find(function(err,res){
            if (err){
                return res
                    .status(500)
                    .send(err)
            } else {
                return res
                    .status(200)
                    .send(res)
            }
        })
    }
}