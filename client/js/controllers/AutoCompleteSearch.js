'use strict';

module.exports = function($scope, $http) {
    var search = this;
    search.result = [];

    $scope.change = function () {
        search.keyword = $scope.keyword;
        if ( !search.keyword ) {
            search.results = [];
            return;
        }

        $http.get('/api/search?keyword=' + search.keyword)
            .then(function (res) {
                if ( typeof res.data.hits !== 'undefined' ) {
                    search.result = res.data.hits.hits;
                }
            });
    };
};
