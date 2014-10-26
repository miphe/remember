/*
    Controllers:: Index.js
    This is where you require your controllers and it's dependencies.
*/

'use strict';
var app = require('angular')
    .module('myApp.controllers', ['Authentication', 'LocalStorageModule', 'cfp.hotkeys']);

app.controller('ApplicationController', require('./ApplicationController'));
app.controller('AutoCompleteSearch', require('./AutoCompleteSearch'));
app.controller('EntryController', require('./EntryController'));
app.controller('LayoutController', require('./LayoutController'));
app.controller('ListController', require('./ListController'));
