var gulp = require('gulp')
    , nodemon = require('gulp-nodemon')
    , sass = require('gulp-sass')
    , nodemonConfig = require('./nodemon.json')
    , paths = {
        styles: 'client/scss/**/*.scss'
    }

gulp.task('styles', function() {
    return gulp.src(paths.styles)
        .pipe(sass())
        .pipe(gulp.dest('client/css'));
});

gulp.task('compile', ['styles']);

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.styles, ['styles']);
});

gulp.task('nodemon', function () {
    nodemon(nodemonConfig);
});

gulp.task('default', ['compile', 'watch', 'nodemon']);
