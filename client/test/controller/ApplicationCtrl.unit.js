'use strict';

var chai   = require('chai'),
    expect = chai.expect;

var AppCtrlModule = require('../../js/controllers/ApplicationController.js');
var AuthService = require( '../../js/modules/AuthService' );

describe("ApplicationController", function() {
    var $scope;

    beforeEach(function() {
        $scope = {};
        AppCtrlModule($scope, AuthService);
    });

    it('should have a $scope object', function() {
        expect($scope).to.be.ok;
        expect($scope).to.be.an('object');
    });

    it('should supply setCurrentUser() function', function() {
        expect($scope.setCurrentUser).to.be.a('function');
    });

    it('should set current user', function() {
        var mockUser = 'Existing user';
        expect($scope.currentUser).to.be.null;
        $scope.setCurrentUser(mockUser);
        expect($scope.currentUser).to.equal(mockUser);
    });
});
