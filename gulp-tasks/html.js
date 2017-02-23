module.exports = ( gulp, $, dest ) => {
   gulp.src(['_src/**/*.html'])
   	.pipe($.changed(dest, {extension: '.html'}))
   	.pipe($.filesize())
   	.pipe(gulp.dest(dest));
}
