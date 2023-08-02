$(document).ready(function () {
    function categorySticky() {
        if( $('.categories-section').length) {
            let category = $('.categories-section');
            let scrollTriger = category.offset().top - $('.header').height() + category.height();
            let mobilePadding = 0;
         
    
            if($(window).width() < 991) {
                $('.hero').css('margin-bottom', 25);
                mobilePadding = 25;
            }   
            
            if(scrollTriger < $(window).scrollTop() - mobilePadding) {
                category.addClass('sticky');
            }
            else {
                category.removeClass('sticky')
            }
            
            $(window).on( "scroll", function() {   
                
                if(scrollTriger < $(window).scrollTop() - mobilePadding) {
                    category.addClass('sticky');
                }
                else {
                    category.removeClass('sticky')
                }
                 
                if($(window).width() > 991) {
                    category.css('height', $('.categories-list').height());
    
                    if(scrollTriger < $(window).scrollTop()) {
                        $('.categories-list').css('top', $('.header').height())
                    }
                }
    
                else {
                    if(category.hasClass('sticky')) {
                        $('.block').css('height', category.height());
                    }
                    else {
                        $('.block').css('height', 0);
                    }
                    category.css('top', $('.header').height())
                }
            })
            
            $('.show-categories-list').on('click', function () {
                $(this).next().slideToggle({
                    duration: 300,
                });
            });
        }
    }
    categorySticky();

    $( window ).on( "resize", function() {
        categorySticky();
    } );
})