'use strict';

var _ = require('underscore');

module.exports = function($scope, localStorageService) {

    // Templates and Partials
    $scope.tpls = [
        { name: 'header', url: 'partials/header.html'}, // 0
        { name: 'search', url: 'partials/search.html'}, // 1
        { name: 'view',   url: 'partials/view.html'},   // 2
        { name: 'write',  url: 'partials/write.html'}   // 3
    ];

    // Convenient object of templates
    $scope.tpl = {
        header: $scope.tpls[0],
        search: $scope.tpls[1],
        view:   $scope.tpls[2],
        write:  $scope.tpls[3]
    };

    // XP:: Expansion management
    // XP-model
    // 0 => collapsed column
    // 1 => expanded column
    $scope.xp = {
        layoutDefaults: {
            search: 0,
            view: 0,
            write: 1
        }
    };

    // Updates one key in local storage
    $scope.xp.updateStorage = function(key, val) {
        localStorageService.set(key, val);
    };

    // Returns the stored value or the default
    $scope.xp.getStorage = function(panel) {
        var response,
            result = localStorageService.get('xp.' + panel);

        if (result) {
            response = parseInt(result);
        } else {
            response = $scope.xp.layoutDefaults[panel];
            $scope.xp.updateStorage('xp.' + panel, response);
        }

        return response;
    };

    $scope.xp.cols   = ['search', 'view', 'write'];
    $scope.xp.search = $scope.xp.getStorage('search');
    $scope.xp.view   = $scope.xp.getStorage('view');
    $scope.xp.write  = $scope.xp.getStorage('write');

    // Returns a number of how many columns are currently active
    $scope.xp.layoutSum = function() {
        var result = 0;
        _.each($scope.xp.cols, function(v) {
            var num = parseInt($scope.xp[v]);
            result += num;
        });

        return result;
    };

    // Returns an object of appropriate classes for each column
    $scope.xp.determineClass = function(column) {
        var sum = $scope.xp.layoutSum();
        var res = {};
        switch(sum) {
            case 1:
                // Active panels   : 1  #10   cols
                // Inactive panels : 2  #2    cols
                res = { 'col-sm-10': $scope.xp[column], 'col-xs-12': $scope.xp[column], 'col-sm-1': !$scope.xp[column] };
                break;
            case 2:
                // Active panels   : 2  #1x5&1x6 cols
                // Inactive panels : 1  #1       cols
                res = { 'col-sm-5': $scope.xp[column], 'col-xs-12': $scope.xp[column], 'col-sm-1': !$scope.xp[column] };

                // When columns can't be calculated evenly, these special conditions will prioritize the right column.
                if (($scope.xp.view   + $scope.xp.write === 2 && column === 'write') ||
                    ($scope.xp.search + $scope.xp.view  === 2 && column === 'view' ) ||
                    ($scope.xp.search + $scope.xp.write === 2 && column === 'write')) {
                    res = {'col-sm-6': $scope.xp[column],'col-xs-12': $scope.xp[column],'col-sm-1': !$scope.xp[column]};
                }
                break;
            case 3:
                // Active panels   : 3  #3x4  cols
                // Inactive panels : 0  #0    cols
                res = { 'col-sm-4': $scope.xp[column], 'col-xs-12': $scope.xp[column], 'col-sm-1': !$scope.xp[column] };
                break;
            default:
                // Active panels   : 0  #0    cols
                // Inactive panels : 3  #3    cols
                res = { 'col-sm-1': true };
                break;
        }
        return res;
    };

    // Sets opposite state of a panel in it's model
    $scope.xp.toggle = function(panel) {
        var val;
        if ($scope.xp[panel] > 0) {
            val = 0;
        } else {
            val = 1;
        }

        $scope.xp[panel] = val;
    };

    $scope.xp.updateAllStorage = function() {
        $scope.xp.updateStorage('xp.search', $scope.xp.search);
        $scope.xp.updateStorage('xp.view',   $scope.xp.view);
        $scope.xp.updateStorage('xp.write',  $scope.xp.write);
    };

    $scope.$watch('xp.search', $scope.xp.updateAllStorage);
    $scope.$watch('xp.view',   $scope.xp.updateAllStorage);
    $scope.$watch('xp.write',  $scope.xp.updateAllStorage);
};
