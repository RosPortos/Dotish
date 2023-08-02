

$('.search-trigger').on('click', function () {
    $('.search-modal').toggleClass('active-search-modal');
    $('.search-modal__list').removeClass('active-search-list');
    $('.search-modal__input').val('');
});

$('.search-modal__input').on('focus', function () {
    $('.search-modal__list').addClass('active-search-list');
});

$(document).on('click', function (event) {
    var target = $(event.target);
    if (!target.closest('.search-trigger').length && !target.closest('.search-modal').length) {
        $('.search-modal').removeClass('active-search-modal');
        $('.search-modal__list').removeClass('active-search-list');
        $('.search-modal__input').val('');
    }
});

if ($(window).width() <= 768) {
    $('.menu-item-has-children').on('click', function () {
        $(this).find('.sub-menu').slideToggle(300);
        $(this).toggleClass('active-sub-menu');
    });
}

function headerHide() {
    const header = document.querySelector(".header");
    let scrolledWindow = scrollY;
    let scrollPrev = 0;

    if (scrolledWindow > 10) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }


    window.addEventListener('scroll', function () {
        let scrolled = scrollY;

        if (scrolled > 10) {
            header.classList.add('header-scroll');
        } else {
            header.classList.remove('header-scroll');
        }

        /* if (scrolled > 0 && scrolled > scrollPrev) {
            header.classList.add('header-hide');
        } else {
            header.classList.remove('header-hide');
        } */
        scrollPrev = scrolled;
    });
}

if (document.querySelector(".header")) {
    headerHide();
}


let baskerModalActiveClass = 'basket-modal-active';

function basketModal(trigger, modal, activeClass) {
    $(trigger).hover(function () {
        $(modal).addClass(activeClass);
    }, function () {
        $(modal).removeClass(activeClass);
    });

    $(modal).hover(function () {
        $(modal).addClass(activeClass);
    }, function () {
        $(modal).removeClass(activeClass);
    });
}

function basketModalMob(trigger, modal, activeClass) {
    $(trigger).on('click', function () {
        $(modal).toggleClass(activeClass);
        $('.overley').toggleClass('active-overley');
    });

    $(document).on('click', function (event) {
        var target = $(event.target);
        if (!target.closest(modal).length && !target.closest(trigger).length) {
            $(modal).removeClass(activeClass);
        }
    });

    $('.basket-modal__close').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(modal).removeClass(activeClass);
        $('.overley').removeClass('active-overley');
    });

    $('.overley').on('click', function () {
        $(modal).removeClass(activeClass);
        $('.overley').removeClass('active-overley');
    });


}


if ($(window).width() > 768) {
    basketModal('.basket', '.basket-modal--order', baskerModalActiveClass);
    basketModal('.header__favorite', '.basket-modal--favorite', baskerModalActiveClass);
} else {
    basketModalMob('.basket', '.basket-modal--order', baskerModalActiveClass);
    basketModalMob('.header__favorite', '.basket-modal--favorite', baskerModalActiveClass);


}











