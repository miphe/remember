var express = require('express')
    , router = express.Router()

/**
 * Welcome page
 */
router.get('/', function(req, res) {
    res.render('index', { title: 'Welcome to Remember' });
});

module.exports = router;
