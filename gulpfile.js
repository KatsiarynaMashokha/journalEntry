var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
// var concat = require('gulp-concat');

gulp.task('myTask', function(){
  console.log('hello gulp');
});
gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/journal-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
// gulp.task('concatInterface', function() {
//   return gulp.src(['./js/journal-interface.js','./js/entryMethods-interface.js'])
//     .pipe(concat('allConcat.js'))
//     .pipe(gulp.dest('./tmp'));
// });
// gulp.task('jsBrowserify', ['concatInterface'], function() {
//   return browserify({ entries: ['./tmp/allConcat.js'] })
//     .bundle()
//     .pipe(source('app.js'))
//     .pipe(gulp.dest('./build/js'));
// });
