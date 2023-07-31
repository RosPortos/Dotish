const swiper = new Swiper(".slider-video-swiper", {
    slidesPerView: 'auto',
    loop: true,
    speed: 1200,
    spaceBetween: 0,
    centeredSlides: true,
    watchSlidesProgress: true,
    pagination: {
        el: ".slider-video .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".slider-video .swiper-button-next",
        prevEl: ".slider-video .swiper-button-prev",
    },
    /* breakpoints: {
        1150: {
            slidesPerView: 3,
        },
    }, */
});

function updateScale(isChanging) {
    swiper.slides.forEach((slide) => {
        const progress = slide.progress;
        const absProgress = Math.abs(progress);
        const scale = Math.max(1 - (absProgress * 0.53), 0.4);
        const translateX = progress * 185;
        const transitionDuration = isChanging ? '0.9s' : '0s';

        slide.style.transition = `transform ${transitionDuration} cubic-bezier(0.24, 0.88, 0.42, 1.01)`;
        slide.style.transform = `translateX(${translateX}px) scale(${scale})`;
    });
}

function resetTransition() {
    swiper.slides.forEach((slide) => {
        slide.style.transition = 'transform 0s';
    });
}

swiper.on('init', () => updateScale(false));
swiper.on('setTranslate', () => updateScale(false));
swiper.on('slideChangeTransitionStart', () => updateScale(true));
swiper.on('slideChangeTransitionEnd', () => updateScale(true));
swiper.on('touchStart', resetTransition);
swiper.on('paginationHide', resetTransition);
swiper.on('paginationShow', resetTransition);
swiper.on('paginationChange', () => {
    resetTransition();
    setTimeout(() => updateScale(true), 0);
});