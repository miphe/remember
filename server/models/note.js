var db = require('../server').get('db');

/**
 * User model
 */
var Note = {};

Note.save = function (note) {
    return db.get('notes').insert(note);
};

Note.get = function (id) {
    return db.get('notes').findById(id);
};

Note.list = function(filters) {
    return db.get('notes').find(filters);
};

module.exports = Note;
