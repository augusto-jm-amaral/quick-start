
module.exports = ( gulp, $, dest ) => {

  $.nodemon({
    script: './index.js'
  , ext: 'js'
  });

};