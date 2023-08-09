var headerTl = gsap.timeline();
let lastScrollPosition = window.scrollY;

headerTl.fromTo(
  ".header",
  {
    y: -1 * document.querySelector(".header").offsetHeight,
    transformOrigin: "50% 50%",
  },
  {
    y: 0,
    ease: "slow(0.1, 0.4, false)",
    duration: 0.5,
  }
);

globalTl.add(headerTl, "headerTl");

window.onscroll = () => {
  var header = document.querySelector(".header");

  if (window.scrollY > lastScrollPosition) {
    header.style.transform = `translate(0, -${header.offsetHeight}px)`;
  } else {
    header.style.transform = `translate(0, 0)`;
  }

  lastScrollPosition = window.scrollY;
};
