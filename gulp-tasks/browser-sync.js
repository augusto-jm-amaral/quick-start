module.exports = ( gulp, $, dest ) => {

  $.browserSync.init([dest], {
    proxy: 'http://localhost:3000',
    browser: 'google-chrome',
    port: 3001,
    notify: false
  });

}
