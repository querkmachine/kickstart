/*
	Gulp is a system that automates various tasks, such as linting, 
	compiling and minifying files, and obfuscating javascript.

	FIRST YOU'LL NEED THIS:
	Node.js (http://nodejs.org/)

	Navigate to the project dependency using the Node.js command prompt,
	then run this to install the project dependencies:
	  $ npm install

	If some src files already exist you'll want to compile them all:
	  $ gulp force

	And if you're making further changes run this to watch for changes
	and compile automatically:
	  $ gulp
	
	Sorted.
*/

var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var newer = require("gulp-newer");
var imagemin = require("gulp-imagemin");

gulp.task("default", function() {
	gulp.watch("./src/scss/{,*/}*.scss", ["stylesheets"]);
	gulp.watch("./src/js/scripts/{,*/}*.js", ["scripts"]);
	gulp.watch("./src/js/vendor/{,*/}*.js", ["scripts-vendor"]);
	gulp.watch("./src/js/preload/{,*/}*.js", ["scripts-preload"]);
	gulp.watch("./src/type/{,*/}*.js", ["type"]);
});

gulp.task("force", ["stylesheets", "scripts-preload", "scripts-vendor", "scripts", "images", "type"]);

gulp.task("stylesheets", function() {
	gulp.src("./src/scss/stylesheet.scss")
	.pipe(sass(
		{
			errLogToConsole: true,
			outputStyle: "compressed"
		}
	))
	.pipe(autoprefixer(
		{
			browsers: ['last 2 version', 'ie 8', 'ie 9', 'ie 10'],
			cascade: true
		}
	))
	.pipe(gulp.dest("./dst/css"))
});

gulp.task("scripts-preload", function() {
	gulp.src(
		[
			"./src/js/preload/*.js"
		]
	)
	.pipe(uglify())
	.pipe(concat("preload.js"))
	.pipe(gulp.dest("./dst/js"))
});

gulp.task("scripts-vendor", function() {
	gulp.src(
		[
			"./src/js/vendor/jquery-1.11.3.min.js",
			"./src/js/vendor/*.js"
		]
	)
	.pipe(uglify())
	.pipe(concat("vendor.js"))
	.pipe(gulp.dest("./dst/js"))
});

gulp.task("scripts", function() {
	gulp.src(
		[
			"./src/js/scripts/app.js",
			"./src/js/scripts/*.js"
		]
	)
	.pipe(uglify())
	.pipe(concat("scripts.js"))
	.pipe(gulp.dest("./dst/js"))
});

gulp.task("images", function() {
	gulp.src("./src/images/{,*/}*")
	.pipe(newer("./dst/images"))
	.pipe(imagemin(
		{
			optimizationLevel: 5, // png
			progressive: true, // jpg
			interlaced: true, // gif 
			multipass: true // svg
		}
	))
	.pipe(gulp.dest("./dst/images"))
});

gulp.task("type", function() {
	gulp.src("./src/type/{,*/}*")
	.pipe(gulp.dest("./dst/type"))
});
