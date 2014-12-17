/* globals angular */
'use strict';

var $ = require('jquery');
var _ = require('underscore');
require('../jq-extends/jq-extends');
require('angular-hotkeys');

module.exports = function($scope, hotkeys, EntryService) {

    $scope.entry = EntryService.new();

    $scope.closeAndNew = function() {
        $scope.saveEntry();
        $scope.resetEntry();
    };

    $scope.saveEntry = function() {
        // TODO: Update existing entry or create new entry
        console.log('Saving to db..');
    };

    $scope.resetEntry = function() {
        console.log('Resetting entry..');
        $scope.entry = EntryService.new();
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
};
