const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const merge = require('merge-stream');
const concat = require('gulp-concat');
const config = require('./package.json');

/**
 * Delete things
 */

gulp.task('clean', () => {
	'use strict';
	const del = require('del');
	return del(['dst', 'components']).then((paths) => {
		console.log('Deleted files and folders:\n', paths.join('\n'));
	});
});

/**
 * Sass
 */

gulp.task('sass', () => {
	'use strict';
	const sass = require('gulp-sass');
	const autoprefixer = require('gulp-autoprefixer');
	return gulp.src('./src/scss/*.scss')
	.pipe(sass({
		outputStyle: 'compressed'
	}))
	.pipe(autoprefixer({
		browsers: config.browsers
	}))
	.pipe(gulp.dest('./dst/css'));
});

gulp.task('sass:lint', () => {
	'use strict';
	const sassLint = require('gulp-sass-lint');
	return gulp.src('./src/scss/{,*/}*.scss')
	.pipe(plumber())
	.pipe(sassLint())
	.pipe(sassLint.format())
	.pipe(sassLint.failOnError());
});

/**
 * JavaScript
 */

gulp.task('js:vendor', () => {
	'use strict';
	const folders = ['preload', 'vendor'];
	const tasks = folders.map((folder) => {
		return gulp.src(`./src/js/${folder}/**/*.js`, {
			base: `./src/js/${folder}`
		})
		.pipe(concat(`${folder}.js`))
		.pipe(gulp.dest('./dst/js'));
	});
	return merge(tasks);
});

gulp.task('js', gulp.parallel('js:vendor', () => {
	'use strict';
	const babel = require('gulp-babel');
	const folders = ['scripts'];
	const tasks = folders.map((folder) => {
		return gulp.src([`./src/js/${folder}/Helper.js`, `./src/js/${folder}/**/*.js`], {
			base: `./src/js/${folder}`
		})
		.pipe(sourcemaps.init())
		.pipe(concat(`${folder}.js`))
		.pipe(babel({
			presets: [
				['env', {
					'targets': {
						'browsers': config.browsers
					}
				}]
			]
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dst/js'));
	});
	return merge(tasks);
}));

gulp.task('js:lint', () => {
	'use strict';
	const jshint = require('gulp-jshint');
	return gulp.src(['./src/js/**/*.js', '!./src/js/+(preload|vendor)/**/*.js'])
	.pipe(jshint({
		esversion: 6
	}))
	.pipe(jshint.reporter('default'));
});

/**
 * Images
 */

gulp.task('images', () => {
	'use strict';
	const newer = require('gulp-newer');
	const imagemin = require('gulp-imagemin');
	return gulp.src('./src/images/**/*')
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
			plugins: [{
				cleanupIDs: false
			}]
		})
	]))
	.pipe(gulp.dest('./dst/images'));
});

gulp.task('favicon', (cb) => {
	'use strict';
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
					name: config.formattedName,
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
		cb();
	});
});

/**
 * Typography
 */

gulp.task('fonts', () => {
	'use strict';
	return gulp.src('./src/type/**/*')
	.pipe(gulp.dest('./dst/type'));
});

/**
 * Fractal
 */

const path = require('path');
const fractal = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');
const nunjucksDate = require('nunjucks-date');
const nunjucks = require('@frctl/nunjucks')({
	filters: {
		date: nunjucksDate,
		currency: function(input, sign) {
			'use strict';
			const digitsRegex= /(\d{3})(?=\d)/g;
			if(input == null || !isFinite(input)) {
				throw new Error('input needs to be a number');
			}
			sign = sign || '£';
			input = parseFloat(input);
			const strVal = Math.floor(Math.abs(input)).toString();
			const mod = strVal.length % 3;
			const h = mod > 0 ? (strVal.slice(0, mod) + (strVal.length > 3 ? ',' : '')) : '';
			const v = Math.abs(parseInt((input * 100) % 100, 10));
			const float = '.' + (v < 10 ? ('0' + v) : v);
			return (input < 0 ? '-' : '') + sign + h + strVal.slice(mod).replace(digitsRegex, '$1,') + float;
		},
		random: function(min, max) {
			'use strict';
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},
		slugify: function(string) {
			'use strict';
			return string.toLowerCase().replace(/\W/g, '-');
		}
	}
});

fractal.set('project.title', `${config.formattedName} component library`);
fractal.components.engine(nunjucks);
fractal.components.set('ext', '.html');
fractal.components.set('path', path.join(__dirname, 'fractal/components'));
fractal.components.set('default.preview', '@preview');
fractal.components.set('default.status', 'prototype');
fractal.components.set('statuses', {
	design: {
		label: "In design",
		description: "Still in design phase. Do not implement.",
		color: "#000000"
	},
	prototype: {
		label: "Prototype",
		description: "Prototype code. Do not implement.",
		color: "#FF3333"
	},
	wip: {
		label: "WIP",
		description: "Work in progress. Implement with caution.",
		color: "#FF9233"
	},
	readme: {
		label: "Needs documentation",
		description: "Missing documentation. Implement with caution.",
		color: "#176BC1"
	},
	ready: {
		label: "Ready",
		description: "Code and documentation complete. Ready to implement.",
		color: "#29CC29"
	}
});
fractal.docs.engine(nunjucks);
fractal.docs.set('path', path.join(__dirname, 'fractal/docs'));
fractal.docs.set('default.status', 'draft');
fractal.web.set('static.path', 'dst');
fractal.web.set('builder.dest', 'components');
fractal.web.theme(mandelbrot({
	'skin': 'black',
	'nav': ['docs', 'components'],
	'styles': ['default', '/css/styleguide.css'],
	'format': 'yaml'
}));

gulp.task('fractal:watch', () => {
	'use strict';
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
	'use strict';
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

/**
 * Multi-purpose task definitions
 */

gulp.task('watch', (cb) => {
	'use strict';
	gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass'));
	gulp.watch('./src/js/**/*.js', gulp.parallel('js'));
	gulp.watch('./src/images/**/*', gulp.parallel('images'));
	gulp.watch('./src/type/**/*', gulp.parallel('fonts'));
	cb();
});

gulp.task('default', gulp.parallel('fractal:watch', 'watch', (cb) => { 'use strict'; cb(); }));
gulp.task('lint', gulp.parallel('sass:lint', 'js:lint', (cb) => { 'use strict'; cb(); }));
gulp.task('production', gulp.parallel('sass', 'js', 'images', 'fonts', (cb) => { 'use strict'; cb(); }));
gulp.task('force', gulp.series('clean', 'production', 'favicon', 'fractal:build', (cb) => { 'use strict'; cb(); }));