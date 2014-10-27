var gulp = require('gulp');

module.exports = function () {
    global.isWatching = true;
    gulp.watch(['client/test/**/*.js', '!client/test/app.bundle.test.js'], ['lint', 'browserify_tests']);
};
