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