(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partialsentry-text.html',
    '<textarea\n' +
    '    name="entry-markdown"\n' +
    '    ng-disabled="!xp.write"\n' +
    '    id="entry-textarea"\n' +
    '    tabindex="1"\n' +
    '    ng-model="entry.content.body"\n' +
    '    autofocus\n' +
    '    rows="13"\n' +
    '    class="form-control"\n' +
    '></textarea>\n' +
    '');
}]);
})();
