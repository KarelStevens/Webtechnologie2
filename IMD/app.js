var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    mongoose = require('mongoose'),
    swig = require('swig'),
    bodyParser = require('body-parser'),
    path = require('path'),
    restful = require('node-restful');

mongoose.connect('mongodb://localhost/imd');

app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/test', function(req, res) {
    res.send('LOLOL');
});

app.post('/test', function(req, res) {
    res.send('YOLO');
});

var Product = app.product = restful.model('Product', mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        default: 0
    }
}, {collection: 'product'})).methods(['get', 'post', 'put', 'delete']);
Product.register(app, '/product');

var server = http.listen(3003, function(){
    console.log('Server running on http://localhost:3003');
});

module.exports = app;
