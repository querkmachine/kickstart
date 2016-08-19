'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['watch']);
gulp.task('lint', ['sass:lint', 'js:lint'])
gulp.task('production', ['sass', 'js', 'images', 'fonts']);
gulp.task('force', ['production']);

gulp.task('watch', () => {
	gulp.watch('./src/scss/{,*/}*.scss', ['sass']);
	gulp.watch('./src/js/scripts/{,*/}*.js', ['js']);
	gulp.watch('./src/js/+(preload|vendor)/{,*/}*.js', ['js:vendor']);
	gulp.watch('./src/images/{,*/}*', ['images']);
	gulp.watch('./src/type/{,*/}*', ['fonts']);
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
	// The sass-lint npm module is broken at the moment, so keeping this disabled.
	// https://github.com/sasstools/sass-lint/issues/389
	// return gulp.src('./src/scss/{,*/}*.scss')
	// .pipe(plumber())
	// .pipe(sassLint({
	// 	'config': '.sass-lint.yml'
	// }))
	// .pipe(sassLint.format())
	// .pipe(sassLint.failOnError());
});

/**
 * JavaScript compilation
 */

gulp.task('js', () => {
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
		.pipe(babel(
			{
				presets: ['es2015']
			}
		))
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
	return gulp.src(['./src/js/{,*/}*.js', '!./src/js/vendor/{,*/}*.js'])
	.pipe(jshint())
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
	.pipe(imagemin(
		{
			optimizationLevel: 5, // png
			progressive: true, // jpg
			interlaced: true, // gif 
			multipass: true // svg
		}
	))
	.pipe(gulp.dest('./dst/images'));
});

/**
 * Typography teleportation
 */

gulp.task('fonts', () => {
	gulp.src('./src/type/{,*/}*')
	.pipe(gulp.dest('./dst/type'));
});