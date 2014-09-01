'use strict';

var angular = require('angular'),
    ngRoute = require('angular-route');

require( './modules/AuthService' );
require( './controllers/ApplicationController' );

require( './directives/app-version' );
//require( './directives/dom-event' );

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'Authentication',
    'myApp.controllers',
    'myApp.directives'
]);
