var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    handleErrors = require('../util/handleErrors');

module.exports = function () {
  return gulp.src('client/scss/**/*.scss')
    .pipe(sass({
      compass: true,
      bundleExec: true,
      sourcemapPath: '../sass'
    }))
    .pipe(gulp.dest('client/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .on('error', handleErrors)
    .pipe(gulp.dest('client/css'));
};
