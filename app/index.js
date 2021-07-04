 /*
    Main page for the application
 */

// Dependancies
var express = require('express');
var database = require('./database');

// Define our application and give it access to express
var app = express();

// Set port to environment PORT or 3000
app.set('port', process.env.PORT || 3000)

// Router listens to / (root directory)
app.use('/', router)

database(function(){
    app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
    console.log('Your application is running. You should be able to connect to it with http://localhost:' + app.get('port'));
    })
})