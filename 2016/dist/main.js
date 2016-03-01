'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var header = document.querySelector('.header');
var updateScroll = function updateScroll() {
  document.body.className = window.scrollY >= header.getBoundingClientRect().height ? 'scrolled' : '';
};
updateScroll();
window.addEventListener('scroll', updateScroll);

var nav = document.querySelector('nav');
document.querySelector('.nav-link--toggle').addEventListener('click', function () {
  if (nav.className.indexOf('open') != -1) {
    nav.classList.remove('open');
  } else {
    nav.classList.add('open');
  }
});

var Astronaut = function Astronaut(img, onLoad) {
  _classCallCheck(this, Astronaut);

  this.img = img;
  this.x = Math.random();
  this.z = Math.random();

  this.element = document.createElement('div');
  this.element.className = 'header__astronaut';
  this.element.style.left = this.x * 100 + '%';
  this.element.style.zIndex = '' + Math.round(this.z * 100);
  this.element.style.bottom = (1 - this.z) * 10 - 1 + 'rem';
  this.element.style.transform = 'scale(' + (0.75 + this.z * 0.5) + ')';

  this.body = document.createElement('div');
  var type = Math.floor(Math.random() * (Astronaut.SPRITE_MAX - Astronaut.SPRITE_MIN + 1)) + Astronaut.SPRITE_MIN;
  this.body.className = 'header__astronaut__body astronaut__body--' + type;
  this.body.style.transform = 'scaleX(' + (Math.random() > 0.5 ? -1 : 1) + ')';

  this.head = document.createElement('div');
  this.head.className = 'header__astronaut__head';
  this.head.style.backgroundImage = 'url("' + img + '")';

  this.preloadImg = document.createElement('img');
  this.preloadImg.src = img;
  this.preloadImg.addEventListener('load', onLoad || function () {});

  this.body.appendChild(this.head);
  this.element.appendChild(this.body);
};

Astronaut.SPRITE_MAX = 3;
Astronaut.SPRITE_MIN = 1;


var sample = function sample(arr, size) {
  var shuffled = arr.slice(0),
      i = arr.length,
      min = i - size,
      temp = undefined,
      index = undefined;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
};

var canvas = document.querySelector('.header__bg');

var req = new XMLHttpRequest();
req.addEventListener("load", function () {
  if (req.response) {
    (function () {
      var team = sample(JSON.parse(req.response).team, 8);
      var loaded = 0;
      team.map(function (member) {
        return new Astronaut(member.image, function () {
          loaded++;
          if (loaded == team.length) canvas.classList.remove('header__bg--dimmed');
        });
      }).forEach(function (astronaut) {
        return canvas.appendChild(astronaut.element);
      });
    })();
  }
});
req.open("GET", "data/team.json");
req.send();
//# sourceMappingURL=main.js.map
