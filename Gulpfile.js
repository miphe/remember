var gulp = require('gulp'),
    tasks = [
        'browserify',
        'sass',
        'bower',
        'watch',
        'lint',
        'nodemon'
    ];

// Dynamically load defined tasks from their respective files
tasks.forEach(function(name) {
    gulp.task(name, require('./gulp/tasks/' + name));
});

gulp.task('build', ['browserify', 'sass', 'lint'/*, 'bower'*/]);
gulp.task('default', ['build', 'watch', 'nodemon']);
