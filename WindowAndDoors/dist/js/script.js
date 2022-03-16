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

});