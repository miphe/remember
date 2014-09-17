app.controller('headerController', function ($scope, Data) {
    $scope.entries = Data.getEntries();

    $scope.countBookmarked = $scope.entries.filter(function (element) {
        return element.bookmarked;
    });
});
