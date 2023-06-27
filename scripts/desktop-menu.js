

// Открытие декстоп меню

// Элемент с атрибутом [data-desktop-menu] слушает наведение мыши и открывается элемент с классом соответствующим значению атрибута, кнопке добавляется класс "open"

$(document).on('mouseenter', '.desktop-menu-elem--js', function(){

  if (!$(this).hasClass('open')) {
      $('.desktop-menu_additional--js').stop().slideUp();
      $('.desktop-menu--js .desktop-menu-elem--js').removeClass('open');
      $(this).addClass('open'); 
  }
  
  $(`.${$(this).attr('data-desktop-menu')}`).stop().slideDown(); 

});


//Если мышь ушла с меню - всё закрывается , класс убирается
$(document).on('mouseleave', '.desktop-menu--js', function(){
  $('.desktop-menu_additional--js').stop().slideUp();
  $('.desktop-menu--js').stop().slideUp();
  $('button[data-desktop-menu]').removeClass('open');
});

