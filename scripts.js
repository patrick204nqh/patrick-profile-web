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

const sections = document.querySelectorAll('section');

sections.forEach(item => {
  item.addEventListener('click', function (event) {
    var isClickInside = navLink.contains(event.target);

    if (!isClickInside) {
      closeButton()
    }
  })
});

const closeButton = () => {
  navLink.classList.remove('open');
}

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
  slides.forEach(slide => slide.classList.remove('show'));
  slides[currentSlide].classList.add('show');
}

const plusDiv = (n) => {
  showSlide(currentSlide += n)
}

// about-me button
const aboutMe = document.getElementById('about-me');
aboutMe.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.assign('/#about')
})

// banner-name click
const banner = document.getElementsByClassName('banner-name')[0];
banner.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.assign('/#home')
})

// handle nav click
const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('click', function () {
    var current = document.getElementsByClassName("active")[0];
    current.className = current.className.replace(" active", "");
    this.className += " active";
  })
});

// handle click project
const modal = document.querySelector('.modal');
const projects = document.querySelectorAll('.slides');

modal.querySelector('.modal-container').querySelector('div').addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('open');
})

projects.forEach(project => {
  project.querySelector('i').addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.add('open');
    let src = e.target.parentElement.querySelector('img').getAttribute('src');
    modal.querySelector('img').setAttribute('src', src);
    modal.querySelector('a').setAttribute('href', 'https://github.com/patrick204nqh');
    console.log(e.target.parentElement);
    // modal.querySelector('img').getAttribute('src');
  })
})

