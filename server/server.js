var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var products = require('./routes/products');

var port = 3000;

var app = express();

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

//View Engine
app.set('views', path.join(__dirname, 'client'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);
app.use('/api', products);

app.listen(port, function () {
    console.log('Server started at http://localhost:3000');
});