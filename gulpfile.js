'use strict';

const gulp = require('gulp');
const less = require('gulp-less');

const SRC_DIR = 'src';

const LESSOPTIONS = {
  compress: false
};

gulp.task('less', () => {
  gulp.src(`./${SRC_DIR}/less/main.less`)
    .pipe(less(LESSOPTIONS))
    .pipe(gulp.dest(`./${SRC_DIR}/css`));
});

gulp.task('watch', ['less'], () => {
  gulp.watch(`./${SRC_DIR}/less/**/*.less`, () => {
    gulp.src(`./${SRC_DIR}/less/main.less`)
      .pipe(less(LESSOPTIONS))
      .pipe(gulp.dest(`./${SRC_DIR}/css`));
  });
});

gulp.task('run', ['watch'], () => {
  require('./server');
});
