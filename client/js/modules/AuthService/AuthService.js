'use strict';

/**
 * The authentication service, responsible for loggin in/out users and communicating with the API
 */
module.exports = function($http, $window) {

    var self = {};

    self.login = function (credentials) {
        return $http
            .post('/api/user', credentials)
            .then(function (res) {
                $window.sessionStorage.token = res.data.data.token;
                $window.sessionStorage.email = res.data.data.email;
                return res.data.data.user;
            }, function(res){
                console.log(res.data.stack);
                alert(res.data.error);
            });
    };

    self.logout = function () {
        $window.sessionStorage.token = '';
        $window.sessionStorage.email = '';
    };

    self.isAuthenticated = function () {
        return !! $window.sessionStorage.token;
    };

    return self;
};
