var express = require('./config/express');

var app = express();

app.listen('5000',(req, res) => {
    console.log('Server running at http://localhost:5000/');
});