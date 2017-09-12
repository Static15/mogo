var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');



gulp.task('default', () =>
    gulp.src('src/style/*.css')
        .pipe(autoprefixer({
            browsers: ['last 4 versions']
        }))
        .pipe(gulp.dest('out'))
);