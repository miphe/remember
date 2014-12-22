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
            angular.module('myApp.directives');
        });

        beforeEach(inject(function($rootScope, $compile) {
            $scope = $rootScope.$new();
            $scope.entry = { content: { body: '# Standard title' } };
            // $scope.renderPreview = sinon.spy();

            compiled = $compile(template)($scope);

            $scope.$apply();
            console.log($scope);
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

        xit('should call renderPreview function when model changes', function() {
            // expect($scope.renderPreview.called, 'expect not to be called').to.be.false;

            var el = compiled.find('textarea');
            $(el).val('# A New Title!');

            $scope.$apply();

            // expect($scope.renderPreview.calledOnce, 'expect called once').to.be.true;
        });
    });
});
