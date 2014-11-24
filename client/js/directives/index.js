/*
    Directives:: Index.js
    This is where you require your directives and it's dependencies.
*/

'use strict';
var app = require('angular')
    .module('myApp.directives', []);

app.directive('appVersion', require('./app-version'));
app.directive('entryMarkdown', require('./entry-markdown'));
app.directive('flexPanel', require('./flex-panel'));
app.directive('entryItem', require('./entry-item'));
app.directive('entryFooter', require('./entry-footer'));
