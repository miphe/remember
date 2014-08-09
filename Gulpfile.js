var gulp = require('gulp')
	, nodemon = require('gulp-nodemon')
	, jshint = require('gulp-jshint')
	, sass = require('gulp-sass')
	, coffee = require('gulp-coffee')
	, addSrc = require('gulp-add-src')
	, nodemonConfig = require('./nodemon.json')
	, paths = {
		styles: 'src/scss/*.scss',
		scripts: ['src/js/*.coffee', 'src/js/*.js']
	}

gulp.task('scripts', function() {
	return gulp.src(paths.scripts[0])
				.pipe(coffee({bare: true}))
					.on('error', function(err){
						console.warn(err.message)
					})
			.pipe(addSrc(paths.scripts[1]))
			.pipe(jshint())
			.pipe(gulp.dest('public/js'));
});

gulp.task('styles', function() {
	return gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/css'));
});

gulp.task('compile', ['styles', 'scripts']);

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('nodemon', function () {
	nodemon(nodemonConfig);
});

gulp.task('default', ['compile', 'watch', 'nodemon']);
