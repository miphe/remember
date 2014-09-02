/* globals angular */
'use strict';

angular.module('myApp.controllers', ['Authentication'])
    .controller('ApplicationController', ['$scope', 'AuthService', function ($scope, AuthService) {
        $scope.currentUser = null;
        $scope.isLogged = AuthService.isAuthenticated;

        $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
        };
    }]);
