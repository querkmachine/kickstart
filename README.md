# Kickstart

Kickstart is my boilerplate code for new projects. It provides a basic "chrome" page with various common features, as well as an atomic Sass framework, Fractal-based component library and a Gulp toolchain. It also features a bunch of boilerplate code that I usually end up including into projects anyway. 

**This is *my* boilerplate. It's very opinionated towards how I tend to do things, so there's no guarantee that it'll be useful to you!** Feel free to use it as a learning experience, however! 

As you may expect of any sensible project, the develop branch has the latest and greatest, utterly untested in production environments stuff; master has all the tried and tested stuff. Don't mix them up, for your own sake.

## Version history

### 7.1.0

A bit of a maintenace update, some minor new features, those kinds of things.

* Updated nearly all of the npm packages to patch some security issues. 
  * Swapped out `babel-core` and `babel-preset-env` packages for `@babel/core` and `@babel/preset-env` respectively, as required by the newest version of `gulp-babel`, and updated the gulpfile respectively.
* Removed line of code that added a `.js` class to the page, as this was duplicating functionality from the Modernizr file.

### 7.0.0

Mostly tooling improvements in this update. A lot of stuff has been changed, but it shouldn't break anything existent... hopefully. (You'll probably be fine.)

#### Fractal
* Add `add-fractal-component.sh` script to automate making all of the HTML, YAML, Sass and readme files that each component has. 
* Add new `date` and `currency` Nunjucks filters for Fractal.
* Add a bunch of documentation pages for Fractal, covering colour palettes, typography, iconography, design tokens, microcopy and the new Sass spacing mixins.
* Added a (very basic!) filter/search function to the navigation.

#### Build system
* `gulp` has been updated. The gulpfile has been completely rewritten to accommodate the functional changes in Gulp 4.x.x and remove now unnecessary dependencies.
* `gulp-sass` has also been updated to the 4.x.x branch.
* `gulp-imagemin` has *also* been updated to the 4.x.x branch. 
* Add a `clean` Gulp task for easily deleting compiled assets.

#### Sass
* New spacing functions and mixins have been added to provide more consistency with spacing. [Hat tip to the GOV.UK team.](https://design-system.service.gov.uk/styles/spacing/)
* Renamed the `animation` Sass group to the more generic `aesthetic`. 
* Turned the focus style into a mixin and placed it into a new file, `_mixins.theme.scss`. 
* Deleted the use of the `constant()` CSS function in the `safe-inset` Sass mixin. This was only needed for iOS 11, and was replaced by `env()` in iOS 11.2.

#### JavaScript
* Added a default jshint configuration—`.jshintrc`. 
* Deleted `App.js` as it rarely got used. `Helper.js` is now the main starting point for JS compilation.

#### Bugfixes
* Gulp 4 allows tasks to run in series, even if they return values asyncronously. This should resolve occassional problems with certain tasks running before the tasks they were dependent on finishing. 
* Fixed a misaligned icon in the default spritesheet.

### 6.0.0
Quality of life improvements and general updates that probably break stuff whoops sorry. (Boy the consistency with which I write this changelog has gone downhill hasn't it?)

* Added a default SVG icon spritesheet, populated with some [Plimsoll Icons](https://github.com/severnbronies/Plimsoll-Icons).
* Changed default Modernizr config: 
  * Additionally tests support for: CSS Grid Layout (spec and legacy support), CSS background blend modes, CSS @supports.
  * No longer tests for: CSS gradients.

#### Sass 
* Split some mixins into their own file, `_mixins.layout.scss`.
* Added a typography mixin for viewport-based sizes with capped min and max. 
* Added a (hopefully not long for this world) mixin to manage the clusterfuck that is the iOS 11's `constant()`/`env()`/`min()`/`max()` debacle. 
* Changed `_accessibility.scss` to `_skiplink.scss` and moved global accessibility styles to `_global.scss`; cause that's kinda sensible really. 
* Changed the `mq()` mixin to be more versatile with automatically making min/max media queries; but it doesn't do 'stringy' media queries anymore. (Was it ever necessary to put those through a mixin, really?)
* Added a `print()` mixin for print styles too. Been doing a few of those lately.

#### JavaScript
* Added a file full of JS helper functions that I use all the time.
* Update Babel to latest version, along with migrating to `babel-preset-env`. 
* Move to using classes for JavaScript, rather than nesting functions. I'm trying to force myself into that way of doing stuff.
* Removed Herobrine. 

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
