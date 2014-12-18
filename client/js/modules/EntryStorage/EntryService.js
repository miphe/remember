'use strict';

var _ = require('underscore');
var Marked = require('marked');
var dateFormat = require('dateformat');
var renderer = new Marked.Renderer();

renderer.heading = function (text, level) {
    var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    return '<h6>' + text + '</h6>';
};

/**
 * EntryService, responsible for handling entries through localStorage
 */
module.exports = function(AuthService, localStorageService) {

    var self = {};

    // API's work...
    var currentUser = function() {
        return {
            title: 'Mr',
            firstName: 'Existing',
            lastName: 'H User'
        };
    };

    // Also doesn't belong here
    var guid = (function() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
                   .toString(16)
                   .substring(1);
      }
      return function() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
               s4() + '-' + s4() + s4() + s4();
      };
    })();

    // Let's keep the below code relevant

    self.new = function() {
        if (!AuthService.isAuthenticated) {
            throw new ReferenceError('Need to be authenticated to create entries');
        } else {
            return {
                "id":        guid(),
                "createdAt": new Date(),
                "createdBy": currentUser(),
                "content": {
                    "body": '# MyTitle'
                }
            };
        }
    };

    self.saveEntry = function(entry) {
        localStorageService.set('entry-' + entry.id, JSON.stringify(entry));
    };

    self.stripIdFromKey = function(key) {
        return key.match(/(?!entry\b|-)\b(\d|\w|-)+/g);
    };

    self.entryById = function(id) {
        var entry = localStorageService.get('entry-' + id);

        if (typeof entry == "string")
            entry = JSON.parse(localStorageService.get('entry-' + id));

        return entry;
    };

    self.entryByIdShort = function(id) {
        var entry = this.entryById(id);
        var excerpt = entry.content.body.match(/^.{0,70}(\w{1})/g) + ' ...'
        return {
            "id":        id,
            "createdAt": dateFormat(entry.createdAt),
            "author":    entry.createdBy.title + ' ' + entry.createdBy.firstName + ' ' + entry.createdBy.lastName,
            "excerpt":   Marked(excerpt, { renderer: renderer })
        };
    };

    self.allSavedEntriesShort = function() {
        var allKeys = this.allSavedEntryKeys();
        return _.map(allKeys, function(k) {
            var id = self.stripIdFromKey(k);
            return self.entryByIdShort(id);
        });
    };

    self.destroyAll = function() {
        var allKeys = this.allSavedEntryKeys();
        return _.each(allKeys, function(k) {
            localStorageService.remove(k);
        });
    };

    self.allSavedEntryKeys = function() {
        return _.filter(localStorageService.keys(), function(k) {
            return k.match(/(entry-){1}[a-z0-9\-]*/g);
        });
    };

    return self;
};
