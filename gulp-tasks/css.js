module.exports = (gulp, $, dest) => {
  gulp.src(['./_src/_assets/sass/base.scss'])
  	.pipe($.changed(dest + 'assets/css', {extension: '.css'}))
		.pipe($.sass())
    .on('error', swallowError)
		.pipe($.cssnano())
		.pipe($.minifyCss())
		.pipe($.concat('styles.min.css'))
		.pipe($.filesize())
		.pipe(gulp.dest(dest + 'assets/css/'));

  function swallowError (error) {
    console.log(error.toString());
    this.emit('end');
  }
}
