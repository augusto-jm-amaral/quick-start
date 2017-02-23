module.exports = ( gulp, $, dest ) => {
  gulp.src([
    // 'node_modules/font-awesome/fonts/fontawesome-webfont.eot',
    // 'node_modules/font-awesome/fonts/fontawesome-webfont.svg',
    // 'node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
    // 'node_modules/font-awesome/fonts/fontawesome-webfont.woff',
    // 'node_modules/font-awesome/fonts/fontawesome-webfont.woff2',
    './_src/_assets/fonts/**/*.*'
  ])
  .pipe($.changed(dest + 'assets/fonts'))
  .pipe($.filesize())
  .pipe(gulp.dest(dest + 'assets/fonts/'));
}
