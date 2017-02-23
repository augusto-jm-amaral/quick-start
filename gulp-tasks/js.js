module.exports = ( gulp, $, dest ) => {
  gulp.src([
    './_src/_assets/js/*.js'
  ])
  .pipe($.uglify())
  .pipe($.concat('scripts.min.js'))
  .pipe($.filesize())
  .pipe(gulp.dest(dest + '/assets/js'));

}
