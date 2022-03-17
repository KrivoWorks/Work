$(document).ready(function() {
    
    $('ul.product__tabs').on('click', 'li:not(.product__tab_active)', function() {
        $(this)
        .addClass('product__tab_active').siblings().removeClass('product__tab_active')
        .closest('div.container').find('div.product__content').removeClass('product__content_active').eq($(this).index()).addClass('product__content_active');
    });

    //Rehau
    $('ul.rehau__tabs').on('click', 'li:not(.rehau__tab_active)', function() {
        $(this)
        .addClass('rehau__tab_active').siblings().removeClass('rehau__tab_active')
        .closest('div.rehau').find('div.rehau__descr').removeClass('rehau__descr_active').eq($(this).index()).addClass('rehau__descr_active');
    });

    //Grunder
    $('ul.grunder__tabs').on('click', 'li:not(.grunder__tab_active)', function() {
        $(this)
        .addClass('grunder__tab_active').siblings().removeClass('grunder__tab_active')
        .closest('div.grunder').find('div.grunder__descr').removeClass('grunder__descr_active').eq($(this).index()).addClass('grunder__descr_active');
    });

    //Richmont
    $('ul.richmont__tabs').on('click', 'li:not(.richmont__tab_active)', function() {
        $(this)
        .addClass('richmont__tab_active').siblings().removeClass('richmont__tab_active')
        .closest('div.richmont').find('div.richmont__descr').removeClass('richmont__descr_active').eq($(this).index()).addClass('richmont__descr_active');
    });

    $('.accessories__inner').slick({
        infinite: true,
        dots: true,
        speed: 100, // скорость переключения слайда в милисекундах
        // adaptiveHeight: true, высота подстраивается под высоту слайда
        autoplay: true,
        autoplaySpeed: 2000,
        // fade: true, - прояление картинки
        // cssEase: 'linear' - прояление картинки равномерное
        arrows: false,
    });

});