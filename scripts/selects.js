//Логика работы всех селектов

$(document).ready(function () {
    let countOfChecks = 0;

    $(document).on('click', function(e){

        if(!$('.select--js')) //проверка на наличие селекта
        return false;

        // если кликаем мимо - закрываем все селекты:
        if( $('.select--js').has(e.target).length === 0){
            $('.select--js').removeClass('open');
            $('.options--js').slideUp(500);
        }
        //  если кликаем по заголовку селекта: 
        else if ($('.select-title--js').is(e.target) || $('.select-title--js label').is(e.target)){
            e.preventDefault();
            e.stopPropagation(); //убираем всплытие клика
            // если он закрыт - закрываем другие селекты и открываем этот:
            if(!$(e.target).closest('.select--js').hasClass('open')) {
                $('.select--js').removeClass('open');
                $('.options--js').slideUp(500);
                $(e.target).closest('.select--js').addClass('open');
                $(e.target).closest('.select--js').find('.options--js').slideDown(500);
            }
            // если открыт - закрываем:
            else {
                $(e.target).closest('.select--js').removeClass('open');
                $(e.target).closest('.select--js').find('.options--js').slideUp(500);
            }
        }
        //если кликаем по элементу выпадающего списка с чекбоксами:
        else if($('.options--js .checkbox_wrapper').is(e.target)||
                $('.options--js .checkbox_wrapper label').is(e.target)||
                $('.options--js .checkbox_wrapper span').is(e.target)){

                // подсчитываем количество выбраных пунктов и выводим их в заголовок c с помощью функции getCheck(e, counnt):             
                setTimeout(getCheck,50, e.target, countOfChecks);//без задержки не отлавливает только что выбранный чекбокс
        }
        //если кликаем по элементу выпадающего списка без чекбоксов:
        else if($('.options--js label').is(e.target)) {
            $(e.target).closest('.select--js').find('.select-title--js label').css('color','#323232');//меняем цвет заголовка
            $(e.target).closest('.select--js').find('.select-title--js label').text($(e.target).text());//выводим в него выбранный пункт
            $(e.target).closest('.select--js').removeClass('open');
            $(e.target).closest('.select--js').find('.options--js').slideUp(500);//закрываем селект
        }
    })

    //функция для подсчета выбранных чекбоксов и записи их в заголовок селекта :
    function getCheck(e, counnt){
        counnt = $(e).closest('.options--js').find('input:checked').length;
        if(counnt){
            $(e).closest('.select--js').find('.select-title--js label').css('color','#323232');//меняем цвет заголовка
            $(e).closest('.select--js').find('.select-title--js label').text(
                $(e).closest('.select--js').find('.select-title--js input').attr('placeholder') +': ('+counnt+')');
        }
        else{
            $(e).closest('.select--js').find('.select-title--js label').css('color','#808080');//меняем цвет заголовка на дефолтный
            $(e).closest('.select--js').find('.select-title--js label').text($(e).closest('.select--js').find('.select-title--js input').attr('placeholder')); 
        }

    }
})