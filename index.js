//use jquery

$(document).ready(function() {
    //when user clicks into .mc-field-group > input, move .mc-field-group > label up 20px (starts at top: 5px)
    $('#testSlider').slick({
        arrows: true,
        prevArrow: '<button class="slick-prev"><img src="images/arrowl.png" alt="Previous"></button>',
        nextArrow: '<button class="slick-next"><img src="images/arrowr.png" alt="Next"></button>',
    });
    $('.mc-field-group > input').focus(function() {
        $(this).prev().css('top', '-5px');
        $(this).prev().css('font-size', '12px');
        $(this).prev().css('left', '85px');
    });
    //when leave, if input is empty, move label back down
    $('.mc-field-group > input').blur(function() {
        if ($(this).val() == '') {
            $(this).prev().css('top', '5px');
            $(this).prev().css('font-size', '14px');
            $(this).prev().css('left', '75px');
        }
    });
});