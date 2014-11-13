var config = {
	public: '../'
};
config.vendor = config.public + 'js/vendor/';
config.js     = config.public + 'js/';

var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil  = require('gulp-util');

// Define paths
var paths = {
  scripts: [
  
  config.vendor + 'angular/angular.js',
  //config.vendor + 'angular-resource/angular-resource.js',
  //config.vendor + 'angular-ui-router/release/angular-ui-router.js',
  
  config.js + 'app/*.js', 
  config.js + 'app/**/*.js']
};

// Minify and concat js files
gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('build.min.js'))
    .pipe(gulp.dest(config.js));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['scripts']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'watch']);