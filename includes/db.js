var config = require('../config.json'),
    db = require('monk')(config.dbDSN);

module.exports = db;
