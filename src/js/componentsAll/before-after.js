document.addEventListener('DOMContentLoaded', function () {

    const sliderImgItems = document.querySelectorAll('.slider-img-item');
    const sliderTriggers = document.querySelectorAll('.slider-trigger');
    const sliderImg = document.querySelector('.slider-img');
    const sliderImgItemsBefore = document.querySelectorAll('.slider-img-item__before');
    let isActive = false;

    function moveSlider(e, isActive) {
        if (!isActive) {
            return;
        }

        let x;
        if (e.changedTouches) {
            x = e.changedTouches[0].pageX;
        } else {
            x = e.offsetX;
        }

        sliderTriggers.forEach((trigger) => {
            trigger.style.left = x + 'px';
        });
        sliderImgItemsBefore.forEach((image) => {
            image.style.width = x + 'px';
        });

        sliderImgItemsBefore.classList.remove('tr');
        sliderTriggers.classList.remove('tr');
    }

    function addEventListeners(items) {
        items.forEach((item) => {
            const sliderImgItemBefore = item.querySelector('.slider-img-item__before');
            const sliderTrigger = item.querySelector('.slider-trigger');

            item.addEventListener('mousemove', (e) => {
                moveSlider(e, isActive);
            });

            item.addEventListener('touchmove', (e) => {
                moveSlider(e, isActive);
            });

            item.addEventListener('mousedown', () => (isActive = true));

            item.addEventListener('mouseup', () => {
                isActive = false;
                sliderImgItemsBefore.classList.add('tr');
                sliderTriggers.classList.add('tr');
            });

            item.addEventListener('touchstart', () => (isActive = true));

            item.addEventListener('touchend', () => {
                isActive = false;
                sliderImgItemsBefore.classList.add('tr');
                sliderTriggers.classList.add('tr');
            });

            item.addEventListener('touchcancel', () => {
                isActive = false;
                sliderImgItemsBefore.classList.add('tr');
                sliderTriggers.classList.add('tr');
            });
        });
    }

    addEventListeners(sliderImgItems);

    const returnSlider = () => {
        sliderTriggers.forEach((trigger) => {
            trigger.style.left = '60%';
        });
        sliderImgItemsBefore.forEach((image) => {
            image.style.width = '60%';
        });
    };

    const swiperButtonNext = sliderImg.querySelector('.swiper-button-next');
    const swiperButtonPrev = sliderImg.querySelector('.swiper-button-prev');
    const swiperPagination = sliderImg.querySelector('.swiper-pagination');

    swiperButtonNext.addEventListener('click', returnSlider);
    swiperButtonPrev.addEventListener('click', returnSlider);
    swiperPagination.addEventListener('click', returnSlider);
});