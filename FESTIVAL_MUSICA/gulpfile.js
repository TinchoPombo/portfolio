const { src, dest, watch, parallel } = require('gulp')

//CSS
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer')
const postcss = require('gulp-postcss')
const plumber = require('gulp-plumber')
const cssnano = require('cssnano')
const sourcemaps = require('gulp-sourcemaps')
//IMG
const webp = require('gulp-webp')
const avif = require('gulp-avif')
//JAVASCRIPT
const terser = require('gulp-terser-js')

function css ( callback ) {
    src('src/scss/**/*.scss') // Identificar el archivo de SASS
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe( sass() ) //Compilarlo
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/css')) // Almacenarlo en el disco duro

    callback(); // Callback que avisa a gulp cuando llegamos al final
}

function dev ( done ) {
    watch('src/scss/**/*.scss', css); //  PARA CUALQUIER CARPETA SE USA ** Y PARA CUALQUIER ARCHIVO *
    watch('src/js/**/*.js', javascript)

    done();
}

function versionWebp ( done ) {
    const options = { quality: 50 }
    src('src/img/**/*.{png,jpg}')
        .pipe(webp(options))
        .pipe(dest('build/img'))

    done();
}

function versionAvif ( done ) {
    const options = { quality: 50 }
    src('src/img/**/*.{png,jpg}')
        .pipe(avif(options))
        .pipe(dest('build/img'))

    done();
}

function javascript( done ) {
    src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/js'))

    done()
}

exports.css = css;
exports.js = javascript;
exports.conversionImagenes = parallel(versionAvif, versionWebp);
exports.dev = parallel( versionWebp, versionAvif, javascript, dev ); // De esta manera se pueden ejecutar mas de una funcion en forma paralela
// exports.dev = series( versionWebp, versionAvif, javascript, dev ); De esta manera se pueden ejecutar mas de una funcion una despues de la otra