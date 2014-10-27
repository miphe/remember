var gulp         = require('gulp'),
    browserify   = require('browserify'),
    bundleLogger = require('../util/bundleLogger'),
    handleErrors = require('../util/handleErrors'),
    source       = require('vinyl-source-stream');

module.exports = function() {
    bundleLogger.start();
    return browserify('./client/test/app.js', {debug: true})
        .bundle()
        .on('error', handleErrors)
        .pipe(source('app.bundle.test.js'))
        .pipe(gulp.dest('client/test'))
        .on('end', bundleLogger.end);
};
