var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('copy', ['copy:html']);

gulp.task('copy:html', function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('public/'));
});

gulp.task('browserify', function() {
  return browserify('src/js/index.js')
    .transform('babelify', { presets: ['es2015', 'react'] })
    .bundle()
    .on('error', function (err) {
      console.error(err);
      this.emit('end');
    })
    .pipe(source('main.js'))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('watch', function () {
  gulp.watch('src/index.html', ['copy:html']);
  gulp.watch('src/js/**/*.js', ['browserify']);
});

gulp.task('default', ['copy', 'browserify', 'watch']);
