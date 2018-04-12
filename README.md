EngHack
===============
EngHack's website.

### Development Environment
Ensure you have npm and bower installed, and that you've cloned this repo.

If you don't have npm, download [Node.js and npm](https://nodejs.org/).

Then, open your terminal and `cd` into this repo's directory:
```
$ npm install bower -g
$ npm install grunt-sass
$ npm install
$ bower install
```
That will install [bower](http://bower.io/), a package manager for the front-end, and then installs our front-end dependencies as well as the grunt task runner to compile SASS and minify CSS.

To run the server:
```
$ grunt
```

Then navigate to `localhost:8000` in your browser.
