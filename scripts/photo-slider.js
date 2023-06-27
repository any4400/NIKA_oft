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