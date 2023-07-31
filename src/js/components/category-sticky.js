document.addEventListener('DOMContentLoaded', function () {

    if( $('.categories-section').length) {
        $(window).on( "scroll", function() {
            let scrollTriger = $('.categories-section').offset().top + $('.categories-section').height();
    
            console.log(scrollTriger)
    
            if ($(window).width() > 991 && $('.categories-section').length) {
    
                $('.categories-section').css('height', $('.categories-section').height())
                if(scrollTriger < $(window).scrollTop()) {
                    $('.categories-section').addClass('sticky');
                    $('.categories-list').css('top', $('.header').height())
                }
                else {
                    $('.categories-section').removeClass('sticky')
                }
            }
        })
    }
});