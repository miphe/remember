/* globals angular */
'use strict';

angular.module('myApp.controllers', ['Authentication', 'LocalStorageModule', 'cfp.hotkeys'])
    .controller('ApplicationController', ['$scope', 'AuthService', function ($scope, AuthService) {

        // User
        $scope.currentUser = null;
        $scope.isLogged = AuthService.isAuthenticated;

        $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
        };
    }]);
