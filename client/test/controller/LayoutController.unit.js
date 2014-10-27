'use strict';

var chai   = require('chai'),
    expect = chai.expect,
    sinon  = require('sinon'),
    _      = require('underscore');

require('../../js/controllers');

describe("LayoutController", function() {
    var $scope,
        $controller,
        localStorageService;

    beforeEach(angular.mock.module('myApp.controllers'));

    beforeEach(inject(function(_$rootScope_, $controller) {
        $scope = _$rootScope_.$new();

        localStorageService = {
            get: sinon.stub(),
            set: sinon.stub() };

        Ctrl = $controller('LayoutController', {$scope: $scope, localStorageService: localStorageService});
    }));

    describe("Panels", function() {

        xit('should initially set a panel state, if there\'s no state saved in localstorage', function() {
            _.each($scope.xp.cols, function(panel) {
                expect($scope.xp[panel]).to.not.be.undefined;
                expect(parseInt($scope.xp[panel])).to.be.an('integer');
            });

            // Should try to get existing value
            expect(localStorageService.get.called).to.be.true;

            // Since existing value doesn't exist, should try to set it
            expect(localStorageService.set.called).to.be.true;
        });

        it('should toggle panel model', function() {
            $scope.xp.search = 0;
            $scope.xp.toggle('search');
            expect($scope.xp.search).to.equal(1);
        });

        it('should update localStorage if $scope.xp.updateStorage is called', function() {
            $scope.xp.updateStorage('xp.search', 0);
            expect(localStorageService.set.calledOnce).to.be.true;
            expect(localStorageService.set.calledWith('xp.search', 0)).to.be.true;
        });

        it('should update localStorage for all panels through $scope.xp.updateAllStorage', function() {
            $scope.xp.updateAllStorage();
            expect(localStorageService.set.callCount).to.equal($scope.xp.cols.length);
        });

        // This test requires $watch to work (need AngularJS)
        // TODO: Fix
        it('should update localstorage with new panel states if model changes', function() {
            // Sets new value for a panel
            $scope.xp.search = $scope.xp.search == 0 ? 1 : 0;

            // If a panel state changes, localStorage should update all three panels
            expect(localStorageService.set.calledCount).to.equal($scope.xp.cols.length);
        });

        describe("determineClass()", function() {
            beforeEach(function() {
                $scope.xp.search = 0;
                $scope.xp.view   = 0;
                $scope.xp.write  = 0;
            });

            afterEach(function() {
                $scope.xp.search = 0;
                $scope.xp.view   = 0;
                $scope.xp.write  = 0;
            });

            // TODO: fix
            it('should determine class correctly for when one column is expanded', function() {
                var allCollapsed = {'col-sm-1' : true },
                    sm10         = { 'col-sm-10':true, 'col-xs-12': true, 'col-sm-1': false };

                // No columns expanded
                expect($scope.xp.determineClass('search')).to.eql(sm1);
                expect($scope.xp.determineClass('view')).to.eql(sm1);
                expect($scope.xp.determineClass('write')).to.eql(sm1);

                // Search column expanded
                $scope.xp.search = 1;
                expect($scope.xp.determineClass('search')).to.eql(sm10);
                expect($scope.xp.determineClass('view')).to.eql(sm1);
                expect($scope.xp.determineClass('write')).to.eql(sm1);

                // View column expanded
                $scope.xp.search = 0;
                $scope.xp.view = 1;
                expect($scope.xp.determineClass('search')).to.eql(sm1);
                expect($scope.xp.determineClass('view')).to.eql(sm10);
                expect($scope.xp.determineClass('write')).to.eql(sm1);

                // Write column expanded
                $scope.xp.view = 0;
                $scope.xp.write = 1;
                expect($scope.xp.determineClass('search')).to.eql(sm1);
                expect($scope.xp.determineClass('view')).to.eql(sm1);
                expect($scope.xp.determineClass('write')).to.eql(sm10);
            });
        });

        describe("layoutSum()", function() {
            it('should always return a number', function() {
                expect($scope.xp.layoutSum).to.be.a('function');
                var sum = $scope.xp.layoutSum();
                expect(sum).to.be.an('integer');
            });
        });

    });
});
