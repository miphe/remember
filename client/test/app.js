
/* Testing assets */
require('chai');
require('sinon');

/* Require Angular assets */
require('angular');
require('angular-route');
require('angular-mocks');

/* Require suites */

/* -> Controllers */
require('./controller/ApplicationCtrl.unit.js');
require('./controller/EntryController.unit.js');
require('./controller/LayoutController.unit.js');

/* -> Modules */
// Authservice is only tested naively, should be reworked and properly mocked.
require('./module/AuthService.unit.js');

/* -> Directives */
require('./directives/GeneralDirectives.unit.js');
