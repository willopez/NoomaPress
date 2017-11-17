const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

gulp.task('css', () =>
  gulp
    .src('./src/static/styles/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/css'))
);

gulp.task('images', () =>
  gulp.src('./src/static/images/**/*').pipe(gulp.dest('./build/images'))
);

gulp.task('gutenberg_styles', () =>
  gulp.src('./src/static/styles/gutenberg.css').pipe(gulp.dest('./build/css'))
);

gulp.task('default', ['css', 'images', 'gutenberg_styles']);
