'use strict';

var chai   = require('chai'),
    expect = chai.expect,
    sinon  = require('sinon'),
    $      = require('jquery');

require('../../js/directives');

describe("GeneralDirectives", function() {
    var $scope,
        compiled;

    describe("EntryMarkdown directive", function() {
        var template = '<entry-markdown></entry-markdown>';

        beforeEach(function() {
            // angular.module('templates');
            angular.module('myApp.directives');
        });

        beforeEach(inject(function($rootScope, $compile) {
            $scope = $rootScope.$new();

            // $scope.entryContent = '# Test data';
            compiled = $compile(template)($scope);
            $scope.$apply();
        }));

        afterEach(function() {
            if($scope.renderPreview && (typeof $scope.renderPreview.restore == 'function')) {
                $scope.renderPreview.restore();
            }
        });

        xit('should focus textarea initially', function() {
            var focused = angular.element(document.activeElement)
            expect(false).to.be.true;
        });

        // should be focused initially
        // should have 'entryContent' model
        // should be disabled if panel is not open
        // should NOT be disabled if panel is open
        // should have tabindex 1

        // should call renderPreview function when model changes
        it('should call renderPreview function when model changes', function() {
            var el = $(compiled).find('#entry-textarea');

            $scope.renderPreview = sinon.spy();
            $scope.$apply();

            console.log($(compiled));
            console.log($scope.entryContent);
            expect($scope.renderPreview.calledOnce).to.be.true;
        });

        xit('should run test..', function() {
            console.log(compiled.find('#entry-textarea'));
            expect(false).to.be.true;
        });
    });
});
