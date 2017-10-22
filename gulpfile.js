var gulp = require('gulp');
var livingcss = require('gulp-livingcss');

gulp.task('default', function () {
  gulp.src('src/styles.css')
    .pipe(livingcss('dist', {template: 'template.hbs'}))
    .pipe(gulp.dest('dist'))
});
