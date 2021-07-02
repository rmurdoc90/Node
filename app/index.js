 /*
    Main page for the application
 */

// Dependancies
var express = require('express');
var app = express();

// Variables
var port = 3000;

// Application
app.get('/', function (req, res) {
    res.send('Hello World')
});

app.listen(port, function(err){
    if(err) console.log('Error in server set up', err)
    console.log(`Server listening on port ${port}`)
})