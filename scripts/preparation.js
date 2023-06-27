 
/*  
Открывает, закрывает выбранную клинику в блоке "НУЖНА ЛИ ПОДГОТОВКА"
*/

$(document).on('click', '.clinic-title--js', function(){  
     $(this).parents('.choosing-clinic_elem--js').find('.clinic-details--js').slideToggle();
  });
