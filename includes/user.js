/**
 * Handle user registration
 */
var user = function() {
    this.save = function(data) {
        console.log('Saving user..');
        console.log(data);
    }
};

module.exports = user;
