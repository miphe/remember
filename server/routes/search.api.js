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
    es.search(req.params())
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
    if ( 'index' === req.param('action') ) {
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
    }
};

module.exports = api;
