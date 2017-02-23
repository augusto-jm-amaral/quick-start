module.exports = ( gulp, $, dest ) => {
   gulp.src(['_src/**/*.html'])
   	.pipe($.changed(dest, {extension: '.html'}))
   	.pipe($.filesize())
   	.pipe($.htmlmin({collapseWhitespace: true}))
   	.pipe(gulp.dest(dest));
}
