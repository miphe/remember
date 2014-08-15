/**
 * User model
 */
var User = function() {
    var self = this;

    self.db = require('./db');

    self.register = function(email, password) {
        return self.exists('email', email)
            .then(function(){
                return self.db.get('users')
                    .insert({
                        email: email,
                        password: password
                    });
            })
    };

    self.exists = function(field, value) {
        var args = {}, promise;
        args[field] = value;
        promise = self.db.get('users').find(args)
            .then(function(docs){
                if(docs.length) {
                    promise.reject( new Error( 'Email taken', 505 ) );
                } else {
                    promise.resolve();
                }
            });
        return promise;
    };

    return self;
};

module.exports = User();
