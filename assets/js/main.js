document.addEventListener("DOMContentLoaded", function () {
    // navbar
    const menuBtn = document.querySelector('.menuBtn');
    const mobileMenu = document.querySelector('.mobileMenu');
    const closeMenu = document.querySelector('.closeMenu');
    menuBtn.addEventListener('click', function () {
        mobileMenu.classList.add('showMenu');
        mobileMenu.classList.remove('hideMenu');
    })
    closeMenu.addEventListener('click', function () {
        mobileMenu.classList.add('hideMenu');
        mobileMenu.classList.remove('showMenu');
    })
    
    var heroSlider = new Swiper(".heroSlider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: ".hero .swiper-button-prev",
            prevEl: ".hero .swiper-button-next",
        },
    });
    
    var testimonial = new Swiper(".testimonial", {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
         breakpoints: {
             '1056': {
                 slidesPerView: 2,
                 spaceBetween: 30
             }
         }
    });

})