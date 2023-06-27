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
