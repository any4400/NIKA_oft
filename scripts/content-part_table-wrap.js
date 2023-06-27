 
/*  
Скрипт оборачивает таблицы контентной части в контейнер, что бы они могли скролиться при переполнении
*/
$(document).ready(function () {
    $( ".content-part table" ).wrap( "<div class='content-part_table-wrap'></div>" );
  });
  