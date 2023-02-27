var headerTl = gsap.timeline();

headerTl.fromTo(
  ".header",
  {
    y: "-100%",
    transformOrigin: "50% 50%",
  },
  {
    y: 0,
    ease: "slow(0.1, 0.4, false)",
    duration: 0.5,
  }
);

globalTl.add(headerTl, "headerTl");
