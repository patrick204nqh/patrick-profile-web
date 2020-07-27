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