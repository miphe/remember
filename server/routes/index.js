var express = require('express'), 
    router = express.Router();

/**
 * Welcome page
 */
router.get('/', function(req, res) {
    res.send('Index...');
});

module.exports = router;
