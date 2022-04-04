const { series, src, dest, watch, parallel } = require('gulp');
const imagemin  = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));;
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

// Functions for SASS compilation

const paths = {
    img: './src/img/**/*',
    scss: './src/scss/**/*.scss',
    buildImg: './build/img',
    js: 'src/js/**/*.js',
}

function css() {
    return src(paths.scss)
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))
}


function compressCss() {
    return src(paths.scss)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'))
}

function images () {
    return src(paths.img)
        .pipe( imagemin())
        .pipe( dest( paths.buildImg ))
        .pipe(notify({message: 'Minified image'}))
    }
function imageWebp () {
    return src(paths.img)
        .pipe( webp() )
        .pipe( dest( paths.buildImg))
        .pipe(notify({message: 'Webp version'}))
    }
    
function watchFiles () {
    watch(paths.scss, css); // * = actual folder - ** = All files with that extension
    watch(paths.js, javascript);
}

function javascript () {
    return src(paths.js)
        .pipe( concat('bundle.js'))
        .pipe( dest('./build/js'))
}

exports.css = css;
exports.compressCss = compressCss;
exports.images = images;
exports.watchFiles = watchFiles;

exports.default = series( css, javascript,images, imageWebp, watchFiles);