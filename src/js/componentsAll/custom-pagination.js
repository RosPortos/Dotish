function createCustomDots() {
    const sliders = document.querySelectorAll('.swiper-container');

    sliders.forEach(function (slider) {
        const sliderId = slider.dataset.sliderId;
        const dotsContainer = document.querySelector(
            `.custom-dots-container[data-slider-id="${sliderId}"] .custom-dots`
        );
        const totalSlides = slider.querySelectorAll('.swiper-slide').length;

        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('li');
            dot.dataset.index = i;
            dot.addEventListener('click', function () {
                const swiper = slider.swiper;
                swiper.slideTo(i);
            });
            dotsContainer.append(dot);
        }
    });
}

createCustomDots();

function updateCustomDots(swiper) {
    const slider = swiper.el;
    const currentSlideIndex = swiper.activeIndex;
    const customDotsContainer = slider.nextElementSibling;
    const dotsViewport = customDotsContainer.querySelector('.dots-viewport');
    const dotsContainer = customDotsContainer.querySelector('.custom-dots');
    const totalSlides = slider.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length;
    const viewportWidth = dotsViewport.clientWidth;
    const halfViewportWidth = viewportWidth / 2;

    dotsContainer.querySelectorAll('li').forEach(function (li) {
        li.classList.remove('active');
    });

    const activeDot = dotsContainer.querySelector(`li[data-index="${currentSlideIndex}"]`);
    activeDot.classList.add('active');

    if (currentSlideIndex >= 2 && currentSlideIndex < totalSlides - 2) {
        customDotsContainer.classList.add('show-two-dots');
    } else {
        customDotsContainer.classList.remove('show-two-dots');
    }

    if (currentSlideIndex < 2) {
        customDotsContainer.classList.add('show-left-dot');
    } else {
        customDotsContainer.classList.remove('show-left-dot');
    }

    if (currentSlideIndex > totalSlides - 3) {
        customDotsContainer.classList.add('show-right-dot');
    } else {
        customDotsContainer.classList.remove('show-right-dot');
    }

    if (activeDot) {
        const activeDotPosition = activeDot.getBoundingClientRect();
        const viewportPosition = dotsViewport.getBoundingClientRect();
        const centeredScroll =
            dotsViewport.scrollLeft +
            activeDotPosition.left -
            viewportPosition.left -
            halfViewportWidth +
            activeDot.offsetWidth / 2;

        dotsViewport.scroll({ left: centeredScroll, behavior: 'smooth' });
    }
}

function initSwiper(slider) {
    const swiper = new Swiper(slider, {
        slidesPerView: 4,
        spaceBetween: 0,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        breakpoints: {
            1280: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 2,
            },
            650: {
                slidesPerView: 1,
            },
        },
        on: {
            slideChange: function () {
                updateCustomDots(this);
            },
        },
    });

    return swiper;
}

function initCustomDots(slider, swiper) {
    const totalSlides = slider.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length;
    const dotsContainer = document.createElement('ul');
    dotsContainer.classList.add('custom-dots');

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('li');
        dot.dataset.index
        dot.dataset.index = i;
        dot.classList.add(i === swiper.activeIndex ? 'active' : '');
        dot.addEventListener('click', function () {
            swiper.slideTo(i);
        });
        dotsContainer.append(dot);
    }

    const customDotsContainer = document.createElement('div');
    customDotsContainer.classList.add('custom-dots-container');
    const dotsViewport = document.createElement('div');
    dotsViewport.classList.add('dots-viewport');
    dotsViewport.style.maxWidth = '55px';
    dotsViewport.style.overflow = 'hidden';
    dotsViewport.append(dotsContainer);
    customDotsContainer.append(dotsViewport);

    slider.insertAdjacentElement('afterend', customDotsContainer);

    updateCustomDots(swiper);
}

const sliders = document.querySelectorAll('.slider .list');

sliders.forEach(function (slider) {
    const swiper = initSwiper(slider);
    initCustomDots(slider, swiper);
});