'use strict';

var chai   = require('chai'),
    expect = chai.expect,
    sinon  = require('sinon');

require('../../js/modules/AuthService');
require('../../js/modules/EntryStorage');

describe("EntryStorage module", function() {



    describe("EntryService", function() {
        var es,
            self,
            auths;

        beforeEach(function() {
            self = this;

            self.authService = {
                isAuthenticated: sinon.stub()
            };

            self.localStorageService = {
                set: sinon.stub(),
                get: sinon.stub()
            };

            angular.mock.module('EntryStorageModule', {
                AuthService: self.authService,
                localStorageService: self.localStorageService
            });
        });

        beforeEach(inject(function(_EntryService_) {
            es = _EntryService_;
        }));

        // TODO: fix this test, when authentication facilities are properly installed
        xit('should not let you create an entry if you are not logged in', function() {
            expect(es.new).to.throw(ReferenceError, /Need to be authenticated/);
        });

        describe("Logged in", function() {
            beforeEach(function() {
                // TODO: Login
            });

            it('should return new entry', function() {
                var newEntry = es.new();

                expect(newEntry).to.be.an('object');
                expect(newEntry.id).to.exist;
                expect(newEntry.createdAt).to.be.a('date');
                expect(newEntry.content.body).to.have.string('# MyTitle');
            });

            it('should save entry in localStorage; saveEntry()', function() {
                // Confirms methods were not called yet
                expect(self.localStorageService.set.called).to.be.false;

                // Creates a new entry
                var anEntry = es.new();
                anEntry.content.body = '# New test-entry';
                es.saveEntry(anEntry);

                // Confirms correct methods were called
                expect(self.localStorageService.set.calledOnce).to.be.true;
                expect(self.localStorageService.set.calledWith('entry-' + anEntry.id, JSON.stringify(anEntry))).to.be.true;
            });

            it('should retrieve entry from localStorage; entryById()', function() {
                // Confirms methods were not called yet
                expect(self.localStorageService.get.called).to.be.false;

                var id = 123;
                es.entryById(id);

                // Confirms correct methods were called
                expect(self.localStorageService.get.calledOnce, 'called once.').to.be.true;
                expect(self.localStorageService.get.calledWith('entry-' + id), 'called with ID: entry-' + id).to.be.true;
            });
        });
    });
});
