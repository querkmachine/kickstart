'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['watch']);
gulp.task('lint', ['sass:lint', 'js:lint'])
gulp.task('production', ['sass', 'js', 'js:vendor', 'images', 'fonts']);
gulp.task('force', ['production']);

gulp.task('watch', () => {
	const watch = require('gulp-watch');
	const batch = require('gulp-batch');
	watch('./src/scss/**/*.scss', batch((events, done) => { gulp.start('sass', done); }));
	watch('./src/js/**/*.js', batch((events, done) => { gulp.start('js', done); }));
	watch('./src/images/**/*', batch((events, done) => { gulp.start('images', done); }));
	watch('./src/type/**/*', batch((events, done) => { gulp.start('fonts', done); }));
});

/*
 * Sass compilation
 */

gulp.task('sass', () => {
	const sass = require('gulp-sass');
	const autoprefixer = require('gulp-autoprefixer');
	gulp.src('./src/scss/*.scss')
	.pipe(plumber())
	.pipe(sass({
		outputStyle: 'compressed'
	}))
	.pipe(autoprefixer({
		browsers: ['last 2 version', 'ie 9', 'ie 10'],
		cascade: true
	}))
	.pipe(gulp.dest('./dst/css'));
});

gulp.task('sass:lint', () => {
	const sassLint = require('gulp-sass-lint');
	return gulp.src('./src/scss/{,*/}*.s+(a|c)ss')
	.pipe(plumber())
	.pipe(sassLint())
	.pipe(sassLint.format())
	.pipe(sassLint.failOnError());
});

/**
 * JavaScript compilation
 */

gulp.task('js', ['js:vendor'], () => {
	const babel = require('gulp-babel');
	const concat = require('gulp-concat');
	const merge = require('merge-stream');
	var folders = ['scripts'];
	var tasks = folders.map((folder) => {
		return gulp.src(`./src/js/${folder}/{,*/}*.js`, {
			base: `./src/js/${folder}`
		})
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat(`${folder}.js`))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dst/js'))
	});
	merge(tasks);
});

gulp.task('js:vendor', () => {
	const concat = require('gulp-concat');
	const merge = require('merge-stream');
	const folders = ['preload', 'vendor'];
	const tasks = folders.map((folder) => {
		return gulp.src(`./src/js/${folder}/{,*/}*.js`, {
			base: `./src/js/${folder}`
		})
		.pipe(plumber())
		.pipe(concat(`${folder}.js`))
		.pipe(gulp.dest('./dst/js'))
	});
	merge(tasks);
});

gulp.task('js:lint', () => {
	const jshint = require('gulp-jshint');
	return gulp.src(['./src/js/{,*/}*.js', '!./src/js/+(preload|vendor)/{,*/}*.js'])
	.pipe(jshint({
		esversion: 6
	}))
	.pipe(jshint.reporter('default'));
});

/**
 * Image optimisation
 */

gulp.task('images', () => {
	const newer = require('gulp-newer');
	const imagemin = require('gulp-imagemin');
	gulp.src('./src/images/{,*/}*')
	.pipe(plumber())
	.pipe(newer('./dst/images'))
	.pipe(imagemin({
		optimizationLevel: 5, // png
		progressive: true, // jpg
		interlaced: true, // gif 
		multipass: true // svg
	}))
	.pipe(gulp.dest('./dst/images'));
});

/**
 * Typography teleportation
 */

gulp.task('fonts', () => {
	gulp.src('./src/type/{,*/}*')
	.pipe(gulp.dest('./dst/type'));
});
