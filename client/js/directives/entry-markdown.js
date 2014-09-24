/* globals angular */

'use strict';

var Marked = require('marked');
var $ = require('jquery');

/* Directives */
angular.module('myApp.directives')
    .directive('entryMarkdown', function() {

        return {
            restrict: 'E',
            templateUrl: 'partials/entry-text.html',
            link: function(scope, elem, attr) {
                scope.renderPreview = function(n) {
                    $(attr.previewEl).html(Marked(n));
                };

                scope.$watch('entryContent', function(n, o) {
                    scope.renderPreview(n);
                });
            }
        };
    });
