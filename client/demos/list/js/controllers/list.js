app.controller('listController', function ($scope, Data, $filter) {
    $scope.entries = Data.getEntries();

    $scope.toggleShared = function($index){
        if ($scope.entries[$index].shared === true) {
            $scope.entries[$index].shared = false;
        } else {
            $scope.entries[$index].shared = true;
        }
    }

    $scope.toggleBookmarked = function($index){
        if ($scope.entries[$index].bookmarked === true) {
            $scope.entries[$index].bookmarked = false;
        } else {
            $scope.entries[$index].bookmarked = true;
        }
    }

    $scope.toggleCollapsed = function($index){
        if ($scope.entries[$index].collapsed === true) {
            $scope.entries[$index].collapsed = false;
        } else {
            $scope.entries[$index].collapsed = true;
        }
    }

    // This buddy watch for interactions and update the $scope.entries when searching
    $scope.$watch(function () {
        return Data.getEntries();
    }, function (newValue) {
        if (newValue) $scope.entries = newValue;
    });
});
