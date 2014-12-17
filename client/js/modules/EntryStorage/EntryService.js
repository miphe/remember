'use strict';

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
                "id": guid(),
                "createdAt": new Date(),
                "createdBy": currentUser(),
                "content": {
                    "body": '# MyTitle'
                }
            };
        }
    };

    self.saveEntry = function(entry) {
        // JSON.stringify(entry)
        localStorageService.set('entry-' + entry.id, entry);
    };

    self.getEntryById = function(id) {
        // JSON.parse
        return localStorageService.get('entry-' + id);
    };

    return self;
};
