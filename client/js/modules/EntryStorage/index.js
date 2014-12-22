/*
    Modules:: Index.js
    This is where you require modules and their dependencies.
*/

'use strict';
var app = require('angular')
    .module('EntryStorageModule', []);

app.factory('EntryService', require('./EntryService'));
