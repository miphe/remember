/* globals angular */
'use strict';


var ButtonsCtrl = function ($scope) {
  $scope.singleModel = 1;
  $scope.radioModel = 'Middle';
  $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };
};

/* Controllers */
angular.module('myApp.controllers', [])
    .controller('MyCtrl1', ['$scope', function($scope) {

    }])
    .controller('ButtonsCtrl', ['$scope', function($scope) {
      
    }]);
