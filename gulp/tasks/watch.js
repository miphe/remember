var gulp = require('gulp');

module.exports = function () {
    global.isWatching = true;
    gulp.watch('client/scss/**', ['sass']);
    gulp.watch(['client/js/**/*.js', '!client/js/app.bundle.js', 'client/test/**/*.js', '!client/test/app.bundle.test.js'], ['lint', 'browserify', 'browserify_tests']);
};
