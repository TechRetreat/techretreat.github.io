var header = document.querySelector('.header');
window.addEventListener('scroll', function() {
  document.body.className = (window.scrollY >= header.getBoundingClientRect().height) ? 'scrolled' : '';
});
