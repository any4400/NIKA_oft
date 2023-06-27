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



