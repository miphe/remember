'use strict';

var angular = require('angular'),
    ngRoute = require('angular-route'),
    ngSanitize = require('angular-sanitize');

require('angular-local-storage');
require('./modules/AuthService');
require('./modules/EntryStorage');

/* Runs index.js in ./controllers */
require('./controllers');

/* Runs index.js in ./controllers */
require('./directives');

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'Authentication',
    'myApp.controllers',
    'myApp.directives',
    'ngSanitize'
]);
