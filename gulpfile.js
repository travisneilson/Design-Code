var gulp        = require('gulp'),
    bs          = require('browser-sync').create(),
    sass        = require('gulp-sass'),
    prefix      = require('gulp-autoprefixer'),
    cp          = require('child_process'),
    plumber     = require('gulp-plumber'),
    notify      = require('gulp-notify'),
    gutil       = require('gulp-util'),
    beep        = require('beepbeep'),
    sequence    = require('run-sequence'),
    jade        = require('gulp-jade');


// Error handler
var onError = function (err) {
    var errorLine   = (err.line) ? 'Line ' + err.line : '',
        errorTitle  = (err.plugin) ? 'Error: [ ' + err.plugin + ' ]' : 'Error';

    notify.logLevel(0);
    notify({
            title: errorTitle,
            message: errorLine
    }).write(err);
    beep();
    gutil.log(gutil.colors.red('\n'+errorTitle+'\n\n', err.message));
    this.emit('end');
};


// Jekyll build
gulp.task('jekyll-build', function (done) {
    bs.notify('Running jekyll-build');
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});


// Run jekyll build and reload browser
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    bs.reload();
});


// Compile sass and autoprefix css
// Compile to '_site' and 'css' to allow css injecting
gulp.task('sass', function () {
    return gulp.src('assets/css/main.scss')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass())
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(gulp.dest('assets/css'))
        .pipe(bs.stream());
});


// Compile jade files
gulp.task('jade', function(){
    return gulp.src('_jadefiles/*.jade')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(jade())
        .pipe(gulp.dest('_includes'));
});


// Init browser-sync
gulp.task('browser-sync', function(done) {
    bs.init({
        server: '_site',
        notify: false
    });
    done();
});


// Wait for build and start watch
// Jade would trigger jekyll-rebuild otherwise
gulp.task('watch', ['build'], function () {
    gulp.watch(['assets/css/**/*', '!assets/css/main.css'], ['sass']);
    gulp.watch('_jadefiles/**/*.jade', ['jade']);
    gulp.watch('assets/js/**/*', ['jekyll-rebuild']);
    gulp.watch(['index.html', '_layouts/**/*.html', '_includes/**/*'], ['jekyll-rebuild']);
});


// Initial build sequence
// Jade & sass in parallel, then jekyll, then browser-sync
// Using run-sequence until gulp 4 gets released!
gulp.task('build', function(done) {
    sequence(['jade', 'sass'],
              'jekyll-build',
              'browser-sync',
              done);
});


// Default
gulp.task('default', ['watch']);
