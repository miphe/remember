var express = require('express')
    , path = require('path')
    , logger = require('morgan')
    , Cookies = require('cookies')
    , cookieParser = require('cookie-parser')
    , bodyParser = require('body-parser')
    , config = require('../config.json')
    , session = require('express-session')
    , MongoStore = require('connect-mongo')(session)
    , db = require('./db')
    , app = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');

app.set('db', db);
app.set('config', config);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(Cookies.express());
app.use(cookieParser())
app.use(session({
    store: new MongoStore({
        url: config.session.store
    }),
    secret: config.session.secret
}));
app.use(express.static(path.join(__dirname, '../public')));

/**
 * Debug Request URLs
 */
app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
});

/**
 * Autologin user if found in session
 */
app.use(function(req, res, next){
    res.locals.user = null;
    if ( req.session.userId ) {
        app.get('db').get('users').findOne({ _id: req.session.userId })
            .then(function(doc){
                res.locals.user = doc;
                next();
            }, function(){
                next();
            });
    } else {
        next();
    }
});

/**
 * Routes
 */
app.use('/', require('../routes/index'));
app.use('/user', require('../routes/user'));
app.use('/note', require('../routes/note'));

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
