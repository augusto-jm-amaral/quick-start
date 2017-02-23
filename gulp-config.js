var plugins = require('gulp-load-plugins');

module.exports = {
  dest: './public/',
  plugins: plugins({
    pattern: '*'
  })
};
