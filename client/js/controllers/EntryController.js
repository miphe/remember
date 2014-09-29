/* globals angular */
'use strict';

var $ = require('jquery');
require('../jq-extends/jq-extends');
require('angular-hotkeys');

angular.module('myApp.controllers')
    .controller('EntryController', function($scope, hotkeys) {

        // TODO: Get entry from DB, or set it to ''
        $scope.entryContent = "# My entry title";

        $scope.closeAndNew = function() {
            $scope.saveEntry();
            $scope.resetEntry();
        };

        $scope.saveEntry = function() {
            // TODO: Update existing entry or create new entry
            console.log('Saving to db..');
        };

        $scope.resetEntry = function() {
            console.log('Resetting entry content..');
            $scope.entryContent = "# ";
        };

        // Entry Hotkeys
        hotkeys.add({
            combo: 'shift+enter',
            description: 'Save current entry',
            allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
            callback: function(e) {
                e.preventDefault();
                if ($('#entry-textarea').is(':focus')) {
                    $scope.closeAndNew();
                }
            }
        });

        hotkeys.add({
            combo: 'n',
            description: 'Expand writing panel, focus textarea, prepare for writing.',
            callback: function(e) {
                e.preventDefault();
                $scope.xp.write = 1;
                $('#entry-textarea').removeAttr('disabled').focusEnd();
            }
        });
    });
