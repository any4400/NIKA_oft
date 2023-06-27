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

