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

        // XP: Expansion management of columns
        $scope.xp = {
            cols   : ['search', 'view', 'write'],
            search : 1, // Default (todo: get from params)
            view   : 1, // Default (todo: get from params)
            write  : 1  // Default (todo: get from params)
        };

        // Returns a number of how many columns are currently active
        $scope.xp.layoutSum = function() {
            var result = 0;
            _.each($scope.xp.cols, function(v) {
                result += $scope.xp[v];
            });

            return result;
        };

        // Returns an object of appropriate classes for each column
        $scope.xp.determineClass = function(column) {
            console.log($scope.xp.layoutSum());
            var sum = $scope.xp.layoutSum();
            var res = {};

            switch(sum) {
                case 1:
                    console.log('Sum: ', sum);
                    // Active cols   : 1  #10   cols
                    // Inactive cols : 2  #2    cols
                    res = { 'col-sm-10': $scope.xp[column], 'col-xs-12': $scope.xp[column], 'col-sm-1': !$scope.xp[column] };
                    break;
                case 2:
                    console.log('Sum: ', sum);
                    // Active cols   : 2  #2x5  cols
                    // Inactive cols : 1  #2    cols
                    res = { 'col-sm-5': $scope.xp[column], 'col-xs-12': $scope.xp[column], 'col-sm-1': !$scope.xp[column] };

                    // When columns can't be calculated evenly, these special conditions will prioritize the right column.
                    if (($scope.xp.view   + $scope.xp.write == 2 && column == 'write') ||
                        ($scope.xp.search + $scope.xp.view  == 2 && column == 'view' ) ||
                        ($scope.xp.search + $scope.xp.write == 2 && column == 'write')) {
                        res = { 'col-sm-6': $scope.xp[column], 'col-xs-12': $scope.xp[column], 'col-sm-1': !$scope.xp[column] }}
                    break;
                case 3:
                    console.log('Sum: ', sum);
                    // Active cols   : 3  #3x4  cols
                    // Inactive cols : 0  #0    cols
                    res = { 'col-sm-4': $scope.xp[column], 'col-xs-12': $scope.xp[column], 'col-sm-1': !$scope.xp[column] };
                    break;
                default:
                    console.log('Sum: ', sum);
                    // Active cols   : 0  #0    cols
                    // Inactive cols : 3  #3    cols
                    res = { 'col-sm-1': true };
                    break;
            }

            return res;
        };

        // Sets opposite state of a column in it's model
        $scope.xp.toggle = function(column) {
            $scope.xp[column] = !$scope.xp[column];
        };

        // User
        $scope.currentUser = null;
        $scope.isLogged = AuthService.isAuthenticated;

        $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
        };
    }]);
