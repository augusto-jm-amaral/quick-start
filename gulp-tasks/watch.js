module.exports = ( gulp, $, dest ) => {

  let php = gulp.watch(['_src/**/*.html'], ['html']);
  let css = gulp.watch(['_src/_assets/sass/**/*.scss'], ['css']);
  let js = gulp.watch(['_src/_assets/js/*.js'], ['js']);

}
