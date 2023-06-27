 
/*  
Скрипт аккордеона, 
слушает нажатие на блок '.accordion--js', 
выбирает целевой элемент ".accordion-elem--js", и 
если он закрыт, то закрывает открытый, находит индекс целевого и откравает его содержимое '.accordion-elem_content--js', переворачивая стрелку '.accordion-elem-control--js', 
а если открыт то просто закрывает его.
*/

 $(document).on('click', '.accordion--js', function(e){  
   
   let ind = $(e.target).closest(".accordion-elem--js").index();

   let accordContent = $(this).find('.accordion-elem_content--js');
   let accordControl = $(this).find('.accordion-elem-control--js');

   if (!$(accordControl[ind]).hasClass('accordion-elem-open--js')){
      accordContent.slideUp(500);
      accordControl.removeClass('accordion-elem-open--js');
   }

   $(accordContent[ind]).slideToggle(500);
   $(accordControl[ind]).toggleClass('accordion-elem-open--js');

 });
