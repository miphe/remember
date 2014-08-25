var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    notify = require('gulp-notify');

// JSHint task
module.exports = function() {
    gulp.src(['client/js/**/*.js', 'server/**/*.js', '!client/js/app.bundle.js'])
        // Pass in our jshint rules
        .pipe(jshint('.jshintrc'))
        // Set our jshint reporter - using jshint-stylish
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(notify({message: 'JSLint task complete', onLast: true}));
};
