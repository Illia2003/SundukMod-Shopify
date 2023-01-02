import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

if (document.querySelector(".collection__swiper")) {
  const collectionSwiper = new Swiper(".collection__swiper", {
    spaceBetween: 40,
    loop: false,
    slidesPerView: "auto",

    on: {
      init: (swiper) => {
        const swiperElement = swiper.el;

        swiperElement.querySelector(
          ".swiper-pagination .swiper-pagination-end"
        ).textContent =
          swiper.slides.length - 1 < 10
            ? `0${swiper.slides.length - 1}`
            : swiper.slides.length - 1;
      },
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: 60,
      snapOnRelease: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
