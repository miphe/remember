/**
 * User model
 */
var User = function() {
    var self = this;

    self.db = require('./db');

    /**
     * Register a user using email/password combination
     * @uses User.exists
     * @param email
     * @param password
     * @returns {Promise}
     */
    self.register = function(email, password) {
        return self.exists('email', email)
            // If the email does not exist, process to inserting the user to DB
            .then(function(){
                return self.db.get('users')
                    .insert({
                        email: email,
                        password: password
                    });
            });
    };

    /**
     * Check login credentials
     * @param email
     * @param password
     * @returns {Promise}
     */
    self.login = function(email, password) {
        return self.db.get('users')
            .findOne({email: email})
            .then(function(doc){
                if ( doc.password === password ) {
                    return doc;
                } else {
                    return new Error('Invalid password', 'invalid-password');
                }
            }, function(){
                return new Error('Invalid email, not registered', 'email-not-found');
            });
    };

    /**
     * Check if a user exists via his email, succeeds if none exists, fails if otherwise
     * @param field
     * @param value
     * @returns {Promise|*}
     */
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
