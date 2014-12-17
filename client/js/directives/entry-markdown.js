
'use strict';

var Marked = require('marked');
var $ = require('jquery');

module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: '/partials/entry-text.html',
        link: function(scope, elem, attr) {

            scope.renderPreview = function(n) {
                $(attr.previewEl).html(Marked(n));
            };

            scope.$watch('entry.content.body', function(n, o) {
                scope.renderPreview(n);
            });
        }
    };
};
