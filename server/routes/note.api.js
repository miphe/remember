var api = {};

api.GET = function(req, res, next) {
    res.json({
        success: false,
        data: 'Invalid endpoint/method combination'
    });
};

module.exports = api;
