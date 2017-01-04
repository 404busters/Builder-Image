//@flow
'use strict';

const gulp = require('gulp-help')(require('gulp'));
const util = require('gulp-util');
const imagemin = require('gulp-imagemin');

gulp.task('image', 'Build imagemin version of ./assets/images/**/* into ./public/images', () => {
  return gulp.src('./assets/images/**/*.*')
    .on('error', util.log)
    .pipe(imagemin())
    .pipe(gulp.dest('public/images'));
});
