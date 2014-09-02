var api = {},
    User = require('../models/user');

api.GET = function (req, res, next) {
    res.json({
        success: false,
        data:    'Invalid endpoint/method combination'
    });
};

/**
 * [POST] Registration/Login handler
 * @param req
 * @param res
 * @param next
 * @constructor
 */
api.POST = function (req, res, next) {
    if ( req.param('email') && req.param('pass') ) {
        User.available(req.param('email'))
            .then(function () {
                User.register(req.param('email'), req.param('pass'))
                    .then(function (data) {
                        res.json({
                            success: true,
                            data:    data
                        });
                    }, function (err) {
                        res.json({
                            success: false,
                            error:   err.message,
                            stack:   err.stack
                        }, 401);
                    });
            }, function () {
                User.login(req.param('email'), req.param('pass'))
                    .then(function (data) {
                        res.json({
                            success: true,
                            data:    data
                        });
                    }, function (err) {
                        res.json({
                            success: false,
                            error:   err.message,
                            stack:   err.stack
                        }, 401);
                    });
            });
    }
};

module.exports = api;
