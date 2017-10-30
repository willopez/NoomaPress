const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

gulp.task('app', () =>
  gulp
    .src('./src/style/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/client/css'))
);

gulp.task('gutenberg', () =>
  gulp.src('./src/style/gutenberg.css').pipe(gulp.dest('./build/client/css'))
);

gulp.task('default', ['app', 'gutenberg']);
