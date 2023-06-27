 
/*  
Скрипт аккордеона, 
слушает нажатие на блок '.accordion--js', 
выбирает целевой элемент ".accordion-elem--js", и 
если он закрыт, то закрывает открытый, находит индекс целевого и откравает его содержимое '.accordion-elem_content--js', переворачивая стрелку '.accordion-elem-control--js', 
а если открыт то просто закрывает его.
*/

 $(document).on('click', '.accordion--js', function(e){  
   
   let ind = $(e.target).closest(".accordion-elem--js").index();

   let accordContent = $(this).find('.accordion-elem_content--js');
   let accordControl = $(this).find('.accordion-elem-control--js');

   if (!$(accordControl[ind]).hasClass('accordion-elem-open--js')){
      accordContent.slideUp(500);
      accordControl.removeClass('accordion-elem-open--js');
   }

   $(accordContent[ind]).slideToggle(500);
   $(accordControl[ind]).toggleClass('accordion-elem-open--js');

 });

$(document).ready(function () {

    let swiper = new Swiper(".achievements_slider", {
      loop: true,
      direction: 'horizontal',
      height: 0,
      centeredSlides: true,
      grabCursor: true,
      centerInsufficientSlides: true,

      pagination: {
      el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
})


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

  

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: $('.channel-control_btn--js.active').data('channelVideoId'),
    playerVars: { 'autoplay': 0},
  });
}

  $(document).on('click', '.channel-control_btn--js', function(){

    if (!$(this).hasClass('active')) {
        $('.channel-control_btn--js').removeClass('active');
        $('.channel-video--js img').css({'display': 'block'});
        player.cueVideoById($(this).data('channelVideoId')); 
        $('.channel-video--js img').attr('src', $(this).data('channelImgSrc'));
        $(this).addClass('active');
      }
  
  }); 
  $(document).on('click', '.channel-video--js img', function(){
    $('.channel-video--js img').fadeOut(300);
        player.playVideo();
  }); 

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

$(document).ready(function () {

  // закрытие уведомления при клике на крестик

  $('.notification--js').find('.close-btn--js').on('click', function () {
    $(this).closest('.notification--js').slideUp();
  });
});

 
/*  
Скрипт оборачивает таблицы контентной части в контейнер, что бы они могли скролиться при переполнении
*/
$(document).ready(function () {
    $( ".content-part table" ).wrap( "<div class='content-part_table-wrap'></div>" );
  });
  


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


