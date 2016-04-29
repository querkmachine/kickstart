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
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("default", function() {
	gulp.watch("./src/scss/{,*/}*.scss", ["stylesheets"]);
	gulp.watch("./src/js//{,*/}*.js", ["javascript"]);
	gulp.watch("./src/type/{,*/}*.js", ["type"]);
});

gulp.task("force", ["stylesheets", "javascript", "images", "type"]);

gulp.task("stylesheets", function() {
	gulp.src("./src/scss/stylesheet.scss")
	.pipe(plumber())
	.pipe(sourcemaps.init())
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
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("./dst/css"))
});

gulp.task("javascript", function() {
	var folders = ["preload", "vendor", "scripts"];
	var tasks = folders.map(function(folder) {
		return gulp.src("./src/js/" + folder + "/**/*.js", {
			base: "./src/js/" + folder
		})
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(concat(folder + ".js"))
		.pipe(uglify())
		.pipe(sourcemaps.init())
		.pipe(gulp.dest("./dst/js"))
	});
	merge(tasks);
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
