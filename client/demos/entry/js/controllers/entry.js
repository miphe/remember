var entryApp = angular.module('entryApp', ['ngRoute']);

entryApp.config( ['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/new', { templateUrl: 'partials/write.html' }).
            when('/', { templateUrl: 'partials/info.html' }).
            otherwise( { redirectTo: '/' })
    }
]);

entryApp.directive('entryMarkdown', function() {
    var converter = new Showdown.converter();
    var editTpl   = '<textarea ng-change="renderPreview()" ng-model="entryContent" autofocus rows="13" id="entry" class="form-control"></textarea>';
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
                    scope.clearPreview();
                }
                scope.renderPreview = function() {
                    $('.markdown-preview-el').html(converter.makeHtml(scope.entryContent));
                }
                scope.saveEntry = function() {
                    console.log('Saving to db..');
                    // TODO: Update existing entry or create new entry
                }
                scope.resetEntry = function() {
                    console.log('Resetting entry content..');
                    scope.entryContent = '';
                }
                scope.clearPreview = function() {
                    console.log('Clearing preview..');
                    scope.renderPreview();
                }

                scope.renderPreview();
            }
        }
    }
});

entryApp.controller('EntryCtrl', function($scope) {
    // TODO: Get entry from DB, or set it to ''
    $scope.entryContent = "# My entry title";
});
