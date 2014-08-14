var express = require('express')
    , router = express.Router()

/**
 * Welcome page
 */
router.get('/', function(req, res) {
    res.render('index', {});
});

/**
 * Registration page
 */
router.get('/register', function(req, res) {
    res.render('register', {});
});

module.exports = router;
