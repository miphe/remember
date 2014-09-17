app.controller('searchController', function ($scope, Data, $filter) {
    $scope.entries = Data.getEntries();

    // This search is not powerfull as Elastic Search, but its fun to play with it
    // It filters the entries and update Data with the result
    $scope.$watch("search", function(query){
        $scope.filteredEntries = $filter("filter")($scope.entries, query);
        Data.setEntries($scope.filteredEntries);
    });
});
