/* globals angular */
'use strict';

/* Directives */
angular.module('myApp.directives', [])
    .directive('flexPanel', function() {
        return {
            restrict: 'E',
            scope: { 'type': '=data' },
            templateUrl: 'partials/flex-panel.html'
        }
    });
