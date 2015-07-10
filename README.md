Kickstart
=========

Kickstart is my boilerplate code for new projects. It provides a basic "chrome" page with various common features, as well as an atomic Sass framework, common Javascript libraries and Gulp for processing.

Version history
---------------

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
