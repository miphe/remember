(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partialsentry-item.html',
    '<div class="panel panel-default" ng-class="{\'collapsed\' : entry.collapsed}">\n' +
    '    <div class="panel-body">\n' +
    '        <div class="media-body">\n' +
    '            <p ng-bind-html="entry.content"></p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <entry-footer></entry-footer>\n' +
    '</div>\n' +
    '');
}]);
})();
