(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partialssearch.html',
    '<div ng-controller="EntryController">\n' +
    '\n' +
    '    <form role="form" class="" name="search-form" action="#" method="get">\n' +
    '        <div class="form-group">\n' +
    '            <input type="text" class="form-control" id="search-term" placeholder="Filter entries.." ng-model="keyword">\n' +
    '        </div>\n' +
    '    </form>\n' +
    '\n' +
    '    <ul class="list-group">\n' +
    '        <li ng-repeat="entry in entriesShort | orderBy:\'-createdAt\' | filter:keyword">\n' +
    '            <div class="smooth-brd list-group-item list-group-item-inner is-clickable" ng-click="broadCastEntryLoad(entry.id)">\n' +
    '                <p><small>{{entry.prettyDate}} | {{entry.author}}</small></p>\n' +
    '                <div ng-bind-html="entry.excerpt"></div>\n' +
    '\n' +
    '                <div class="btn-group">\n' +
    '                    <a title="Delete this entry" href="#" class="btn btn-primary" ng-disabled="!xp.search" ng-click="deleteAndNew(entry.id)">\n' +
    '                        <span class="fui-cross"></span>\n' +
    '                    </a>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();
