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



  