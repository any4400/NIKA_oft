$(document).ready(function () {

  // появление крестика при вводе
  // и исчезновение при отсутствии текста

  const checkOnSearchCross = searchField => {
    searchField.find('.search-input--js').val() === '' ?
      searchField.removeClass('active') :
      searchField.addClass('active');
  };

  // дублирование введенного текста в поиске
  // у статичного и "липкого" хедера

  const checkOnHeaderSearch = searchField => {
    if (searchField.hasClass('header-search--js')) {
      const currentValue = searchField.find('.search-input--js').val();

      $('.header-search--js').each(function () {
        $(this).find('.search-input--js').val(currentValue);
        checkOnSearchCross($(this));
      });
    } else {
      checkOnSearchCross(searchField);
    }
  };

  // проверка на появление крестика при вводе

  $('.search--js').on('input', function () {
    checkOnHeaderSearch($(this));
  });

  // стирание текста при нажатии на крестик в поле поиска

  $('.search--js').find('.clear--js').on('click', function () {
    $(this).closest('.search-form--js').find('.search-input--js').val('');
    checkOnHeaderSearch($(this).closest('.search--js'));
  });
});
