(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partialspartial3.html',
    '<div ng-controller="ButtonsCtrl">\n' +
    '    <h4>Single toggle</h4>\n' +
    '    <pre>{{singleModel}}</pre>\n' +
    '    <button type="button" class="btn btn-primary" ng-model="singleModel" btn-checkbox btn-checkbox-true="1" btn-checkbox-false="0">\n' +
    '        Single Toggle\n' +
    '    </button>\n' +
    '    <h4>Checkbox</h4>\n' +
    '    <pre>{{checkModel}}</pre>\n' +
    '    <div class="btn-group">\n' +
    '        <label class="btn btn-primary" ng-model="checkModel.left" btn-checkbox>Left</label>\n' +
    '        <label class="btn btn-primary" ng-model="checkModel.middle" btn-checkbox>Middle</label>\n' +
    '        <label class="btn btn-primary" ng-model="checkModel.right" btn-checkbox>Right</label>\n' +
    '    </div>\n' +
    '    <h4>Radio &amp; Uncheckable Radio</h4>\n' +
    '    <pre>{{radioModel || \'null\'}}</pre>\n' +
    '    <div class="btn-group">\n' +
    '        <label class="btn btn-primary" ng-model="radioModel" btn-radio="\'Left\'">Left</label>\n' +
    '        <label class="btn btn-primary" ng-model="radioModel" btn-radio="\'Middle\'">Middle</label>\n' +
    '        <label class="btn btn-primary" ng-model="radioModel" btn-radio="\'Right\'">Right</label>\n' +
    '    </div>\n' +
    '    <div class="btn-group">\n' +
    '        <label class="btn btn-success" ng-model="radioModel" btn-radio="\'Left\'" uncheckable>Left</label>\n' +
    '        <label class="btn btn-success" ng-model="radioModel" btn-radio="\'Middle\'" uncheckable>Middle</label>\n' +
    '        <label class="btn btn-success" ng-model="radioModel" btn-radio="\'Right\'" uncheckable>Right</label>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();
