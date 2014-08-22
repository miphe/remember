var express = require('express')
    , router = express.Router()
    , User = require('../includes/user')
    , requireParams = require('../includes/require-params')

/**
 * Welcome page
 */
router.get('/', function(req, res) {
    res.render('index', { title: 'User' });
});

/**
 * Registration page
 */
router.get('/register', function(req, res) {
    res.render('user/register', { title: 'Register an account' });
});

/**
 * Registration submission handler
 */
router.post('/register', requireParams(['email', 'password']), function(req, res){
    User.register( req.param('email'), req.param('password') )
        .then(function(doc){
            // Store User->_id in session
            req.session.userId = doc._id;
            res.redirect('/user/profile');
        }, function(error){
            res.render('error', {error: error});
        });
});

/**
 * Login page
 */
router.get('/login', function(req, res) {
    res.render('user/login', { title: 'Login' });
});

/**
 * Login submission handler
 */
router.post('/login', requireParams(['email', 'password']), function(req, res){
    User.login( req.param('email'), req.param('password') )
        .then(function(doc){
            // Store User->_id in session
            req.session.userId = doc._id;
            res.redirect('/user/profile');
        }, function(error){
            res.render('error', {error: error});
        });
});

/**
 * Logout handler
 */
router.get('/logout', function(req, res){
    req.session.userId = null;
    res.redirect('/user/login');
});

/**
 * Forgot password
 */
router.get('/forgot', function(req, res){
    // what email module to use ?w
});

/**
 * User profile
 */
router.get('/profile', function(req, res){
    if ( ! res.locals.user ) {
        res.redirect('/user/login');
    } else {
        res.render('user/profile');
    }
});

/**
 * Checking if a user exists with specific email
 */
router.post('/exists', requireParams(['field', 'value']), function(req, res){
    User.exists(req.param('field'), req.param('value') )
        .then(function() {
            return res.json({exists: false});
        }, function(){
            return res.json({exists: true});
        });
});

module.exports = router;
