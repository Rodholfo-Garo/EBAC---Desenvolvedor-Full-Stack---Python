const gulp = require('gulp');
const sass=require('gulp-sass')(require('sass'));
const sourcemaps=require('gulp-sourcemaps');
const uglify=require('gulp-uglify');
const obfuscate =require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');


function comprimirImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function comprimiJava(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}


exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial:false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial:false}, gulp.series(comprimiJava));
    gulp.watch('./source/images/*', {ignoreInitial:false}, gulp.series(comprimirImagens));
}

// exports.sass=compilaSass;
// exports.javascript = comprimiJava;
// exports.images = comprimirImagens;