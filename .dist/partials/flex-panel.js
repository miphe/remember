(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partialsflex-panel.html',
    '<div class="flex-panel flex-panel-{{type}} hidden-xs">\n' +
    '    <span class="glyphicon glyphicon-plus"></span>\n' +
    '</div>\n' +
    '');
}]);
})();
