const gulp = require('gulp');
const { src, series, parallel, dest, watch} = require('gulp');

const cssPath = 'assets/css/**/*.css';


function copyHtml() {
  return src('src/*.html').pipe(gulp.dest('dist'));
}

function imgTask() {
  return src('assets/images/*').pipe(gulp.dest('dist/csr-assets/images'));
}

function cssTask() {
  return src(cssPath)
    .pipe(dest('dist/csr-assets/css'));
}



exports.cssTask = cssTask;
exports.imgTask = imgTask;
exports.copyHtml = copyHtml;
exports.vangelas = series(
  parallel(copyHtml, imgTask, cssTask)
);
