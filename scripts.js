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