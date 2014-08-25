var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    config = require('../../nodemon.json');

// Start our application via nodemon
module.exports = function () {
    nodemon(config);
};
