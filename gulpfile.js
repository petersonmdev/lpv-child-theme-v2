
const gulp = require('gulp');

/* IMG Requires */
const imagemin = require('gulp-imagemin');

/* CSS Requires */
var cssmin = require('gulp-cssmin');

/* JS Requires */
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;

/* Global Requires */
var rename = require('gulp-rename');
var concat = require('gulp-concat');


gulp.task('image-clean', () =>
    gulp.src('./assets/images/**/*')
        .pipe(imagemin())
        //.pipe(gulp.dest('../images'))
);

gulp.task('css-min', function () {
    gulp.src([
        './assets/css/main.css',
        './assets/fonts/roboto-slab.css',
        './assets/css/flaticon.css',
        './assets/css/animate.css',        
      ])
      .pipe(cssmin())
      .pipe(concat('__all_styles_production.min.css'))
      .pipe(gulp.dest('./assets/css'));
});

gulp.task('js-min', function () {
    gulp.src([
        './js/jquery-3.3.1.min.js',
      ])
      .pipe(uglify())
      .pipe(concat('__all-scripts.min.js'))
      .pipe(gulp.dest('./js'))
});

function defaultTask(cb) {
  // place code for your default task here
  cb( 'css-min', 'js-min' );
}

exports.default = defaultTask