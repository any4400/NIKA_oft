
/*  
Разворачивает скрытый блок, 
Слушает кнопку "показаьб ещё"
Находит ближайший блок .show-more_text-block--js и его содержимое
Если блок открыть то сворачивает, если закрыт то разворачивает
*/

$(document).on('click', '.show-more_text-btn--js', function(){  

  let showMoreBlock =  $(this).parents('.show-more_text-wrap--js').find('.show-more_text-block--js');
  let showMoreText = showMoreBlock.find('.show-more_text-text--js');

  if ($(showMoreBlock).hasClass('open')) {

    $(showMoreBlock).animate({ maxHeight: showMoreBlock.attr('data-minheight')}, 500);

    if (showMoreBlock.data('display') == '-webkit-box'){      
      setTimeout( function()  { showMoreBlock.css("display", '-webkit-box') }, 500);
    }

  } else {

    showMoreBlock.attr('data-minheight', showMoreBlock.height());

    if (showMoreBlock.css('display') == '-webkit-box'){
      showMoreBlock.attr('data-display', '-webkit-box');
      showMoreBlock.css("display", 'block') 
    }

    $(showMoreBlock).animate({ maxHeight: showMoreText.height()}, 500);
    
  }

  showMoreBlock.toggleClass('open');
  $(this).toggleClass('active');

});
