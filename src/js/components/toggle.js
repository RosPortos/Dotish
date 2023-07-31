

$(document).ready(function () {
    var items = $('.faq-item');
    var halfWayThrough = Math.ceil(items.length / 2)

    var column1 = $('<div class="column"></div>');
    var column2 = $('<div class="column"></div>');

    items.each(function (index, item) {
        if (index < halfWayThrough) {
            column1.append(item);
        } else {
            column2.append(item);
        }
    });

    $('.faq__wrapper').empty().append(column1).append(column2);

    $('.faq-item .faq-item__title').on('click', function () {
        $('.faq-item .faq-item__descr').not($(this).next()).slideUp(300);
        $(this).next().slideToggle(300);
        $(this).toggleClass('active');
        $(this).parents('.faq-item').siblings().find('div').removeClass('active');
    });
});