'use strict';

module.exports = function($scope, AuthService) {
    $scope.currentUser = null;
    $scope.isLogged = AuthService.isAuthenticated;

    $scope.setCurrentUser = function (user) {
        $scope.currentUser = user;
    };
};
