var gulp = require('gulp');
var cfg = require('./gulp-config.js');

console.log(cfg.plugins);

let get = task => require('./gulp-tasks/' + task)(gulp, cfg.plugins, cfg.dest);

gulp.task('nodemon', () => get('nodemon'));
gulp.task('html', () => get('html'));
gulp.task('css', () => get('css'));
gulp.task('js', () => get('js'));
gulp.task('libs', () => get('libs'));
gulp.task('media', () => get('media'));
gulp.task('fonts', () => get('fonts'));

gulp.task('watch', () => get('watch'));
gulp.task('browser-sync', () => get('browser-sync'));

gulp.task('default', ['nodemon','html','css','js','media','fonts','watch','browser-sync']);
