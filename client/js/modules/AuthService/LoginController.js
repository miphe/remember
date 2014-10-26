'use strict';

/**
 * The login controller, logic-less and responsible for recieving user/pass and
 * handling them to the AuthService
 */
module.exports = function($scope, $rootScope, AuthService, AUTH_EVENTS) {
    $scope.credentials = {
        email: '',
        pass: ''
    };
    $scope.login = function (credentials) {
        AuthService.login(credentials).then(function (user) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    };
    $scope.logout = function() {
        AuthService.logout();
        $scope.setCurrentUser(null);
        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
    };
};
