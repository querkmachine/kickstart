Kickstart
=========

Kickstart is my boilerplate code for new projects. It provides a basic "chrome" page with various common features, as well as an atomic Sass framework, common Javascript libraries and Gulp for processing.

Pattern library
---------------

To build the pattern library [install Jekyll](http://jekyllrb.com/docs/quickstart/), navigate into the `jekyll` directory and run `jekyll build`. This will create a new `pattern-library` directory with the compiled site in it. (Make sure to edit the `_config.yml` file!)

Version history
---------------

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
