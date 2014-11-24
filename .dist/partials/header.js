(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partialsheader.html',
    '<header class="top-header">\n' +
    '\n' +
    '    <div class="is-hidden navbar navbar-inverse navbar-fixed-top" role="navigation">\n' +
    '       <div class="container">\n' +
    '            <div class="navbar-header">\n' +
    '                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">\n' +
    '                    <span class="sr-only">Toggle navigation</span>\n' +
    '                    <span class="icon-bar"></span>\n' +
    '                </button>\n' +
    '                <a class="navbar-brand" href="#">Remember - Taking notes has never been easier.</a>\n' +
    '            </div>\n' +
    '            <div class="collapse navbar-collapse">\n' +
    '                <ul class="nav navbar-nav">\n' +
    '                </ul>\n' +
    '            </div><!--/.nav-collapse -->\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="app-title-area"><h1>Remember<span> - Taking notes has never been easier.</span></h1></div>\n' +
    '\n' +
    '    <div class="user-global-module login-controller logged-in-{{isLogged()}}" ng-controller="LoginController">\n' +
    '        <div ng-if="isLogged()">\n' +
    '           You\'re logged in. <a href="#" ng-click="logout()">logout?</a>\n' +
    '        </div>\n' +
    '\n' +
    '        <form class="form-inline" role="form" name="loginForm" method="post" ng-submit="login(credentials)" novalidate ng-if="!isLogged()">\n' +
    '            <div class="form-group">\n' +
    '                <div class="input-group">\n' +
    '                    <div class="input-group-addon">@</div>\n' +
    '                    <input class="form-control" type="email" placeholder="Enter email" id="email" ng-model="credentials.email">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group">\n' +
    '                <input type="password" class="form-control" id="pass" placeholder="Password" ng-model="credentials.pass">\n' +
    '            </div>\n' +
    '\n' +
    '            <button type="submit" class="btn btn-default">Login</button>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</header>\n' +
    '');
}]);
})();
