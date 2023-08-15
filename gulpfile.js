const { series, parallel, src, dest, watch } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const del = require('delete');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const angularTemplates = require('gulp-angular-templates-lite');
const browserSync = require("browser-sync").create();

function clean(cb) {
    del(['dist/**'], cb);
}

function styles(cb) {
    return src('./src/styles/styles.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest('./dist'));
}

function scripts() {
    return src([
        './src/init.js',
        './src/**/init.js',
        './src/**/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest('./dist/'));
}

function assets() {
    return src([
        'node_modules/angular/angular.min.js'
    ])
        .pipe(concat('assets.js'))
        .pipe(dest('./dist/'));
}

function public() {
    return src([
        './public/**'
    ])
        .pipe(dest('./dist/'));
}

function html() {
    return src([
        './src/index.html'
    ])
        .pipe(htmlmin({}))
        .pipe(dest('./dist/'));
}

function templates() {
    return src('./src/**/*.ng.html')
        .pipe(htmlmin({}))
        .pipe(angularTemplates())
        .pipe(concat('templates.js'))
        .pipe(uglify())
        .pipe(angularTemplates.wrap('app.templates'))
        .pipe(dest('./dist/'));
}

exports.default = series(
    clean,
    parallel(
        scripts,
        styles,
        assets,
        public,
        html,
        templates,
    ),
);
exports.dev = function() {
    watch('./src/styles/**/*.scss', styles);
    watch('./src/**/*.ng.html', templates);
    watch('./src/index.html', html);
    watch('./src/**/*.js', scripts);
    browserSync.init({
        watch: true,
        server: "./dist"
    });
};
