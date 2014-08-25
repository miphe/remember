var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    handleErrors = require('../util/handleErrors');

module.exports = function () {
  return gulp.src('client/scss/*.{sass, scss}')
    .pipe(sass({
      compass: true,
      bundleExec: true,
      sourcemap: true,
      sourcemapPath: '../sass'
    }))
    // Create a minified css file
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .on('error', handleErrors)
    .pipe(gulp.dest('client/css'));
};
