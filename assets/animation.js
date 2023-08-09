let globalTl = gsap.timeline({
  paused: true,
});

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const horizontalSections = gsap.utils.toArray(".horizontal-scroll");

horizontalSections.forEach((section) => {
  const innerSections = section.querySelectorAll(".collections__section");

  gsap.to(section, {
    duration: 3,
    x: -1 * window.innerWidth * (innerSections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => `+=${window.innerWidth * (innerSections.length - 1)}`,
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
    },
  });
});
