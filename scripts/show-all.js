// Показ заданного количества блоков родительского блока + раскрытие всех элементов по кнопке
$(document).ready(function () {

    let countOfElements = 0;// количество изначально видимых элементов 
    let heightOGap = 0; // высота отступа между элементами
    let heightOfBodyFull = 0; // иницилизируем полную высоту родительского блока
    let heightOfBodyVissible = 0; // иницилизируем видимую высоту родительского блока


    $('.show-all-body--js').each( function(n){

        countOfElements = $('.show-all-body--js').attr('data-visible'); // количество изначально видимых элементов хранится в атрибуте родителя

// Если количество видимых элементов больше либо равно общему кол-ву - скрываем кнопку "Показать все":

        if( $(this).children().length <= countOfElements) {
            $(this).parent().find('.show-all-btn--js').css("display","none");
            return false;
        }
        
        else {
            heightOGap = parseInt($(this).css('gap'),10);

                // Высчитываем полную высоту родительского блока и видимую высоту родительского блока:

            $(this).children().each( function(i){

                heightOfBodyFull += parseInt($(this).css('height'),10) + heightOGap;

                if (i == countOfElements - 1) {
                    heightOfBodyVissible = heightOfBodyFull  + 'px';
                }
            });
        
            heightOfBodyFull = heightOfBodyFull + 'px'; 

            $(this).css('height', heightOfBodyVissible); //задаем родительскому блоку высчитанную видимую высоту
        }


            //По кнопке задаем родительскому блоку полную или частичную высоту:

            $(document).on('click', '.show-all-btn--js', function(){
                if (!$(this).parent().find('.show-all-body--js').hasClass('open')) {

                    $(this).parent().find('.show-all-body--js').animate({ height: heightOfBodyFull}, 500);
                    $(this).parent().find('.show-all-body--js').addClass('open');
                    $(this).toggleClass('active');
                }
                else {

                    $(this).parent().find('.show-all-body--js').animate({ height: heightOfBodyVissible}, 500);
                    $(this).parent().find('.show-all-body--js').removeClass('open');
                    $(this).toggleClass('active');
                }
                })
    })

})

