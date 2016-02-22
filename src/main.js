let header = document.querySelector('.header');
let updateScroll = () => {
  document.body.className = (window.scrollY >= header.getBoundingClientRect().height) ? 'scrolled' : '';
};
updateScroll();
window.addEventListener('scroll', updateScroll);

class Astronaut {
  static SPRITE_MAX = 3;
  static SPRITE_MIN = 1;

  constructor(img, onLoad) {
    this.img = img;
    this.x = Math.random();
    this.z = Math.random();

    this.element = document.createElement('div');
    this.element.className = 'header__astronaut';
    this.element.style.left = `${this.x*100}%`;
    this.element.style.zIndex = `${Math.round(this.z*100)}`;
    this.element.style.bottom = `${(1-this.z)*10 - 1}rem`;
    this.element.style.transform = `scale(${0.75 + this.z*0.5})`;

    this.body = document.createElement('div');
    let type = Math.floor(Math.random() * (Astronaut.SPRITE_MAX - Astronaut.SPRITE_MIN + 1)) + Astronaut.SPRITE_MIN;
    this.body.className = `header__astronaut__body astronaut__body--${type}`;
    this.body.style.transform = `scaleX(${Math.random()>0.5 ? -1 : 1})`;

    this.head = document.createElement('div');
    this.head.className = 'header__astronaut__head';
    this.head.style.backgroundImage = `url("${img}")`;

    this.preloadImg = document.createElement('img');
    this.preloadImg.src = img;
    this.preloadImg.addEventListener('load', onLoad || function(){});

    this.body.appendChild(this.head);
    this.element.appendChild(this.body);
  }
}

let sample = (arr, size) => {
  let shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

let canvas = document.querySelector('.header__bg');

var req = new XMLHttpRequest();
req.addEventListener("load", () => {
  if (req.response) {
    let team = sample(JSON.parse(req.response).team, 8);
    let loaded = 0;
    team
      .map((member) => new Astronaut(member.image, () => {
        loaded++;
        if (loaded == team.length) canvas.classList.remove('header__bg--dimmed');
      }))
      .forEach((astronaut) => canvas.appendChild(astronaut.element));
  }
});
req.open("GET", "data/team.json");
req.send();


