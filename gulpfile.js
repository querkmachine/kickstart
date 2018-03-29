'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const config = require('./package.json');

gulp.task('default', ['fractal:watch', 'watch']);
gulp.task('lint', ['sass:lint', 'js:lint'])
gulp.task('patterns', ['fractal:build']);
gulp.task('production', ['sass', 'js', 'js:vendor', 'images', 'fonts']);
gulp.task('force', ['production', 'patterns']);

gulp.task('watch', () => {
	const watch = require('gulp-watch');
	const batch = require('gulp-batch');
	watch('./src/scss/**/*.scss', batch((events, done) => { gulp.start('sass', done); }));
	watch('./src/js/**/*.js', batch((events, done) => { gulp.start('js', done); }));
	watch('./src/images/**/*', batch((events, done) => { gulp.start('images', done); }));
	watch('./src/type/**/*', batch((events, done) => { gulp.start('fonts', done); }));
});

/*
 * Delete all the things
 */

gulp.task('clean', () => {
	const del = require('del');
	return del(['dst', 'components']).then((paths) => {
		console.log('Deleted files and folders:\n', paths.join('\n'));
	});
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
		browsers: config.browsers,
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
		return gulp.src([`./src/js/${folder}/App.js`, `./src/js/${folder}/**/*.js`], {
			base: `./src/js/${folder}`
		})
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: [
				['env', {
					'targets': {
						'browsers': config.browsers
					}
				}]
			]
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
		return gulp.src(`./src/js/${folder}/**/*.js`, {
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
	return gulp.src(['./src/js/**/*.js', '!./src/js/+(preload|vendor)/**/*.js'])
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
	gulp.src('./src/images/**/*')
	.pipe(plumber())
	.pipe(newer('./dst/images'))
	.pipe(imagemin([
		imagemin.jpegtran({
			progressive: true
		}),
		imagemin.optipng({
			optimizationLevel: 5
		}),
		imagemin.gifsicle({
			interlaced: true
		}),
		imagemin.svgo({
			multipass: true,
			plugins: [
				{ cleanupIDs: false }
			]
		})
	]))
	.pipe(gulp.dest('./dst/images'));
});

gulp.task('favicon', () => {
	const fs = require('fs');
	const faviconGenerator = require('gulp-real-favicon');
	const batchReplace = require('gulp-batch-replace');
	faviconGenerator.generateFavicon({
		masterPicture: './src/images/favicon.png',
		dest: './dst/images/favicon/',
		iconsPath: '/dst/images/favicon/',
		design: {
			ios: {
				pictureAspect: 'backgroundAndMargin',
				backgroundColor: config.color,
				margin: '14%',
				assets: {
					ios6AndPriorIcons: false,
					ios7AndLaterIcons: false,
					precomposedIcons: false,
					declareOnlyDefaultIcon: true
				}
			},
			desktopBrowser: {},
			windows: {
				pictureAspect: 'whiteSilhouette',
				backgroundColor: config.color,
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: false,
					windows10Ie11EdgeTiles: {
						small: false,
						medium: true,
						big: false,
						rectangle: false
					}
				}
			},
			androidChrome: {
				pictureAspect: 'shadow',
				themeColor: config.color,
				manifest: {
					name: config.name,
					display: 'standalone',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				},
				assets: {
					legacyIcon: false,
					lowResolutionIcons: false
				}
			},
			safariPinnedTab: {
				pictureAspect: 'blackAndWhite',
				threshold: 75,
				themeColor: config.color
			}
		},
		settings: {
			compression: 4,
			scalingAlgorithm: 'Lanczos',
			errorOnImageTooSmall: false
		},
		markupFile: 'faviconData.json'
	}, function() {
		gulp.src('./index.html')
		.pipe(batchReplace([
			[/<!-- inject:favicons -->[\S\s]*<!-- endinject -->/g, `<!-- inject:favicons -->${JSON.parse(fs.readFileSync('faviconData.json')).favicon.html_code}<!-- endinject -->`]
		]))
		.pipe(gulp.dest('.'));
	});
});

/**
 * Typography teleportation
 */

gulp.task('fonts', () => {
	gulp.src('./src/type/**/*')
	.pipe(gulp.dest('./dst/type'));
});

/**
 * Fractal 
 */

const path = require('path');
const fractal = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');
const nunjucks = require('@frctl/nunjucks')({
	filters: {
		random: function(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},
		slugify: function(string) {
			return string.toLowerCase().replace(/\W/g, '-');
		}
	}
});

// Fractal config
fractal.set('project.title', `${config.name} component library`);

// Components config
fractal.components.engine(nunjucks);
fractal.components.set('ext', '.html');
fractal.components.set('path', path.join(__dirname, 'fractal/components'));
fractal.components.set('default.preview', '@preview');
fractal.components.set('default.status', 'prototype');
fractal.components.set('default.display', {
	'min-width': '320px'
});

// Docs config
fractal.docs.engine(nunjucks);
fractal.docs.set('path', path.join(__dirname, 'fractal/docs'));
fractal.docs.set('default.status', 'draft');

// Build config
fractal.web.set('static.path', 'dst');
fractal.web.set('builder.dest', 'components');
fractal.web.theme(mandelbrot({
	'skin': 'purple',
	'nav': ['docs', 'components'],
	'styles': ['default'],
	'format': 'yaml'
}));

gulp.task('fractal:watch', () => {
	const logger = fractal.cli.console;
	const server = fractal.web.server({
		sync: true
	});
	server.on('error', (err) => {
	    logger.error(err.message);
	});
	return server.start().then(() => {
		logger.success(`Fractal server is now running at ${server.url}.`);
	});
});

gulp.task('fractal:build', () => {
    const logger = fractal.cli.console;
	const builder = fractal.web.builder();
	builder.on('progress', (completed, total) => {
	    logger.update(`Exported ${completed} of ${total} items.`, 'info');
	});
	builder.on('error', (err) => {
	    logger.error(err.message);
	});
	return builder.build().then(() => {
		logger.success('Fractal build completed.');
	});
});
