var gulp = require('gulp');

module.exports = function() {
    global.isWatching = true;
    gulp.watch('client/scss/**', ['sass']);
    gulp.watch(['client/js/**/*.js', '!client/js/app.bundle.js'], ['lint', 'browserify']);
};
