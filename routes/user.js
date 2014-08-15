var express = require('express')
    , router = express.Router()

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
    res.render('register', { title: 'Register an account' });
});

module.exports = router;
