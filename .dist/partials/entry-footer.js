(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partialsentry-footer.html',
    '<div class="panel-footer clearfix">\n' +
    '    <small class="pull-left">\n' +
    '        <!--\n' +
    '            To do: add world wide timezone powers here\n' +
    '        -->\n' +
    '        <span ng-bind="entry.created | date: \'medium\'"></span>\n' +
    '    </small>\n' +
    '\n' +
    '    <div class="btn-group btn-group-xs pull-right">\n' +
    '        <!--\n' +
    '            To do: Some buttons are meant to show only for the owner of the entry\n' +
    '        -->\n' +
    '        <button type="button" class="btn btn-default" ng-class="{\'active\' : !entry.collapsed}" ng-click="toggleCollapsed($index)">\n' +
    '            <span class="fui-plus"></span> Expand\n' +
    '        </button>\n' +
    '        <button type="button" class="btn btn-default" ng-class="{\'active\' : entry.shared}" ng-click="toggleShared($index)">\n' +
    '            <span class="fui-eye"></span> Public\n' +
    '        </button>\n' +
    '        <!--\n' +
    '            To do: on click, update the header counter.\n' +
    '        -->\n' +
    '        <button type="button" class="btn btn-default" ng-class="{\'active\' : entry.bookmarked}" ng-click="toggleBookmarked($index)">\n' +
    '            <span class="fui-star-2"></span> Bookmark\n' +
    '        </button>\n' +
    '        <!--\n' +
    '            To do: on click go to edit mode.\n' +
    '            /cc @miphe\n' +
    '        -->\n' +
    '        <button type="button" class="btn btn-default">\n' +
    '            <span class="fui-new"></span> Edit\n' +
    '        </button>\n' +
    '        <!--\n' +
    '            To do: on click, open a confirm alert, if ok, drop it.\n' +
    '        -->\n' +
    '        <button type="button" class="btn btn-default">\n' +
    '            <span class="fui-cross"></span> Delete\n' +
    '        </button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();
