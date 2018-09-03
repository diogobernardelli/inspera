var gulp = require('gulp'),
    react = require('gulp-react'),
    runSequence = require('run-sequence'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    mocha = require('gulp-mocha');

var compileSass = (src, dest) =>
    gulp.src(src)
        .pipe(sass({errLogToConsole: false,onError: function(err) {return notify().write(err);}}))
        .pipe(gulp.dest(dest));

var compileJsx = (src, dest) =>
    gulp.src(src)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error %>")
        }))
        .pipe(react())
        .pipe(gulp.dest(dest));

gulp.task('sass', () => 
    compileSass('css/base.scss', 'css')
)


gulp.task('jsx', () => 
    compileJsx('js/views/**/*.jsx', 'js/_jsx/views')
)

gulp.task('test', () =>
	gulp.src(['test/**/*.js'], {read: false})
		.pipe(mocha({reporter: 'list', exit: true}))
		.on('error', console.error)
);

gulp.task('runServer', () =>
    nodemon({
        script: 'server.js',
        ext: 'scss jsx js',
        ignore: ['js/_jsx/**/*.js'],
        tasks: ['sass', 'jsx', 'test'] })
    .on('restart', function () {
      console.log('restarted!');
    })
)

gulp.task('default', (callback) => 
    runSequence(['jsx', 'sass', 'test'], 'runServer', callback)
)