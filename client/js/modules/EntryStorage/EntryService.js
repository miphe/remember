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
            lastName: 'User'
        };
    };

    var formatUserName = function(type, u) {
        return {
            fullName: u.title + ' ' + u.firstName + ' ' + u.lastName,
            shortName: u.firstName[0] + '.' + u.lastName
        }[type];
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
                "createdBy": formatUserName('fullName', currentUser()),
                "content": {
                    "body": '# MyTitle'
                }
            };
        }
    };

    self.saveEntry = function(entry) {
        var key = this.keyIfyId(entry.id);
        localStorageService.set(key, JSON.stringify(entry));
    };

    self.keyIfyId = function(id) {
        return 'entry-' + id;
    };

    self.stripIdFromKey = function(key) {
        return key.match(/(?!entry\b|-)\b(\d|\w|-)+/g);
    };

    self.entryById = function(id) {
        var key = this.keyIfyId(id);
        var entry = localStorageService.get(key);

        if (typeof entry === "string")
            entry = JSON.parse(localStorageService.get(key));

        return entry;
    };

    self.entryByIdShort = function(id) {
        var entry = this.entryById(id);
        var excerpt = entry.content.body.match(/^.{0,70}(\w{1})/g) + ' ...';
        return {
            "id":         id,
            "prettyDate": dateFormat(entry.createdAt),
            "createdAt":  entry.createdAt,
            "author":     formatUserName('shortName', currentUser()),
            "excerpt":    Marked(excerpt, { renderer: renderer })
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
            var id = self.stripIdFromKey(k);
            self.destroy(id);
        });
    };

    self.destroy = function(id) {
        if (!id) { throw 'ID error: ' + id; }
        var key = this.keyIfyId(id);
        return localStorageService.remove(key);
    };

    self.allSavedEntryKeys = function() {
        return _.filter(localStorageService.keys(), function(k) {
            return k.match(/(entry-){1}[a-z0-9\-]*/g);
        });
    };

    self.isExisting = function(id) {
        var key = this.keyIfyId(id);
        return localStorageService.get(key) !== null;
    };

    self.hasChanges = function(peerEntry) {
        var original = this.new().content;
        var peer = peerEntry.content;
        return _.isEqual(original, peer) === false;
    };

    return self;
};
