(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partialsentry-text.html',
    '<textarea name="entry-markdown" ng-disabled="!xp.write" id="entry-textarea" tabindex="1" ng-model="entry.content.body" autofocus rows="13" class="form-control"></textarea>\n' +
    '');
}]);
})();
