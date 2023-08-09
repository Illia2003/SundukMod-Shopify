let lastScrollPosition = window.scrollY;

window.onscroll = () => {
  var header = document.querySelector(".header");

  if (window.scrollY > lastScrollPosition) {
    header.style.transform = `translate(0, -${header.offsetHeight}px)`;
  } else {
    header.style.transform = `translate(0, 0)`;
  }

  lastScrollPosition = window.scrollY;
};
