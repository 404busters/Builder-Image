//@flow
'use strict';

const gulp = require('gulp-help')(require('gulp'));

gulp.task('dev:build', false, ['image', 'dev:html', 'dev:css']);
gulp.task('dev', 'Development mode. Starts',['dev:build', 'watch']);
gulp.task('build', 'Build the site.', ['image', 'build:css', 'build:html', 'build:js']);