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