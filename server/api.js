var express, router, glob, endpoints = [];

express = require('express');
router = express.Router();
glob = require('glob');

// Get a list of files with the .api.js suffix
glob('./server/routes/*.api.js', function (er, files) {
    files.forEach(function(file){
        endpoints.push(file.match(/\/([a-z-_]+).api.js/)[1]);
    });

    // For each found endpoint, register with router
    endpoints.forEach(function (ep) {
        router.all('/' + ep, function (req, res, next) {
            return require('./routes/' + ep + '.api')[req.method.toUpperCase()](req, res, next);
        });
    });
});

module.exports = router;
