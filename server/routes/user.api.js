var user = function () {
    var self = this;

    var User = require('../models/user');

    self.GET = function (req, res, next) {
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
    self.POST = function (req, res, next) {
        if ( req.param('email') && req.param('pass') ) {
            User.available(req.param('email'))
                .then(function (s) {
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

    return self;
};

module.exports = user();
