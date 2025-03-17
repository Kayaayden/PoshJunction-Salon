
// NavBar Menu
const navTriggerBtn = document.querySelector('#new-trigger-btn');
const navMenu = document.querySelector('#nav-menu');

// EventListener 
navTriggerBtn.addEventListener('click', () => {navMenu.classList.toggle('nav-is-open')});

//Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el:'.swiper-pagination',
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