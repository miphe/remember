var express = require('express')
    , path = require('path')
    , logger = require('morgan')
    , Cookies = require('cookies')
    , cookieParser = require('cookie-parser')
    , bodyParser = require('body-parser')
    , config = require('../config.json')
    , db = require('monk')(config.dbDSN)
    , app = express();

app.set('db', db);
app.set('config', config);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(Cookies.express());
app.use(express.static(path.join(__dirname, '../client')));

/**
 * Debug Request URLs
 */
app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
});

/**
 * Routes
 */
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));
app.use('/note', require('./routes/note'));

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
