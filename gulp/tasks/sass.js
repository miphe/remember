var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    handleErrors = require('../util/handleErrors');
    prefix = require('gulp-autoprefixer');

module.exports = function () {
  return gulp.src('client/scss/*.scss')
    .pipe(sass({
      compass: true,
      bundleExec: true,
      sourcemapPath: '../sass'
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest('client/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(prefix())
    .pipe(minifycss())
    .pipe(gulp.dest('client/css'))
};
