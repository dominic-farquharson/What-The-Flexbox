// importing gulp
const gulp = require('gulp');
// including plugins
const autoprefixer = require('gulp-autoprefixer');

// two args: name, function to execute
gulp.task('styles', function() {
    gulp.src('css/styles.css')
        // sending contents to autoprefixer
        .pipe(autoprefixer())
       // sending output, writing files
        .pipe(gulp.dest('build'))
});

// creating a task called default
gulp.task('watch', function() {
    // handling changes to styles - takes an array as 2nd arg
    // when files change, styles task is executed
    gulp.watch('css/styles.css', ['styles']);
})