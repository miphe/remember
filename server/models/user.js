var crypto = require('crypto'),
    bcrypt = require('bcrypt-nodejs'),
    db = require('../server').get('db');

/**
 * User model
 */
var User = {};

/**
 * Register a user using email/password combination
 * @uses User.exists
 * @param email
 * @param password
 * @returns {Promise}
 */
User.register = function (email, password) {
    var promise = User.available(email)
        // If the email does not exist, process to inserting the user to DB
        .then(function () {
            return db.get('users')
                .insert({
                    email:    email,
                    password: bcrypt.hashSync(password)
                })
                .then(User.prepareDoc);
        }, function () {
            return new Error('User exists already', 'user-exists');
        });
    return promise;
};

/**
 * Check login credentials
 * @param email
 * @param password
 * @returns {Promise}
 */
User.login = function (email, password) {
    var promise = db.get('users')
        .findOne({email: email})
        // Check password
        .then(function (doc) {
            if ( bcrypt.compareSync(password, doc.password) ) {
                return doc;
            } else {
                promise.reject(new Error('Invalid password', 'invalid-password'));
            }
        }, function(){
            promise.reject(new Error('Invalid email, not registered', 'email-not-found'));
        })
        // Return user
        .then(User.prepareDoc);
    return promise;
};

/**
 * Check if a an email is available, ie: not registered
 * @param email
 * @returns {Promise|*}
 */
User.available = function (email) {
    var promise = db.get('users').find({email: email})
        .then(function (docs) {
            if ( docs.length ) {
                promise.reject(new Error('Email taken', 'email-taken'));
            } else {
                promise.resolve();
            }
        });
    return promise;
};

/**
 * Creates a new access token
 * @param user
 * @returns {*}
 */
User.createToken = function (user) {
    var token = crypto.createHash('sha1').update(crypto.randomBytes(20)).digest('hex');
    return db.get('tokens').insert({ userId: user._id, token: token });
};

/**
 * Prepare the user document to be transferred to front-end
 * Removes the password, and return an object with the user document and
 * generated token
 *
 * @param user
 */
User.prepareDoc = function (user) {
    return User.createToken(user.email)
        .then(function (doc) {
            delete user.password;
            delete user._id;
            return {user: user, token: doc.token};
        });
};

module.exports = User;
