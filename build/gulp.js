var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('../src/style/Blog.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../public/blog/assets'));
});

gulp.task('watch', function () {
  gulp.watch('../src/style/Blog.scss', ['sass']);
});
