var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');


gulp.task('default', ['css']);

gulp.task('css', function() {
    gulp.src('css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    gulp.watch('./css/*.css', ['css']);
});
