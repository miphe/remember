/* globals angular */
'use strict';

var $ = require('jquery');
var _ = require('underscore');
require('../jq-extends/jq-extends');
require('angular-hotkeys');

module.exports = function($scope, hotkeys, EntryService) {

    $scope.entry = EntryService.new();

    $scope.updateExistingEntriesList = function() {
        $scope.entriesShort = EntryService.allSavedEntriesShort();
    };

    $scope.deleteAll = function() {
        if (confirm('Destroy all entries?')) {
            EntryService.destroyAll();
            $scope.updateExistingEntriesList();
        } else {
            return;
        }
    };

    $scope.closeAndNew = function() {
        $scope.saveEntry();
        $scope.resetEntry();
        $scope.updateExistingEntriesList();
    };

    $scope.saveEntry = function() {
        EntryService.saveEntry($scope.entry);
    };

    $scope.resetEntry = function() {
        $scope.entry = EntryService.new();
    };

    $scope.loadEntry = function(id) {
        $scope.previousEntry = $scope.entry;
        var newEntry = EntryService.entryById(id);
        $scope.entry = newEntry;
    };

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
