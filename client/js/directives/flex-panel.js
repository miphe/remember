/* globals angular */
'use strict';

/* Directives */
angular.module('myApp.directives')
    .directive('flexPanel', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/flex-panel.html'
        };
    });
