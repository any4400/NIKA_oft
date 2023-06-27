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