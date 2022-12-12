const nav = document.querySelector('.nav_container');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (lastScrollY < window.scrollY && lastScrollY > 80) {
    nav.classList.add('nav--hidden');
  }

  if (lastScrollY - 6 > window.scrollY || lastScrollY < 80) {
    nav.classList.remove('nav--hidden');
  }

  lastScrollY = window.scrollY;
});