import Swiper, {
  Scrollbar,
} from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

if (document.querySelector(".collection__swiper")) {
  const collectionSwiper = new Swiper(".collection__swiper", {
    spaceBetween: 40,
    loop: false,
    slidesPerView: "auto",

    modules: [Scrollbar],

    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
}
