var gulp = require('gulp'),
	prefix = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect');

//server connect
gulp.task('connect', function() {
	connect.server({
		root: 'app',
		livereload: true
	});
});

//css
gulp.task('css', function() {
  gulp.src('app/*.css')
  	.pipe(concatCSS('bundle.css'))
  	.pipe(pulp.dest('app/'))
  	.pipe(prefix('last 2 versions','> 1%', 'ie 9'))
  	.pipe(connect.reload());
});

//html
gulp.task('html', function() {
	gulp.src('app/index.html')
	.pipe(connect.reload());
})

//watch
gulp.task('watch', function() {
	gulp.watch('app/*.css', ['css'])
	gulp.watch('app/*index.html', ['html'])
})

//default
gulp.task('default', ['connect', 'html', 'css', 'watch']);