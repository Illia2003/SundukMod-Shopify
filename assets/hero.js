document.addEventListener("DOMContentLoaded", () => {
  var heroTl = gsap.timeline();

  heroTl
    .fromTo(
      ".hero .btn__svg--first svg path",
      {
        scale: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
      },
      {
        scale: 1,
        duration: 1.5,
        ease: "slow(0.1, 0.4, false)",
      }
    )
    .fromTo(
      ".hero .btn__svg--first svg path",
      {
        opacity: 1,
        transformOrigin: "50% 50%",
      },
      {
        opacity: 0,
        duration: 0.7,
        ease: "slow(0.1, 0.4, false)",
      },
      "-=0.6"
    );

  heroTl
    .fromTo(
      ".hero .btn__svg--second svg path",
      {
        scale: 0,
        opacity: 1,
        transformOrigin: "50% 50%",
      },
      {
        scale: 1,
        duration: 1.5,
        ease: "slow(0.1, 0.4, false)",
      },
      "-=1"
    )
    .fromTo(
      ".hero .btn__svg--second svg path",
      {
        opacity: 1,
        transformOrigin: "50% 50%",
      },
      {
        opacity: 0,
        duration: 0.7,
        ease: "slow(0.1, 0.4, false)",
      },
      "-=0.6"
    );

  heroTl.fromTo(
    ".hero .btn__content svg path",
    {
      scale: 0,
      opacity: 1,
      transformOrigin: "50% 50%",
    },
    {
      scale: 1,
      duration: 1.5,
      ease: "slow(0.1, 0.4, false)",
    },
    "-=1"
  );

  heroTl.fromTo(
    ".hero .btn__content .animation .btn__text",
    {
      y: "100%",
    },
    {
      y: 0,
      duration: 0.5,
      ease: "slow(0.1, 0.4, false)",
    }
  );

  heroTl.to(".section__title .animation", {
    y: 0,
    duration: 0.75,
    delay: (index) => {
      return 0.15 * index;
    },
    ease: "slow(0.1, 0.4, false)",
  });

  heroTl.fromTo(
    ".hero .hero__bottom img",
    {
      y: "100%",
      scale: 0,
    },
    {
      y: 0,
      scale: 1,
      duration: 1,
      ease: "slow(0.1, 0.4, false)",
    }
  );
});
