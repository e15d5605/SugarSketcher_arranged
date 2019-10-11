var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('webpack', function() {
    return gulp.src('src/index.js')
        .pipe(webpack(require('./webpack.config.js') ))
        .pipe(gulp.dest('dest'));
//        .pipe(gulp.dest('src/js'));
});

gulp.task('webpack-prod', function() {
    return gulp.src('src/index.js')
        .pipe(webpack(require('./webpack-prod.config.js') ))
        .pipe(gulp.dest('dest'));
});

gulp.task('webpack-api', function() {
   return gulp.src('src/js/api/main.js')
       .pipe(webpack(require('./webpack-api.config')))
       .pipe(gulp.dest('dist'));
});