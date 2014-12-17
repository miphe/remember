'use strict';

var chai   = require('chai'),
    expect = chai.expect,
    sinon  = require('sinon');

var Ctrl = require('../../js/controllers/EntryController.js');

describe("EntryController", function() {
    var $scope,
        hotkeys,
        EntryService;

    beforeEach(function() {
        $scope = {};
        hotkeys = { add : sinon.stub() };
        EntryService = {
            new: sinon.stub().returns({
                "content": {"body": '# MyTitle'}
            })
        };
        Ctrl($scope, hotkeys, EntryService);
    });

    describe("Entry", function() {

        it('should set default entry if there\'s none in session', function() {
            expect($scope).to.be.ok;
            expect($scope).to.be.an('object');
            expect($scope.entry.content.body).to.have.string('# MyTitle');
        });

        it('should close entry and create new', function() {
            var saveEntry = sinon.spy($scope, 'saveEntry');
            var resetEntry = sinon.spy($scope, 'resetEntry');
            expect($scope.closeAndNew).to.be.a('function');

            // Run the closeAndNew() function
            $scope.closeAndNew();

            expect(saveEntry.calledOnce).to.be.true;
            expect(resetEntry.calledOnce).to.be.true;
            expect(saveEntry.calledBefore(resetEntry)).to.be.true;
        });

        // Needs to be re-written
        xit('should reset an entry', function() {
            expect($scope.entry.content.body).to.equal('# MyTitle');
            $scope.resetEntry();
            expect($scope.entry.content.body).to.equal('# MyTitle');
        });

    });

    describe("Hotkeys", function() {
        it('should add hotkeys', function() {
            expect($scope.hotkeys).to.be.an('array');
            var numberOfHotkeys = $scope.hotkeys.length;

            expect(hotkeys.add.callCount).to.equal(numberOfHotkeys);
            expect(hotkeys.add.calledWith($scope.hotkeys[0])).to.be.true;
        });
    });
});
