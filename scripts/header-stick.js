$(document).ready(function () {

  // закрепление хедера и плашки при скролле

  $(window).scroll(function () {
    const scrollTop = $(window).scrollTop();
    const headerHeight = $('.header--js').outerHeight() + ($('.spacer--js').outerHeight() || 0);

    if (scrollTop > headerHeight) {
      $('.fake-header--js').addClass('stick');
      $('.fake-spacer--js').css('top', Math.floor($('.fake-header--js').outerHeight()) + 'px');
      return;
    }

    $('.fake-header--js').removeClass('stick');
    $('.fake-spacer--js').css('top', '-200%');
  });
});
