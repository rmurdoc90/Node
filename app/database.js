// Get the configuration for database connection and require mongoose to instantiate the connection
var config = require('./config.json');
var mongoose = require('mongoose');

// Create the DB connection string
var databaseParameters = config.database;
var dbConnection = 'mongodb://'

//If the connection requires a username and password
if (databaseParameters.username && databaseParameters.password && databaseParameters.username.length > 0 && databaseParameters.password.length > 0){
    dbConnection += databaseParameters.username + ':' + databaseParameters.password + '@' ;
}
dbConnection += databaseParameters.host + ':' + databaseParameters.port + '/' + databaseParameters.collection;

// mongodb://username:password@example.com:1234/relationships

// Requiring this module will be in function fashion (index.js)
module.exports = function(callback){
    mongoose.connect(dbConnection);
    var db = mongoose.connection;

    //Connection events: when successfully connected
    db.on('connected', function(){
        console.log('Mongoose connected')
    })    

    //Connection throws an error
    db.on('error', function(err){
        console.log('Mongoose default connection error: ' + err)
        process.exit(1)
    })    

    //Connection disconnected
    db.on('disconnected', function(){
        console.log('Mongoose default connection disconnected')
        process.exit(1)
    })    

    db.on('open', function(){
        callback(mongoose)
    })    
}