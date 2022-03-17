$(document).ready(function() {
    
    $('ul.product__tabs').on('click', 'li:not(.product__tab_active)', function() {
        $(this)
        .addClass('product__tab_active').siblings().removeClass('product__tab_active')
        .closest('section.product').find('div.product__content').removeClass('product__content_active').eq($(this).index()).addClass('product__content_active');
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

    //Slider
    $('.accessories__carousel').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1700,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        touchMove: false,
        accessibility: false,
    });

    //Modal
    $('[data-modal=application]').on('click', function() {
        $('.overlay, #application').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #application, #services, #thanks').fadeOut();
    });
    $('.button__service').on('click', function() {
        $('.overlay, #services').fadeIn();
    });
});