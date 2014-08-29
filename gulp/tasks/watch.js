var gulp = require('gulp');

module.exports = function() {
    global.isWatching = true;
    gulp.watch('client/bootstrap/assets/stylesheets/**', ['sass']);
    gulp.watch([
      'client/js/**/*.js', 
      '!client/js/app.bundle.js',
      'client/bootstrap/assets/stylesheets/*.js'
      ], 
      ['lint', 'browserify']);
};
