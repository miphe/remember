var gulp = require('gulp'),
    mainBowerFiles = require('main-bower-files');

module.exports = function(){
    return gulp.src(mainBowerFiles(), { base: 'bower_components' })
        .pipe(gulp.dest('client/vendors'));
};
