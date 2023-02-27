const preloaderTl = gsap.timeline({ paused: true });

preloaderTl.to(".preloader .preloader__figure--first", {
  rotation: 360,
  ease: "slow(0.1, 0.4, false)",
  duration: 2,
  motionPath: {
    path: [
      {
        x:
          document.body.clientWidth -
          document.querySelector(".preloader .preloader__figure--first")
            .offsetWidth,
        y: 72,
      },
      {
        x: document.body.clientWidth * 0.3354,
        y:
          window.innerHeight -
          document.querySelector(".preloader .preloader__figure--first")
            .offsetHeight,
      },
    ],
    curviness: 0,
    alignOrigin: [0.5, 0.5],
  },
});

preloaderTl.to(
  ".preloader .preloader__figure--second",
  {
    rotation: 360,
    ease: "slow(0.1, 0.4, false)",
    duration: 2,
    motionPath: {
      path: [
        {
          x: 0,
          y: 0,
        },
        {
          x: document.body.clientWidth * 0.4979,
          y:
            window.innerHeight -
            document.querySelector(".preloader .preloader__figure--second")
              .offsetHeight,
        },
        {
          x: document.body.clientWidth * 0.7361,
          y:
            window.innerHeight -
            document.querySelector(".preloader .preloader__figure--second")
              .offsetHeight,
        },
      ],
      curviness: 0,
      alignOrigin: [0.5, 0.5],
    },
  },
  "-=2"
);

preloaderTl.fromTo(
  ".preloader .preloader__figure--third",
  {
    x: document.body.clientWidth,
    y: 0,
  },
  {
    rotation: 360,
    ease: "slow(0.1, 0.4, false)",
    duration: 2,
    motionPath: {
      path: [
        {
          x: document.body.clientWidth * 0.052,
          y:
            window.innerHeight -
            document.querySelector(".preloader .preloader__figure--third")
              .offsetHeight,
        },
      ],
      curviness: 0,
      alignOrigin: [0.5, 0.5],
    },
  },
  "-=1"
);

preloaderTl.fromTo(
  ".preloader .preloader__figure--fourth",
  {
    x: document.body.clientWidth - 720,
    rotation: 0,
  },
  {
    rotation: 360,
    ease: "slow(0.1, 0.4, false)",
    duration: 2,
    motionPath: {
      path: [
        {
          x: document.body.clientWidth * 0.65625,
          y:
            window.innerHeight -
            document.querySelector(".preloader .preloader__figure--fourth")
              .offsetHeight -
            document.querySelector(".preloader .preloader__figure--fourth")
              .offsetHeight *
              0.7421,
        },
      ],
      curviness: 0,
      alignOrigin: [0.5, 0.5],
    },
  },
  "-=1"
);

preloaderTl.fromTo(
  ".preloader .preloader__figure--fifth",
  {
    x: 720,
    rotation: 0,
  },
  {
    rotation: 360,
    ease: "slow(0.1, 0.4, false)",
    duration: 2,
    motionPath: {
      path: [
        {
          x: document.body.clientWidth * 0.1763,
          y:
            window.innerHeight -
            document.querySelector(".preloader .preloader__figure--fifth")
              .offsetHeight -
            document.querySelector(".preloader .preloader__figure--fifth")
              .offsetHeight *
              1,
        },
      ],
      curviness: 0,
      alignOrigin: [0.5, 0.5],
    },
  },
  "-=1"
);

preloaderTl.fromTo(
  ".preloader .preloader__figure--sixth",
  {
    x: 960,
    rotation: 0,
  },
  {
    rotation: 360,
    ease: "slow(0.1, 0.4, false)",
    duration: 2,
    motionPath: {
      path: [
        {
          x: -1 * document.body.clientWidth * 0.1493,
          y:
            window.innerHeight -
            document.querySelector(".preloader .preloader__figure--sixth")
              .offsetHeight -
            document.querySelector(".preloader .preloader__figure--sixth")
              .offsetHeight *
              0.7103,
        },
      ],
      curviness: 0,
      alignOrigin: [0.5, 0.5],
    },
  },
  "-=1"
);

preloaderTl.fromTo(
  ".preloader .preloader__figure--seventh",
  {
    x: 840,
    rotation: 0,
  },
  {
    rotation: 360,
    ease: "slow(0.1, 0.4, false)",
    duration: 2,
    motionPath: {
      path: [
        {
          x: -1 * document.body.clientWidth * 0.0145,
          y:
            window.innerHeight -
            document.querySelector(".preloader .preloader__figure--seventh")
              .offsetHeight -
            document.querySelector(".preloader .preloader__figure--seventh")
              .offsetHeight *
              1.551,
        },
      ],
      curviness: 0,
      alignOrigin: [0.5, 0.5],
    },
  },
  "-=1"
);

preloaderTl.fromTo(
  ".preloader .preloader__figure--eighth",
  {
    x: -120,
    rotation: 0,
  },
  {
    rotation: 360,
    ease: "slow(0.1, 0.4, false)",
    duration: 2,
    motionPath: {
      path: [
        {
          x: document.body.clientWidth * 0.32,
          y:
            window.innerHeight -
            document.querySelector(".preloader .preloader__figure--eighth")
              .offsetHeight -
            document.querySelector(".preloader .preloader__figure--eighth")
              .offsetHeight *
              1.092,
        },
      ],
      curviness: 0,
      alignOrigin: [0.5, 0.5],
    },
  },
  "-=1"
);

preloaderTl.fromTo(
  ".preloader .preloader__figure--ninth",
  {
    x: 240,
    rotation: 0,
  },
  {
    rotation: 360,
    ease: "slow(0.1, 0.4, false)",
    duration: 2,
    motionPath: {
      path: [
        {
          x: document.body.clientWidth * 0.74,
          y:
            window.innerHeight -
            document.querySelector(".preloader .preloader__figure--ninth")
              .offsetHeight -
            document.querySelector(".preloader .preloader__figure--ninth")
              .offsetHeight *
              1.9045,
        },
      ],
      curviness: 0,
      alignOrigin: [0.5, 0.5],
    },
  },
  "-=1"
);

preloaderTl.to(
  ".preloader",
  {
    ease: "slow(0.1, 0.4, false)",
    duration: 1,
    y: -1 * document.querySelector(".preloader").offsetHeight,
  },
  "-=1"
);

preloaderTl.set("#preloader", { className: "preloader hide" });

preloaderTl.eventCallback("onComplete", () => {
  var root = document.getElementsByTagName("html")[0];

  root = root.classList.remove("noscroll");

  globalTl.play(0);
});

window.onload = () => {
  preloaderTl.play(0);
};
