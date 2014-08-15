/**
 * Handle authorization, cookie detection, and misc User stuff!
 */
var user = function(req, res, next){
    res.locals.auth = false;
    if ( req.cookies.get('user_id') ) {
        req.app.get('db').get('users').findById(req.cookies.get('user_id'))
            .then(function(doc) {
                req.user = doc;
                res.locals.auth = true;
                next();
            }, function(){
                next();
            });
    } else {
        next();
    }
};

module.exports = user;

/**
 * Handle user registration
 */
var Register = function() {
    this.save = function(data) {
        console.log('Saving user..');
        console.log(data);
    };

    this.init = function() {
        console.log('Initiating registration..');
        this.attachSubmitHandler();
    };

    this.attachSubmitHandler = function() {
        $('input[type=submit]').on('click', function() {
            console.log('Submitting..');
        });
    };
};

module.exports.Register = Register;
