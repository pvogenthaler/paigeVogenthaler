var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('../src/style/BlogArticle.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../public/blog/assets/css'));
});

gulp.task('watch', function () {
  gulp.watch('../src/style/BlogArticle.scss', ['sass']);
});
