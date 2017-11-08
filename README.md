Kickstart
=========

Kickstart is my boilerplate code for new projects. It provides a basic "chrome" page with various common features, as well as an atomic Sass framework, common Javascript libraries and Gulp for processing.

Version history
---------------

### 6.0.0 (beta)
Quality of life improvements and general updates that probably break stuff whoops sorry. 

* Added a default SVG icon spritesheet, populated with some [Plimsoll Icons](https://github.com/severnbronies/Plimsoll-Icons).
* Changed default Modernizr config: 
  * Additionally tests support for: CSS Grid Layout (spec and legacy support), CSS background blend modes, CSS @supports.
  * No longer tests for: CSS gradients.

### Sass 
* Split some mixins into their own file, `_mixins.layout.scss`.
* Changed `_accessibility.scss` to `_skiplink.scss` and moved global accessibility styles to `_global.scss`; cause that's kinda sensible really. 
* Added a typography mixin for viewport-based sizes with capped min and max. 
* Added a (hopefully not long for this world) mixin to manage the clusterfuck that is the iOS 11's `constant()`/`env()`/`min()`/`max()` debacle. 

### JavaScript
* Update Babel to latest version, along with migrating to `babel-preset-env`. 
* Move to using classes for JavaScript, rather than nesting functions. I'm trying to force myself into that way of doing stuff.
* Add a file full of JS helper functions that I use all the time.

### 5.0.0
This update does a whole lot of opinionated changes aimed entirely at making my life easier. There's new sensible defaults, more node packages tailored for the way I like to build things, and a whole lot of breaking changes. You have been warned. 

* Added basic configuration for [Fractal](http://fractal.build). Cause I keep using Fractal and having to set up all those Gulp tasks manually. 
  * The default Gulp task will now set up a Fractal server in addition to watching for stuff. Use `gulp watch` to only do the latter. 
  * Likewise `gulp force` will now run a Fractal export. Use `gulp production` to only recompile assets. 
* Changes to JavaScript compilation. There's now a file called `app.js`, which is always first in the concat queue, so you can initialise globals in there without having to check for their existence in every subsequent file. 
* Updated node dependencies, JavaScript libraries, and modified default Modernizr tests. 
* Favicons can now be automagically generated. Add a `favicon.png` file to the images directory and it'll be resized, converted and linked up for you. 
* Added CSS and viewport tag for the iPhone X's notch.
* Simplied Twitter Card and OpenGraph tags.

#### Sass
* Project settings are now held in one massive Sass map, rather than multiple smaller ones and various global variables. 
* Added a `config` function for getting things out of said massive Sass map.
* Added a whole file full of typography related mixins. It was kinda weird having them in an atom file. 
* Added a bunch of other mixins too (and maybe removed one or two).
* Removed Sass functions for embedding SVGs in CSS. I ain't about that life (not anymore, anyway). 

### 4.0.0

#### Build system
* Added `gulp-watch` to replace the built in watch function. No more need to kill and restart Gulp every time you add a new file!
  * Also changed the regexes to be simpler and not fail on a bunch of edge cases.
* Added [Yarn](http://yarnpkg.org) lockfile. Yarn is cool. (Though it really disagrees with `gulp-imagemin`...)
* Removed npm shrinkwrap file. 

#### Sass
* Simplified CSS for skiplinks and took them out of lists. Some screenreaders were disapproving. 
* Removed a ton of pre-defined Sass styles that I don't tend to use anymore. 
* Now always uses system fonts by default. Better performing and often just as pretty. Following GitHub's lead on that one.

#### Pattern library
* Is gone. It was pointless now that I've moved to using [Fractal](http://fractal.build), which is generally better in every way. Also felt a little out of place having one in a 'basic' boilerplate.

### 3.0.1 
* Fix Gulpfile not compiling vendor and preload code on `production` task.
* Swap `let` for `var` on `no-js` class code, cause old IE falls over it. 

### 3.0.0

#### Build system
* Gulp tasks have been radically overhauled. 
  * Gulpfile itself is now in ES2015 JavaScript. 
  * Added npm shrinkwrap file. 
* Added Gulp task to lint Sass files.
* Modified JS task to transpile ES2015 code. 

#### Sass
* Sass mixins and functions! Added some new ones, removed some old ones.
  * Media query mixin no longer has IE fallback.
  * Vertical alignment mixin has been removed.
  * `em-calc` function has been replaced with `rem-calc`. 
* Completely changed CSS reset code. 
* Updated accessibility CSS. 

#### JavaScript
* Now ES2015 as standard.

* Live your dreams!

### 2.3.0
* Updated npm packages to newest versions.
* Added [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) for error handling. 

### 2.2.0
* Added Jekyll powered pattern library. If you don't need it just delete the `jekyll` directory. 

### 2.1.0
* Added support for non-mapped breakpoints in the `mq` media query mixin. You can `mq("(min-width: 420px)")` to your heart's content. 

### 2.0.2
* Fix `type` task being unable to process fonts nested within folders. 

### 2.0.1 
* Fixed interpolation issue with media query mixin. 

### 2.0.0
* [BREAKING] Changed to 'source' and 'destination' style assets processing. 
* Added support for Safari 9's pinned tab icons.
* Added `type` directory and associated Gulp task.
* Added `force` Gulp task that forcibly reprocesses everything. 
* Added global `:focus` styles.
* Added ARIA roles to base HTML.
* [BREAKING] Modified media query mixin to use Sass maps instead of variables.
* Modified skip links to be visible on-screen when focused.
* Modified browser warning to now display on IE8.
* Modified navigation code in base HTML.
* Upgraded jQuery from v1.11.2 to v1.11.3. 

### 1.0.1
* Fixed favicon directory name.
* Fixed favicon URLs in manifest files. 
* Fixed wrongly named attribute in Twitter Card code.

### 1.0.0
* Initial release.
