var api = {},
    Note = require('../models/note');

api.GET = function (req, res, next) {
    Note.list(req.body)
        .then(function(docs){
            res.json({
                data: docs
            }, 200);
        }, function(err){
            res.json({
                message: err.message,
                stack: err.stack
            }, 404);
        });
};

module.exports = api;
