

/*
Скрипт блока с собачкой
 */

$(document).ready(function () {

    //Перемещение круга за курсором на декстопах
    $('.vision-sees_wrap--js').on("mousemove", function(e) {
    
        let radius = $('.vision-sees_view--js').height() / 2 ;
    
        $('.vision-sees_view--js').css({
            top: e.offsetY - radius, 
            left: e.offsetX - radius
        });
        
        $('.vision-normal_img').css({
            top: -(e.offsetY - radius), 
            left: -(e.offsetX - radius)
        });
        
    });
    
    
    //Перетаскивание круга на мобилках
    $('.vision-sees_wrap--js').on("touchmove", function(e) {
        e.preventDefault()
    
        let radius = $('.vision-sees_view--js').height() / 2 ;
        let touch = e.touches[0];
    
        let offset = $('.vision-sees_wrap--js').offset();
        let top = offset.top;
        let left = offset.left;
        
       $('.vision-sees_view--js').css({
            top: touch.pageY - top - radius, 
            left: touch.pageX - left - radius
        });
        
        $('.vision-normal_img').css({
            top: -(touch.pageY - top - radius), 
            left: -(touch.pageX - left - radius)
        });
        
    });
    
    //Смена активного класса у списка отклонений и изображения в блоке
    $(document).on('click', '.vision-choose_elem--js', function(){
    
        if (!$(this).hasClass('vision_btn-active--js')) {
            $('.vision-choose_elem--js').removeClass('vision_btn-active--js');
            $('.vision-anomal--js').attr('src', $(this).data('srcImg'));
            $('.vision-normal--js').attr('src', $(this).data('srcImgHealthy'));
            $(this).addClass('vision_btn-active--js');
        }
     });
    
    

  });


