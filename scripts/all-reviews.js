

/*  
Скрипт смены отображения блоков отзывов на странице отзывов, 
слушает нажатие на '.all-reviews_control--js a', и 
если ссылка не имеет активный класс (закрыта), то берёт значение её дата атрибута all-reviews-btn, убирает активный класс у второй ссылки, закрываетблок с классом равным дата атрибуту второй ссылке, добавляет активны йкласс целевой ссылке и открывает блок с классом равным её дата атрибуту с задержкой, что бы проригнаралась анимация
*/

$(document).on('click', '.all-reviews_control--js a', function(e){  

    if (!$(this).hasClass('active')) {
        
        let classActiv = $('.all-reviews_control--js .active').data('all-reviews-btn');
        $('.all-reviews_control--js .active').removeClass('active');
        $( `.all-reviews_content div[data-all-reviews-block='${classActiv}']`).fadeOut(300);

        $(this).addClass('active');
        classActiv = $('.all-reviews_control--js .active').data('all-reviews-btn');
        $( `.all-reviews_content div[data-all-reviews-block='${classActiv}']`).delay(300).fadeIn(300) ;

    }
  });

  