const sliderCards = document.querySelectorAll(".card-slider");

sliderCards.forEach((slider) => {
    const swiperSlider = slider.querySelector(".card-slider-swiper");
    const swiper = new Swiper(swiperSlider, {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: slider.querySelector(".swiper-button-next"),
            prevEl: slider.querySelector(".swiper-button-prev"),
        },
        /* breakpoints: {
            1150: {
                slidesPerView: 3,
            },
        }, */
    });
});

