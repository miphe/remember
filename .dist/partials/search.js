(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partialssearch.html',
    '<div class="starter-template" ng-controller="AutoCompleteSearch as autocmplt">\n' +
    '    <div class="search-info">Search term: <em>{{keyword}}</em></div>\n' +
    '    <form role="form" class="" name="search-form" action="#" method="get">\n' +
    '        <div class="form-group">\n' +
    '            <label class="sr-only" for="search-term">Search term</label>\n' +
    '            <input type="text" class="form-control" id="search-term" placeholder="Search.." ng-model="keyword" ng-change="change()">\n' +
    '        </div>\n' +
    '        <button class="btn btn-default">Search</button>\n' +
    '    </form>\n' +
    '    <!-- <ul>\n' +
    '        <li class="search-result" ng-repeat="sresult in autocmplt.result">\n' +
    '            <div>{{sresult._source.note}}</div>\n' +
    '        </li>\n' +
    '    </ul> -->\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<!--\n' +
    '    listController\n' +
    '-->\n' +
    '<div ng-controller="ListController">\n' +
    '    <!--\n' +
    '        To do: Sort by Last Modified date\n' +
    '    -->\n' +
    '    <article class="entry row" ng-repeat="entry in entries">\n' +
    '        <entry-item></entry-item>\n' +
    '    </article>\n' +
    '</div>\n' +
    '');
}]);
})();
