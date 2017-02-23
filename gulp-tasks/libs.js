module.exports = ( gulp, $, dest ) => {
   
   /*Libs CSS*/
   gulp.src([])
   .pipe($.cssnano())
   .pipe($.minifyCss())
   .pipe($.concat('libs.min.css'))
   .pipe($.filesize())
   .pipe(gulp.dest(dest + 'assets/css/'));

   /*Libs JS*/
   gulp.src([])
   .pipe($.uglify())
   .pipe($.concat('libs.min.js'))
   .pipe($.filesize())
   .pipe(gulp.dest(dest + 'assets/js/'));
}
