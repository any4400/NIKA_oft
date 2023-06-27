 
/*  
Показать скрыть кнопку "показать ещё", 
Берёт высоту блока show-more_hidden-block--js, убирая лишниии знаки в конце (рх),
Берёт высоту вложенной в него скрытой части (если она не дисплей блок то на мгновение делает её таковой) для измерения её высоты,
Сравнивает результаты и если блок оболочка переполнен то показывает кнопку "показать ещё", 
Иначе скрывает её
*/

$(document).ready(function () {

  $('.show-more_hidden-block--js').each(function () {

    let hBlock = $(this).css("max-height").slice(0, -2);
    let hContent;

    if ($(this).css('display') == '-webkit-box') {
      $(this).css("display", 'block') 
      hContent = $(this).find('.show-more_hidden-text--js').height();
      $(this).css("display", '-webkit-box');
    } else {
      hContent = $(this).find('.show-more_hidden-text--js').height();
    }
    
    if (hContent < hBlock) {
      $(this).parents('.show-more_hidden-wrap--js').find('.show-more_hidden-btn--js').hide()
    } else {
    }  
    
  });
});