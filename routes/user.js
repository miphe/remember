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
//            req.cookie.set('user', doc.email);
//            req.cookie.set('password', doc.password); // @todo store it secured

            res.redirect('/user/profile');
        }, function(error){
            res.render('error', {error: error});
        });
});

/**
 * User profile
 */
router.get('/profile', function(req, res){
    res.render('user/profile');
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
