/* global angular */
'use strict';

/**
 * Authentication module
 * @see https://medium.com/opinionated-angularjs/techniques-for-authentication-in-angularjs-applications-7bbf0346acec
 */
angular.module('Authentication', [])
    /**
     * The authentication service, responsible for loggin in/out users and communicating with the API
     */
    .factory('AuthService', ['$http', '$window', function ($http, $window) {
        var self = {};

        self.login = function (credentials) {
            return $http
                .post('/api/user', credentials)
                .then(function (res) {
                    $window.sessionStorage.token = res.data.data.token;
                    $window.sessionStorage.email = res.data.data.email;
                    return res.data.data.user;
                }, function(res){
                    console.log(res.data.stack);
                    alert(res.data.error);
                });
        };

        self.logout = function () {
            $window.sessionStorage.token = '';
            $window.sessionStorage.email = '';
        };

        self.isAuthenticated = function () {
            return !! $window.sessionStorage.token;
        };

        return self;
    }])

    /**
     * The login controller, logic-less and responsible for recieving user/pass and
     * handling them to the AuthService
     */
    .controller('LoginController', ['$scope', '$rootScope', 'AuthService', 'AUTH_EVENTS', function ($scope, $rootScope, AuthService, AUTH_EVENTS) {
        $scope.credentials = {
            email: '',
            pass: ''
        };
        $scope.login = function (credentials) {
            AuthService.login(credentials).then(function (user) {
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                $scope.setCurrentUser(user);
            }, function () {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });
        };
        $scope.logout = function() {
            AuthService.logout();
            $scope.setCurrentUser(null);
            $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
        };
    }])

    /**
     * Auth events to be broadcasted
     */
    .constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    })

    /**
     * Intercept http requests to broadcast authentication failures if found
     */
    .factory('AuthInterceptor', ['$rootScope', '$q', 'AUTH_EVENTS', function ($rootScope, $q, AUTH_EVENTS) {
        return {
            responseError: function (response) {
                $rootScope.$broadcast({
                    401: AUTH_EVENTS.notAuthenticated,
                    403: AUTH_EVENTS.notAuthorized,
                    419: AUTH_EVENTS.sessionTimeout,
                    440: AUTH_EVENTS.sessionTimeout
                }[response.status], response);
                return $q.reject(response);
            }
        };
    }])

    /**
     * Intercept requests to add our cached access token, to validate logged user
     */
    .factory('TokenInterceptor', ['$q', '$window', function ($q, $window) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                }
                return config;
            },

            response: function (response) {
                return response || $q.when(response);
            }
        };
    }])

    /**
     * Inject the http interceptors above ^
     */
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push(['$injector', function ($injector) {
            return $injector.get('AuthInterceptor');
        }]);
        $httpProvider.interceptors.push(['$injector', function ($injector) {
            return $injector.get('TokenInterceptor');
        }]);
    }])

;
