'use strict';

var chai   = require('chai'),
    expect = chai.expect,
    sinon  = require('sinon');

var AuthEvents = require('../../js/modules/AuthService/AuthEvents.js');
var AuthInterceptor = require('../../js/modules/AuthService/AuthInterceptor.js');
var AuthService = require('../../js/modules/AuthService/AuthService.js');

describe("AuthService module", function() {
    describe("AuthEvents", function() {
        it('should be an object', function() {
            expect(AuthEvents).to.be.an('object');
        });

        it('should not be empty', function() {
            expect(AuthEvents).to.not.be.empty;
        });
    });

    describe("AuthInterceptor", function() {
        var $rootScope = {
                $broadcast: function() {} },
            $q = {
                reject:     function() {} };

        var $bc,
            reject,
            mockRes,
            ai;

        beforeEach(function() {
            $bc     = sinon.spy($rootScope, '$broadcast');
            reject  = sinon.spy($q, 'reject');
            ai      = AuthInterceptor($rootScope, $q, AuthEvents);
            mockRes = { status: 403 };
        });

        afterEach(function() {
            $rootScope.$broadcast.restore();
            $q.reject.restore();
        });

        it('should exist and be an object', function() {
            expect(ai).to.be.an('object');
        });

        it('should $broadcast error', function() {
            ai.responseError(mockRes);
            expect($bc.calledOnce).to.be.true;
        });

        it('should reject with response', function() {
            expect(ai.responseError).to.be.a('function');
            ai.responseError(mockRes);
            expect(reject.calledOnce).to.be.true;
        });
    });

    describe("AuthService", function() {
        var auth,
            $window = {
                sessionStorage: {
                    token: null,
                    email: null
                }
            },
            credentials = {
                email: "existing_user@test.com",
                pass: "password"
            },
            then  = sinon.spy(function() {}),
            post  = sinon.spy(function() { return {then: then} }),
            $http = {post: post};

        beforeEach(function() {
            auth  = AuthService($http, $window);
        });

        afterEach(function() {
            $window = {
                sessionStorage: {
                    token: null,
                    email: null
                }
            };
        });

        it('should attempt to login user', function() {
            auth.login(credentials);
            expect($http.post.calledOnce).to.be.true;
            expect($http.post.calledWith('/api/user', credentials)).to.be.true;
            expect($http.post().then.calledOnce).to.be.true;
        });

        it('should logout user by emptying session token', function() {
            expect($window.sessionStorage.token).to.be.null;
            expect($window.sessionStorage.email).to.be.null;
            auth.logout();
            expect($window.sessionStorage.token).to.be.a('string');
            expect($window.sessionStorage.token).to.be.empty;
            expect($window.sessionStorage.email).to.be.a('string');
            expect($window.sessionStorage.email).to.be.empty;
        });
    });
});
