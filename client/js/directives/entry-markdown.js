/* globals angular */

'use strict';

var Marked = require('marked');
var $ = require('jquery');

/* Directives */
angular.module('myApp.directives')
    .directive('entryMarkdown', function() {
        var editTpl   = '<textarea tabindex="1" ng-change="renderPreview()" ng-model="entryContent" autofocus rows="13" id="entry" class="form-control"></textarea>';
        var previewEl = '<div class="markdown-preview-el"></div>';

        return {
            restrict: 'E',
            compile: function(tElement, tAttrs, transclude) {
                var $previewContainer = $('.preview-container').append(previewEl);
                tElement.html(editTpl);

                return function(scope, element, attrs) {
                    scope.closeAndNew = function() {
                        scope.saveEntry();
                        scope.resetEntry();
                        scope.renderPreview();
                    };
                    scope.renderPreview = function() {
                        $('.markdown-preview-el').html(Marked(scope.entryContent));
                    };
                    scope.saveEntry = function() {
                        console.log('Saving to db..');
                        // TODO: Update existing entry or create new entry
                    };
                    scope.resetEntry = function() {
                        console.log('Resetting entry content..');
                        scope.entryContent = '';
                    };

                    scope.renderPreview();
                };
            }
        };
    });
