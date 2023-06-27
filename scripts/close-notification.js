$(document).ready(function () {

  // закрытие уведомления при клике на крестик

  $('.notification--js').find('.close-btn--js').on('click', function () {
    $(this).closest('.notification--js').slideUp();
  });
});
