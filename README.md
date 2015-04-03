Waterloo Tech Retreat
===============
A website for the Waterloo Tech Retreat.

### Development Environment
Ensure you have npm and bower installed, and that you've cloned this repo.

If you don't have npm, download [Node.js and npm](https://nodejs.org/).

Then, open your terminal and `cd` into this repo's directory:
```
$ npm install bower -g
$ bower install
```
That will install [bower](http://bower.io/), a package manager for the front-end, and then installs our front-end dependencies.

You'll also need to compile SASS into CSS, the Brackets SASS extension makes this easy. 

Brackets' live-preview blocks you from using the dev console, `http-server` is a good alternative.
```
$ npm install http-server -g
$ http-server
```

Then navigate to `localhost:8000` in your browser.
