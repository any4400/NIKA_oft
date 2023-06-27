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