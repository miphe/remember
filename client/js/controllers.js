/* globals angular */
'use strict';

/* Controllers */
angular.module('myApp.controllers', [])
  .controller('AutoCompleteSearch', ['$scope', '$http', function($scope, $http) {
    var search = this;
    search.result = [];

    $scope.change = function() {
      search.keyword = $scope.keyword;

      $http.post('/search/engage', { keyword : search.keyword })
        .success(function(data) {
          if (typeof data.hits !== 'undefined') {
            search.result = data.hits.hits;
          }
        });
    };    
  }]);

