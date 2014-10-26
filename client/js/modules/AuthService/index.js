/*
    Modules:: Index.js
    This is where you require modules and their dependencies.
*/

'use strict';
var app = require('angular')
    .module('Authentication', []);

app.factory('AuthService', require('./AuthService'));
app.controller('LoginController', require('./LoginController'));
app.constant('AUTH_EVENTS', require('./AuthEvents'));
app.constant('AUTH_EVENTS', require('./AuthEvents'));
app.factory('AuthInterceptor', require('./AuthInterceptor'));
app.factory('TokenInterceptor', require('./TokenInterceptor'));

/**
 * Inject the http interceptors above ^
 */
app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push(['$injector', function ($injector) {
        return $injector.get('AuthInterceptor');
    }]);
    $httpProvider.interceptors.push(['$injector', function ($injector) {
        return $injector.get('TokenInterceptor');
    }]);
}])
