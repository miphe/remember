'use strict';

var angular = require('angular'),
    ngRoute = require('angular-route');

require('./controllers');
require('./directives');
require('./filters');
require('./services');

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    'ui.bootstrap'
]);

