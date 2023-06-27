$(document).ready(function() {
    // открытие и закрытие модальных окон

    $('.open-modal--js').on('click', function() {
        $('.overlay').fadeIn();
        $(`[data-modal=${$(this).data('modal-to-open')}`).fadeIn();
    });

    $('.close-modal--js').on('click', function() {
        $('.overlay').fadeOut();
        $('.modal--js').fadeOut();
    });
});
