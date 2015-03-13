/*
	Gulp is a system that automates various tasks, such as linting, 
	compiling and minifying files, and obfuscating javascript.

	DEPENDENCIES (you'll need these, preferably the latest versions of each):
	Ruby for Windows — if you're on Windows (http://rubyinstaller.org/)
	Node.js (http://nodejs.org/)
	Sass (http://sass-lang.com/) 

	Install Gulp globally:
	  $ [sudo] npm install gulp --global 

	Install/update project dependencies:
	  $ npm install

	Run Gulp
	  $ gulp
*/

var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var imagemin = require("gulp-imagemin");

gulp.task("default", function() {
	gulp.watch("./assets/scss/{,*/}*.scss", ["stylesheets"]);
	gulp.watch("./assets/js/scripts/{,*/}*.js", ["scripts"]);
	gulp.watch("./assets/js/vendor/{,*/}*.js", ["scripts-vendor"]);
	gulp.watch("./assets/js/preload/{,*/}*.js", ["scripts-preload"]);
});

gulp.task("stylesheets", function() {
	gulp.src("./assets/scss/stylesheet.scss")
	.pipe(sass(
		{
			errLogToConsole: true,
			outputStyle: "nested"
		}
	))
	.pipe(autoprefixer(
		{
			browsers: ['last 2 version', 'ie 8', 'ie 9', 'ie 10'],
			cascade: true
		}
	))
	.pipe(gulp.dest("./assets/css"))
});

gulp.task("scripts-preload", function() {
	gulp.src(
		[
			"./assets/js/preload/*.js"
		]
	)
	.pipe(uglify())
	.pipe(concat("preload.js"))
	.pipe(gulp.dest("./assets/js"))
});

gulp.task("scripts-vendor", function() {
	gulp.src(
		[
			"./assets/js/vendor/jquery-1.11.2.min.js",
			"./assets/js/vendor/*.js"
		]
	)
	.pipe(uglify())
	.pipe(concat("vendor.js"))
	.pipe(gulp.dest("./assets/js"))
});

gulp.task("scripts", function() {
	gulp.src(
		[
			"./assets/js/scripts/app.js",
			"./assets/js/scripts/*.js"
		]
	)
	.pipe(uglify())
	.pipe(concat("scripts.js"))
	.pipe(gulp.dest("./assets/js"))
});

gulp.task("images", function() {
	gulp.src(["./assets/images/*", "!./assets/images/*.svg"])
	.pipe(imagemin(
		{
			optimizationLevel: 5,
			progressive: true, // jpg
			interlaced: true, // gif 
			multipass: true // svg
		}
	))
	.pipe(gulp.dest("./assets/images"))
});