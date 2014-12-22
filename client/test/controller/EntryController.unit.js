'use strict';

var chai   = require('chai'),
    expect = chai.expect,
    sinon  = require('sinon');

var Ctrl = require('../../js/controllers/EntryController.js');

describe("EntryController", function() {
    var $scope,
        hotkeys,
        EntryService,
        saveEntry,
        resetEntry,
        listRender,
        deleteEntry;

    beforeEach(inject(function(_$rootScope_) {
        $scope = _$rootScope_.$new();
        hotkeys = { add : sinon.stub() };
        EntryService = {
            mock: true,
            new: sinon.stub().returns({
                content: { body: '# MyTitle', mock: true}
            }),
            allSavedEntriesShort: sinon.stub(),
            hasChanges: sinon.stub(),
            isExisting: sinon.stub(),
            entryById: sinon.stub(),
            destroy: sinon.stub()
        };
        Ctrl(_$rootScope_, $scope, hotkeys, EntryService);
    }));

    it('should have an OK scope', function() {
        expect($scope).to.be.ok;
        expect($scope).to.be.an('object');
    });

    it('should set default entry if there\'s none in session', function() {
        expect($scope.entry.content.body).to.have.string('# MyTitle');
    });

    it('should reset an entry', function() {
        var a = EntryService.new.callCount;
        expect($scope.entry.content.body).to.equal('# MyTitle');
        $scope.resetEntry();
        var b = EntryService.new.callCount;
        expect(b > a).to.be.true;
    });

    describe("Helper methods", function() {
        beforeEach(function() {
            saveEntry = sinon.spy($scope, 'saveEntry');
            resetEntry = sinon.spy($scope, 'resetEntry');
            deleteEntry = sinon.spy($scope, 'deleteEntry');
            listRender = sinon.spy($scope, 'broatcastListRender');
        });

        afterEach(function() {
            saveEntry.restore();
            resetEntry.restore();
            deleteEntry.restore();
            listRender.restore();
        });

        it('should run closeAndNew methods', function() {
            expect($scope.closeAndNew).to.be.a('function');

            $scope.closeAndNew();

            expect(saveEntry.calledOnce).to.be.true;
            expect(resetEntry.calledOnce).to.be.true;
            expect(listRender.calledOnce).to.be.true;
            expect(saveEntry.calledBefore(resetEntry)).to.be.true;
        });

        it('should run deleteAndNew methods', function() {
            expect($scope.deleteAndNew).to.be.a('function');

            $scope.deleteAndNew('mock-id-123', true);
            console.log($scope.deleteAndNew);
            expect(deleteEntry.calledOnce).to.be.true;
            expect(resetEntry.calledOnce).to.be.true;
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
