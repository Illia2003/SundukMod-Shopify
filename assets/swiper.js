import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

if (document.querySelector(".collection__swiper")) {
  const collectionSwiper = new Swiper(".collection__swiper", {
    spaceBetween: 40,
    loop: false,
    slidesPerView: 1,

    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: 60,
    },
  });
}
