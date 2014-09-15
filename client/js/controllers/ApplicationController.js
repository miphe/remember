/* globals angular */
'use strict';

angular.module('myApp.controllers', ['Authentication'])
    .controller('ApplicationController', ['$scope', 'AuthService', function ($scope, AuthService) {

        // Layout & templates
        $scope.tpls = [
            { name: 'header', url: 'partials/header.html'}, // 0
            { name: 'search', url: 'partials/search.html'}, // 1
            { name: 'view',   url: 'partials/view.html'},   // 2
            { name: 'write',  url: 'partials/write.html'}   // 3
        ];

        $scope.tpl = {
            header: $scope.tpls[0],
            search: $scope.tpls[1],
            view:   $scope.tpls[2],
            write:  $scope.tpls[3]
        };

        // User
        $scope.currentUser = null;
        $scope.isLogged = AuthService.isAuthenticated;

        $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
        };
    }]);
