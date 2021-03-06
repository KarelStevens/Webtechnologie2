var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    mongoose = require('mongoose'),
    swig = require('swig'),
    bodyParser = require('body-parser'),
    path = require('path'),
    restful = require('node-restful'),
    io = require('socket.io')(http);

mongoose.connect('mongodb://localhost/imd');

app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});"

app.get('/test', function(req, res) {
    res.send('Hello World');
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

var Message = app.message = restful.model('Message', mongoose.Schema({
    message: {
        type: String,
        required: true
    }
}, {collection: 'message'})).methods(['get', 'post', 'put', 'delete']);
Message.register(app, '/message');

io.on('connection', function(socket) {
    console.log('user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
    socket.on('message', function(a) {
        Message.create({message: a}, function(err, b) {
            console.log('b', b);
            io.emit('update', b);
        });
    });
});
io.on('connect', function(socket) {
    Message.find()
        .exec(function(err, messages) {
            socket.emit('startMessages', messages);
        });
});


var server = http.listen(3003, function(){
    console.log('Server running on http://localhost:3003');
});

module.exports = app;


    /*
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
*/
