document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".testimonial", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})