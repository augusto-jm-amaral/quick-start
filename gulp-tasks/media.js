module.exports = ( gulp, $, dest ) => {
   gulp.src('./_src/_assets/img/*.*')
      .pipe($.changed(dest + 'assets/img'))
      .pipe($.imagemin())
      .pipe($.filesize())
      .pipe(gulp.dest(dest+'assets/img'));

   gulp.src('./_src/assets/svg/*.svg')
      .pipe($.svgmin({
         plugins: [{
            removeDoctype: true,
            removeComments: true,
            cleanupIDs: {
               minify: true
            },
            cleanupNumericValues: {
               floatPrecision: 2
            },
            convertColors: {
               names2hex: true
            }
         }]
      }))
      .pipe($.filesize())
      .pipe(gulp.dest(dest+'/assets/svg'));
}
