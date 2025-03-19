// NavBar Menu
const navTriggerBtn = document.querySelector("#new-trigger-btn");
const navMenu = document.querySelector("#nav-menu");

// EventListener
navTriggerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-is-open");
});

//Swiper -1 offer
const swiper1 = new Swiper(".swiper-1", {
  loop: true,
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true,
  },

  // breakpoints
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    960: {
      slidePerView: 2,
    },
    1200: {
      slidesperView: 2,
    },
  },
});

// Swipper -2 testimonial
const swiper2 = new Swiper(".swiper-2", {
  loop: true,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },

  //   breakpoints
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