$(document).ready(function () {

    let swiper = new Swiper(".discount-promo_slider", {
      
      direction: 'horizontal',
      height: 0,
      slidesPerView: 'auto',
      spaceBetween: 16,
      grabCursor: true,
      centerInsufficientSlides: true,
      pagination: {
      el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    $('.discount-promo_slider .swiper-wrapper').append('<div class="swiper-slide stub-blank"></div>');
  });


$(document).ready(function () {

  // горизонтальный скролл вкладок для десктопа

  $('.spacer .tabs').each(function () {
    if ($(this)[0].offsetWidth < $(this)[0].scrollWidth) {
      $(this).addClass('overflow');
    }
  });

  let mouseDown = false;
  let startX, scrollLeft;

  const startDragging = e => {
    mouseDown = true;
    startX = e.pageX - e.target.offsetLeft;
    scrollLeft = e.target.scrollLeft;
  };

  const stopDragging = () => {
    mouseDown = false;
  };

  $('.spacer .tabs.overflow').on('mousemove', function (e) {
    e.preventDefault();
    if (!mouseDown) return;

    const x = e.pageX - e.target.offsetLeft;
    const scroll = x - startX;

    e.target.scrollLeft = scrollLeft - scroll;
  });

  $('.spacer .tabs.overflow').on('mousedown', startDragging);
  $('.spacer .tabs.overflow').on('mouseup mouseleave', stopDragging);
});

$(document).ready(function () {
  
    let swiperEq = new Swiper(".mySwiperEquipment--js", {

        loop: false,
        direction: 'horizontal',
        spaceBetween: 20,
        height: 0,
        effect: 'fade', 
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.swiper-pagination',
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

    });
  });
function getRemBase (windowWidth) {
    let remBase = windowWidth * 0.01;

    if (windowWidth < 468) {
        remBase *= 3.125;
    } else if (windowWidth < 668) {
        remBase *= 2.137;
    } else if (windowWidth < 1024) {
        remBase *= 1.497;
    } else if (windowWidth < 1500) {
        remBase *= 0.977;
    } else {
        remBase *= 0.667;
    }

    return remBase;
}

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

$(document).ready(function () {
    if(!$('.mobile-menu_wrapper--js')) //проверка на наличие меню
    return false; 


    let translateValue = $('.mobile-menu_wrapper--js').data().translate;
    let translateValueSting;
    
    $(document).on("click", ".mobile-menu_body--js li div, .mobile-submenu_body--js li div, .mobile-menu_back--js", function (e) {
    
        translateValue += ($(this).hasClass('mobile-menu_back--js') ? 100 : -100);
        translateValueSting = "translateX(" + translateValue + '%)';
        $('.mobile-menu_wrapper--js').css({ "transform": translateValueSting });
    
    });
})




 
/*  
Открывает фансибокс по клику на коллекцию с дата атрибутом ниже
*/
Fancybox.bind('[data-fancybox="education-specialist"]', {
});
Fancybox.bind('[data-fancybox="photo-gallery"]', {
});

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

$(document).ready(function () {
  
    let swiper = new Swiper(".mySwiper", {

        loop: true,
        direction: 'horizontal',
        spaceBetween: 20,
        height: 0,
        grabCursor: true,
        effect: 'fade', 
        fadeEffect: {
          crossFade: true
        },
  
        pagination: {
          el: '.swiper-pagination',
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 6000,
        }
    });
  });



  
$(document).ready(function () {

  if($(".partners_slider").find('.swiper-slide').length > 1) {
    let swiper = new Swiper(".partners_slider", {
  
      direction: 'horizontal',
      height: 0,
      // slidesPerView: 3.5,
      slidesPerView: 'auto',
      spaceBetween: 16,
      centerInsufficientSlides: true,
      grabCursor: true,
      pagination: {
      el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
            breakpoints:{
        668: {
          spaceBetween: 24,
        },
      }
      // breakpoints:{
      //   468: {
      //     slidesPerView: 5,
      //   },
      //   668: {
      //     slidesPerView: 4.5,
      //     spaceBetween: 24,
      //   },
      //   1024: {
      //     slidesPerView: 'auto',
      //   },
      // }
    });
    $('.partners_slider .swiper-wrapper').append('<div class="swiper-slide stub-blank"></div>');
  }
  else {
    $(".partners_slider").find('.swiper-button-prev, .swiper-button-next').css('display','none');
  }
  });
$(document).ready(function () {

  // маска на поля для телефонных номеров

  const maskOptions = {
    mask: '+{7} (000) 000-00-00',
  };

  const setPhoneCode = input => {
    $(input).val('+7 (');
    $(input)[0].dispatchEvent(new Event("input", { bubbles: true }));
  };

  $(document).on('focus', '.phone-input--js', function () {
    IMask($(this)[0], maskOptions);
    if (!$(this).val().length) {
      setPhoneCode($(this));
    }
  });

  $(document).on('input', '.phone-input--js', function () {
    if ($(this).val().length < 4) {
      setPhoneCode($(this));
    }
  });
});

$(document).ready(function () {

    let swiper = new Swiper(".photo_slider", {
  
      direction: 'horizontal',
      height: 0,
      slidesPerView: 'auto',
      spaceBetween: 8,
      pagination: {
      el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      breakpoints:{
        668:{
          spaceBetween: 16,
        }, 
      }
    });


    $('.photo_slider .swiper-wrapper').append('<div class="swiper-slide photo-slide_stub-blank"></div>');
  });
$(document).ready(function () {

  if($(".popular-services_slider").find('.swiper-slide').length > 1) {

    let swiper = new Swiper(".popular-services_slider", {
  
      direction: 'horizontal',
      height: 0,
      slidesPerView: 'auto',
      spaceBetween: 16,
      grabCursor: true,
      centerInsufficientSlides: true,
      pagination: {
      el: '.swiper-pagination',
      },


      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    $('.popular-services_slider .swiper-wrapper').append('<div class="swiper-slide stub-blank"></div>');
  }
  else {
    $(".popular-services_slider").find('.swiper-button-prev, .swiper-button-next').css('display','none');
  }
  });
 
/*  
Открывает, закрывает выбранную клинику в блоке "НУЖНА ЛИ ПОДГОТОВКА"
*/

$(document).on('click', '.clinic-title--js', function(){  
     $(this).parents('.choosing-clinic_elem--js').find('.clinic-details--js').slideToggle();
  });

$(document).ready(function () {

    let swiper = new Swiper(".reviews_slider", {
      spaceBetween: "16",
      loop: true,
      direction: 'horizontal',
      height: 0,
      slidesPerView: 1.1,
      initialSlide: 1,
      grabCursor: true,
      centerInsufficientSlides: true,
      pagination: {
      el: '.swiper-pagination',
      },


      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints:{

        468:{
            slidesPerView: 1.8,
        }, 
        1024:{
            slidesPerView: 1.7,
            centeredSlides: true,
            initialSlide: 0,
        },
        1500: {
            slidesPerView: 2.5, 
            initialSlide: 0,
            centeredSlides: true,
            
        }
      }
    });
  });

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
// Показ заданного количества блоков родительского блока + раскрытие всех элементов по кнопке
$(document).ready(function () {

    let countOfElements = 0;// количество изначально видимых элементов 
    let heightOGap = 0; // высота отступа между элементами
    let heightOfBodyFull = 0; // иницилизируем полную высоту родительского блока
    let heightOfBodyVissible = 0; // иницилизируем видимую высоту родительского блока


    $('.show-all-body--js').each( function(n){

        countOfElements = $('.show-all-body--js').attr('data-visible'); // количество изначально видимых элементов хранится в атрибуте родителя

// Если количество видимых элементов больше либо равно общему кол-ву - скрываем кнопку "Показать все":

        if( $(this).children().length <= countOfElements) {
            $(this).parent().find('.show-all-btn--js').css("display","none");
            return false;
        }
        
        else {
            heightOGap = parseInt($(this).css('gap'),10);

                // Высчитываем полную высоту родительского блока и видимую высоту родительского блока:

            $(this).children().each( function(i){

                heightOfBodyFull += parseInt($(this).css('height'),10) + heightOGap;

                if (i == countOfElements - 1) {
                    heightOfBodyVissible = heightOfBodyFull  + 'px';
                }
            });
        
            heightOfBodyFull = heightOfBodyFull + 'px'; 

            $(this).css('height', heightOfBodyVissible); //задаем родительскому блоку высчитанную видимую высоту
        }


            //По кнопке задаем родительскому блоку полную или частичную высоту:

            $(document).on('click', '.show-all-btn--js', function(){
                if (!$(this).parent().find('.show-all-body--js').hasClass('open')) {

                    $(this).parent().find('.show-all-body--js').animate({ height: heightOfBodyFull}, 500);
                    $(this).parent().find('.show-all-body--js').addClass('open');
                    $(this).toggleClass('active');
                }
                else {

                    $(this).parent().find('.show-all-body--js').animate({ height: heightOfBodyVissible}, 500);
                    $(this).parent().find('.show-all-body--js').removeClass('open');
                    $(this).toggleClass('active');
                }
                })
    })

})


 
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

$(document).ready(function () {

  if($(".specialists_slider").find('.swiper-slide').length > 1) {
    let swiper = new Swiper(".specialists_slider", {
  
      direction: 'horizontal',
      height: 0,
      spaceBetween: 16,
      centeredSlides: true,
      grabCursor: true,
      centerInsufficientSlides: true,
      pagination: {
      el: '.swiper-pagination',
      },


      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints:{
        468: {
          centeredSlides:false,
          slidesPerView: 1.6,
        },
        668: {
          centeredSlides:false,
          slidesPerView: 2.3,
        },
        1024: {
          centeredSlides:false,
          slidesPerView: 3.5,
        },
        1500: {
          centeredSlides:false,
          slidesPerView: 5,
        }
      }
    });

    $('.specialists_slider .swiper-wrapper').append('<div class="swiper-slide specialists_slider_stub-blank"></div>');
  }
  else {
    $(".specialists_slider").find('.swiper-button-prev, .swiper-button-next').css('display','none');
  }
  });


/*
Скрипт блока с собачкой
 */

$(document).ready(function () {

    //Перемещение круга за курсором на декстопах
    $('.vision-sees_wrap--js').on("mousemove", function(e) {
    
        let radius = $('.vision-sees_view--js').height() / 2 ;
    
        $('.vision-sees_view--js').css({
            top: e.offsetY - radius, 
            left: e.offsetX - radius
        });
        
        $('.vision-normal_img').css({
            top: -(e.offsetY - radius), 
            left: -(e.offsetX - radius)
        });
        
    });
    
    
    //Перетаскивание круга на мобилках
    $('.vision-sees_wrap--js').on("touchmove", function(e) {
        e.preventDefault()
    
        let radius = $('.vision-sees_view--js').height() / 2 ;
        let touch = e.touches[0];
    
        let offset = $('.vision-sees_wrap--js').offset();
        let top = offset.top;
        let left = offset.left;
        
       $('.vision-sees_view--js').css({
            top: touch.pageY - top - radius, 
            left: touch.pageX - left - radius
        });
        
        $('.vision-normal_img').css({
            top: -(touch.pageY - top - radius), 
            left: -(touch.pageX - left - radius)
        });
        
    });
    
    //Смена активного класса у списка отклонений и изображения в блоке
    $(document).on('click', '.vision-choose_elem--js', function(){
    
        if (!$(this).hasClass('vision_btn-active--js')) {
            $('.vision-choose_elem--js').removeClass('vision_btn-active--js');
            $('.vision-anomal--js').attr('src', $(this).data('srcImg'));
            $('.vision-normal--js').attr('src', $(this).data('srcImgHealthy'));
            $(this).addClass('vision_btn-active--js');
        }
     });
    
    

  });


