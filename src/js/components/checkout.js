$(document).ready(function () {
    if( $('#show-form').length && $(window).width() < 991) {
        $('#show-form').on('click', function () {
            $('.checkout').toggleClass('active');

            $('.cart-section').slideToggle(300);
            $('.checkout-top').slideToggle({
                duration: 300,
                start: function() {
                    $(this).css('display','flex');
                }
            });
            $('.checkout-form').slideToggle(300);
        });
    }
})