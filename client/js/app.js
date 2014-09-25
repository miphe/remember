'use strict';

var angular = require('angular'),
    ngRoute = require('angular-route');

require('angular-local-storage');

require( './modules/AuthService' );

require( './controllers/ApplicationController' );
require( './controllers/AutoCompleteSearch' );
require( './controllers/LayoutController' );
require( './controllers/EntryController' );

require( './directives/app-version' );
require( './directives/entry-markdown' );
require( './directives/flex-panel' );

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'Authentication',
    'myApp.controllers',
    'myApp.directives'
]);
