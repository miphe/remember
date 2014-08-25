var gulp         = require('gulp'),
    browserify   = require('browserify'),
    bundleLogger = require('../util/bundleLogger'),
    handleErrors = require('../util/handleErrors'),
    source       = require('vinyl-source-stream');

module.exports = function() {
    bundleLogger.start();
    return browserify('./client/js/app.js', {debug: true})
        .bundle()
        .on('error', handleErrors)
        .pipe(source('app.bundle.js'))
        .pipe(gulp.dest('client/js'))
        .on('end', bundleLogger.end);
};
