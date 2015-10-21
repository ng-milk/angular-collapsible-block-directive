'use strict';

var del = require('del'),
    gulp = require('gulp'),
    gulpsync = require('gulp-sync')(gulp),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    eslint = require('gulp-eslint'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer');

var options = {
  src: 'src',
  dist: 'dist'
};

gulp.task('scripts', function () {
  return gulp.src([options.src + '/**/*.js'])
    .pipe(eslint())
    .pipe(uglify())
    .pipe(rename('ng-collapsible-block.js'))
    .pipe(gulp.dest(options.dist));
});

gulp.task('bundle_scripts', function() {
  return gulp.src([
    'node_modules/angular/angular.min.js',
    'node_modules/angular-animate/angular-animate.min.js'])
    .pipe(gulp.dest(options.dist));
});

gulp.task('bundle_styles', function() {
  return gulp.src([
    'node_modules/bootstrap-css-only/css/bootstrap.css',
    'node_modules/font-awesome/css/font-awesome.css'])
    .pipe(minifyCss({compatibility:'ie8'}))
    .pipe(gulp.dest(options.dist));
});

gulp.task('bundle_fonts', function() {
  return gulp.src([
    'node_modules/font-awesome/fonts/*'])
    .pipe(gulp.dest("fonts"));
});


gulp.task('styles', function(){
  return gulp.src([options.src + '/**/*.css'])
    .pipe(autoprefixer({
      browsers: ['last 3 versions']
    }))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename('ng-collapsible-block.css'))
    .pipe(gulp.dest(options.dist));
});

gulp.task('clean', function (cb){
  return del([options.dist], cb);
});

gulp.task('watch', function () {
  return gulp.watch([options.src + '/**/*'], ['build']);
});

gulp.task('default', gulpsync.sync([['build'], ['watch']]));
gulp.task('build', gulpsync.sync([['clean'], ['scripts', 'styles', 'bundle_scripts', 'bundle_styles', 'bundle_fonts']]));