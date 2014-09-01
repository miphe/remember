var note = function () {
    var self = this;

    self.GET = function(req, res, next) {
        res.json({
            success: false,
            data: 'Invalid endpoint/method combination'
        });
    };

};

module.exports = note();
