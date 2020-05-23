(() => {
  const gulp = require('gulp');
  const sass = require('gulp-sass');
  const rename = require('gulp-rename');
  const sourcemaps = require('gulp-sourcemaps');
  const path = require('path');

  gulp.task('sass', () => {
    return gulp
      .src('./**/scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: 'uncompressed'
      }).on('error', sass.logError))
      .pipe(sourcemaps.write('./'))
      .pipe(rename(file => {
        const parentFolder = path.dirname(file.dirname);

        file.dirname = path.join(parentFolder, 'css');
      }))
      .pipe(gulp.dest('.'));
  });

  gulp.task('watch', gulp.series('sass', () => {
    gulp.watch('./**/scss/**/*.scss', gulp.series('sass'));
  }));
})();