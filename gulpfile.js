var gulp = require('gulp');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

/**
 * Uglify the library
 */

gulp.task('uglify', function() {
    return gulp.src('./dist/assignment.js')
        .pipe(rename(function(path) {
            path.basename += ".min";
        }))
        .pipe(uglify({
            mangle: true,
            compress: true
        }))
        .pipe(gulp.dest("./dist/"));
});

/**
 * Entry point
 */

gulp.task('default', ['uglify']);
