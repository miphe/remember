var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    Cookies = require('cookies'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    config = require('../config.json'),
    // db = require('monk')(config.dbDSN),
    app = express();

// Adding database connection to MongoDB.
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/rememberdb');

// app.set('db', db);
app.set('config', config);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(Cookies.express());
app.use(express.static(path.join(__dirname, '../client')));

// Make our db accessible to our router
app.use(function(req,res,next){
  console.log(req);
  req.db = db;
  next();
});

/**
 * Routes
 */
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));
app.use('/note', require('./routes/note'));
app.use('/search', require('./routes/search'));

/**
 * Debug Request URLs
 */
app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
});

/**
 * AngularJS Starting point
 */
app.get('*', function(req, res) {
    res.sendfile('./client/index.html');
});

// Error handling
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
if ( app.get('env') === 'development' ) {
    app.use(function (err, req, res, next) {
        'use strict';
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error:   err
        });
    });
} else {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error:   {}
        });
    });
}

app.set('port', process.env.PORT || 3000);

module.exports = app;
