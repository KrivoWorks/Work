$(document).ready(function() {
    
    $('ul.product-brand__tabs').on('click', 'li:not(.product-brand__tab_active)', function() {
        // 'li:not нажимаем на элемент у которого нет класса .catalog__tab_active
        $(this) // this ссылается на тот элемент, на который мы нажали
        .addClass('product-brand__tab_active').siblings().removeClass('product-brand__tab_active')
        // .addClass - добавить класс табу на который нажали
        // .siblings().removeClass - удалить класс у всех соседних элементов если он присутствует
        .closest('div.container').find('div.main__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        // .closest - найти ближайщий элемент
        // .find - внутри найти блок с классом .catalog__content
        // .removeClass - у элементов которые нашли - удаляем класс .catalog__content_active
        // .eq($(this).index()) - запоминаем номер таба на который нажали, например 2
        // .addClass - определённому контенту под определённым номером добавим класс активности

        // табы можно создать и с помощью bootstrap
    });
});