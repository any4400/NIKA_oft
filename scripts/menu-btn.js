$(document).ready(function () {
  
  // открытие меню по клику на бургер
  // и закрытие по крестику

  $('.menu-btn--js').on('click', function() {
    $('.mobile-menu--js').toggleClass('active');
    if (!$('.mobile-menu--js').hasClass('active')) {
      $('.mobile-menu_wrapper--js').css({'transform': 'translateX(0)'});
      translateValue = 0;
    }
  });
});
