var api = {},
    Note = require('../models/note');

api.GET = function (req, res, next) {
    var id;
    if ( id = req.param('id') ) {
        Note.get(id)
            .then(function (doc) {
                res.json({
                    data: doc
                }, 200);
            }, function (err) {
                res.json({
                    message: err.message,
                    stack:   err.stack
                }, 404);
            });
    }
};

api.POST = function (req, res, next) {
    Note.save(req.body)
        .then(function (doc) {
            res.json({
                message: 'Added note successfully',
                data:    {
                    id: doc._id
                }
            }, 201);
        }, function (err) {
            res.json({
                message: 'Could not add note',
                error:   err.message,
                stack:   err.stack
            }, 500);
        });
};

module.exports = api;
