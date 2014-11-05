'use strict';

var chai   = require('chai'),
    expect = chai.expect,
    sinon  = require('sinon'),
    _      = require('underscore');

require('angular-local-storage');
require('../../js/controllers');

describe("LayoutController", function() {
    var $scope,
        $controller,
        localStorageService,
        ls,
        Ctrl;

    beforeEach(function() {
        angular.mock.module('myApp.controllers');
        angular.mock.module('LocalStorageModule');
    });

    beforeEach(inject(function($rootScope, $controller, _localStorageService_) {
        $scope = $rootScope.$new();
        localStorageService = _localStorageService_;
        ls = {};

        ls.get = sinon.spy(localStorageService, 'get');
        ls.set = sinon.spy(localStorageService, 'set');

        Ctrl = $controller('LayoutController', {
            $scope: $scope,
            localStorageService: localStorageService
        });

        $scope.$apply();
    }));

    afterEach(function() {
        localStorageService.get.restore();
        localStorageService.set.restore();
    });

    describe("Panels", function() {

        it('should set and get panel values initially', function() {

            _.each($scope.xp.cols, function(panel) {
                expect($scope.xp[panel]).to.not.be.undefined;
                expect($scope.xp[panel]).to.be.within(0, 1);
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
            var initialCount = localStorageService.set.callCount;
            $scope.xp.updateStorage('xp.search', 1);
            expect(localStorageService.set.callCount).to.equal(initialCount + 1);
            expect(localStorageService.set.calledWith('xp.search', 1)).to.be.true;
        });

        it('should update localStorage for all panels through $scope.xp.updateAllStorage', function() {
            var initialCount = localStorageService.set.callCount;
            $scope.xp.updateAllStorage();
            expect(localStorageService.set.callCount).to.equal(initialCount + $scope.xp.cols.length);
        });

        it('should update localstorage with all new panel states if one panel\'s model changes', function() {
            var initialCount = localStorageService.set.callCount;
            $scope.xp.search = $scope.xp.search == 0 ? 1 : 0;
            $scope.$apply();
            expect(localStorageService.set.callCount).to.equal(initialCount + $scope.xp.cols.length);
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
            xit('should determine class correctly for when one column is expanded', function() {
                var allCollapsed = {'col-sm-1' : true },
                    sm10         = { 'col-sm-10':true, 'col-xs-12': true, 'col-sm-1': false };

                // No columns expanded
                expect($scope.xp.determineClass('search')).to.eql(allCollapsed);
                expect($scope.xp.determineClass('view')).to.eql(allCollapsed);
                expect($scope.xp.determineClass('write')).to.eql(allCollapsed);

                // Search column expanded
                // $scope.xp.search = 1;
                // expect($scope.xp.determineClass('search')).to.eql(sm10);
                // expect($scope.xp.determineClass('view')).to.eql(sm1);
                // expect($scope.xp.determineClass('write')).to.eql(sm1);

                // // View column expanded
                // $scope.xp.search = 0;
                // $scope.xp.view = 1;
                // expect($scope.xp.determineClass('search')).to.eql(sm1);
                // expect($scope.xp.determineClass('view')).to.eql(sm10);
                // expect($scope.xp.determineClass('write')).to.eql(sm1);

                // // Write column expanded
                // $scope.xp.view = 0;
                // $scope.xp.write = 1;
                // expect($scope.xp.determineClass('search')).to.eql(sm1);
                // expect($scope.xp.determineClass('view')).to.eql(sm1);
                // expect($scope.xp.determineClass('write')).to.eql(sm10);
            });
        });

        describe("layoutSum()", function() {
            it('should always return a number', function() {
                expect($scope.xp.layoutSum).to.be.a('function');
                expect($scope.xp.layoutSum()).to.be.a('number');

                $scope.xp.search = 1,
                $scope.xp.view   = 0,
                $scope.xp.write  = 1;
                $scope.$apply();
                expect($scope.xp.layoutSum()).to.equal(2);

                $scope.xp.search = 1,
                $scope.xp.view   = 1,
                $scope.xp.write  = 1;
                $scope.$apply();
                expect($scope.xp.layoutSum()).to.equal(3);
            });
        });

    });
});
