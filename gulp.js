var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('reload', function () {
  gulp.src('./app/**/*.*')
      .pipe(connect.reload());
});

/*
 Смотреть изменения в файлах по пути ./app/*
 если произошли изменения, то запустить таск reload
*/
gulp.task('watch', function () {
  gulp.watch(['./app/**/*.*'], ['reload']);
});

gulp.task('default', ['connect', 'watch']);