
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
        console.log('Broadcasting listrender.');
        $rootScope.$broadcast('listRender');
    };

    $scope.broadCastEntryLoad = function(id) {
        $rootScope.$broadcast('entryLoad', id);
    };

    $scope.updateExistingEntriesList = function() {
        $scope.entriesShort = EntryService.allSavedEntriesShort();
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

    $scope.deleteAndNew = function(id) {
        if (confirm('Really delete this entry?')) {
            $scope.deleteEntry(id);
            $scope.resetEntry();
        } else {
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
        $scope.updateExistingEntriesList();
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

    $scope.updateExistingEntriesList();
};
