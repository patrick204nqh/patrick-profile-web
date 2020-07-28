// handle scroll nav

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  const header = document.querySelector('header')
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    header.classList.add('header-hidden')
  } else {
    header.classList.remove('header-hidden')
  }
}

// toggle navbar button
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navLink = document.getElementsByClassName('nav-link')[0];

toggleButton.addEventListener('click', () => {
  navLink.classList.toggle('open')
})

// slideshow indicators

window.onload = () => {
  if (window.innerWidth < 820) {
    showSlide(0);
  }
}

let currentSlide = 0;

window.onresize = () => {
  if (window.innerWidth < 820) {
    showSlide(currentSlide);
  }
}

const showSlide = (current) => {
  const slides = document.querySelectorAll('.slides');
  currentSlide = current;
  if (current + 1 > slides.length) { currentSlide = 0; }
  if (current < 0) { currentSlide = slides.length - 1; }
  console.log(current, slides.length, currentSlide)
  slides.forEach(slide => slide.classList.remove('show'));
  slides[currentSlide].classList.add('show');
}

const plusDiv = (n) => {
  showSlide(currentSlide += n)
}
