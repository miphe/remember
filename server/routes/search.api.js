var api = {},
    es = require('../models/search');

/**
 * Search ES index
 *
 * @param req
 * @param res
 * @constructor
 */
api.GET = function(req, res) {
    if ( ! req.param('q') ) {
        var err = new TypeError('Invalid keyword passed','invalid-query');
        res.json({
            message: err.message,
            stack: err.stack
        }, 500);
    }
    es.search({q: req.param('q')})
        .then(function(docs){
            res.json({
                data: docs
            }, 200);
        }, function(err) {
            res.json({
                message: err.message,
                stack: err.stack
            }, 500);
        });
};

/**
 * Reindex
 * @todo should not be publicly querable
 *
 * @param req
 * @param res
 * @constructor
 */
api.POST = function(req, res) {
    /**
     * Reindex action
     */
    if ( 'reindex' === req.param('action') ) {
        es.reindex()
            .then(function(){
                res.json({
                    message: 'Reindexed database successfully!'
                }, 201);
            }, function(err){
                res.json({
                    message: err.message,
                    stack: err.stack
                }, 500);
            });
    } else {
        var err = new TypeError('Invalid action parameter');
        res.json({
            message: err.message,
            stack: err.stack
        }, 500);
    }
};

module.exports = api;
