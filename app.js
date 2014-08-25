#!/usr/bin/env node
var debug = require('debug')('remember'),
    config = require('./config.json'),
    server = require('./server/server'),
    app = server.listen(server.get('port'), function() {
        debug('Express server listening on port ' + app.address().port);
    });

module.exports = app;
