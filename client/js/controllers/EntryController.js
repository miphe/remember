
/*

    TODO:
    This controller needs to be split into two controller that speak with eachother.
    Right now we invoke this controller twice;
    - Search view
    - Write view

    Most functionality is needed for the search/list view.

    After this split is done, we will get rid of the bug where methods are called
    twice every time. Right now this is annoying mainly due to confirmation popup
    is rendered twice sometimes.

*/

/* globals angular */
'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Marked = require('marked');
require('../jq-extends/jq-extends');
require('angular-hotkeys');

module.exports = function($rootScope, $scope, hotkeys, EntryService) {

    $scope.entry = EntryService.new();
    $scope.previewEl = $('.preview-container');

    $scope.broatcastListRender = function() {
        $rootScope.$broadcast('listRender');
    };

    $scope.broadcastEntryLoad = function(id) {
        $rootScope.$broadcast('entryLoad', id);
    };

    $scope.setExistingEntriesList = function() {
        $scope.entriesShort = EntryService.allSavedEntriesShort();
    };

    $scope.updateExistingEntriesList = function() {
        var diff = $scope.deduceEntryDiff();

        var toAdd = diff.addedItems();
        _.each(toAdd, function(itm) {
            $scope.entriesShort.push(itm);
        });

        var toDel = diff.removedItems();
        _.each(toDel, function(itm) {
            var i = $scope.entriesShort.indexOf(itm);
            if (i > -1) {
                $scope.entriesShort.splice(i, 1);
            }
        });

        if (_.flatten([toAdd, toDel]).length < 1) {
            // TODO: Instead of setting all entries like this
            // we should write a function like 'syncEntries'.
            // This function would require each entry to have something like
            // a token or a revision stamp that is updated every time it is saved.
            // That way we can easily see if the entry is updated,
            // without needing to compare the content.

            // We should also have revision numbers on each entry, so we can with
            // certainty check if one version is newer or older than the next.
            $scope.setExistingEntriesList();
        }
    };

    // Should be moved to service? Not sure.
    $scope.deduceEntryDiff = function() {
        return {

            // Returns true if the arg entry exists in model (check by ID)
            inModel: function(entry) {
                return _.any($scope.entriesShort, function(itm) {
                    return _.isEqual(entry.id, itm.id);
                });
            },

            // Returns true if the arg entry exists in local storage (check by ID)
            inStorage: function(entry) {
                return _.any(EntryService.allSavedEntriesShort(), function(itm) {
                    return _.isEqual(entry.id, itm.id);
                });
            },

            // Returns all items present in localstorage, but not present in model.
            addedItems: function() {
                var that = this;
                return _.reject(EntryService.allSavedEntriesShort(), function(itm) {
                    return that.inModel(itm);
                });
            },

            // Returns all items NOT present in localstorage, but present in model.
            removedItems: function() {
                var that = this;
                return _.reject($scope.entriesShort, function(itm) {
                    return that.inStorage(itm);
                });
            }

        };
    };

    $scope.deleteAll = function() {
        if (confirm('Destroy all entries?')) {
            EntryService.destroyAll();
            $scope.broatcastListRender();
        } else { return; }
    };

    $scope.closeAndNew = function() {
        $scope.saveEntry();
        $scope.resetEntry();
        $scope.broatcastListRender();
    };

    $scope.saveEntry = function() {
        if (EntryService.hasChanges($scope.entry)) {
            EntryService.saveEntry($scope.entry);
            $scope.broatcastListRender();
        } else {
            console.warn('Will not save untouched entry.');
            return false;
        }
    };

    $scope.resetEntry = function() {
        $scope.entry = EntryService.new();
    };

    // Naive check for safety
    // - Checks if the loaded entry is saved (by ID)
    // - Does NOT check for updated content, just if entry is not untouched
    $scope.loadEntry = function(id) {
        if (EntryService.isExisting($scope.entry.id) || !EntryService.hasChanges($scope.entry)) {
            $scope.entry = EntryService.entryById(id);
        } else if (EntryService.hasChanges($scope.entry)) {
            if (confirm('Discard current entry?')) {
                $scope.entry = EntryService.entryById(id);
            }
        } else {
            console.info('Corny case from loadEntry()');
            return false;
        }
    };

    $scope.renderPreview = function(n) {
        $($scope.previewEl).html(Marked(n));
    };

    $scope.deleteAndNew = function(id, shortCircuit) {
        var exec = function() {
            $scope.deleteEntry(id);
            $scope.resetEntry();
        };

        if (shortCircuit) {
            exec();
        } else {
            if (confirm('Really delete this entry?')) {
                exec();
            }
            return false;
        }
    };

    $scope.currentEntryId = function() {
        return $scope.entry.id;
    };

    $scope.deleteEntry = function(id) {
        EntryService.destroy(id);
        $scope.broatcastListRender();
    };

    $scope.$watch('entry.content.body', function(n, o) {
        if (!n)
            return;

        $scope.renderPreview(n);
    });

    $scope.$on('entryLoad', function (e, id) {
        $scope.loadEntry(id);
    });

    $scope.$on('listRender', function (e, id) {
        // TODO: make sure that updates to existing entries also is updated in the model
        // thus, it will show on the page as well. Cheers.
        $scope.updateExistingEntriesList();
        // $scope.setExistingEntriesList();
    });

    // Entry Hotkeys
    $scope.hotkeys = [
        {
            combo: 'n',
            description: 'Expand writing panel, focus textarea, prepare for writing.',
            callback: function(e) {
                e.preventDefault();
                $scope.xp.write = 1;
                $('#entry-textarea').removeAttr('disabled').focusEnd();
            }
        },
        {
            combo: 'shift+enter',
            description: 'Save current entry',
            allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
            callback: function(e) {
                e.preventDefault();
                if ($('#entry-textarea').is(':focus')) {
                    $scope.closeAndNew();
                }
            }
        }
    ];

    // Adds all hotkeys
    _.each($scope.hotkeys, function(itm) {
        hotkeys.add(itm);
    });

    $scope.setExistingEntriesList();
};
