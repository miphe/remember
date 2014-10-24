'use strict';

var angular = require('angular'),
    ngRoute = require('angular-route'),
    ngSanitize = require('angular-sanitize');

require('angular-local-storage');

require( './modules/AuthService' );

/* Runs index.js in ./controllers */
require('./controllers');

require( './directives/app-version' );
require( './directives/entry-markdown' );
require( './directives/flex-panel' );

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'Authentication',
    'myApp.controllers',
    'myApp.directives',
    'ngSanitize'
]);
