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