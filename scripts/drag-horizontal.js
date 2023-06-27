$(document).ready(function () {

  // горизонтальный скролл вкладок для десктопа

  $('.spacer .tabs').each(function () {
    if ($(this)[0].offsetWidth < $(this)[0].scrollWidth) {
      $(this).addClass('overflow');
    }
  });

  let mouseDown = false;
  let startX, scrollLeft;

  const startDragging = e => {
    mouseDown = true;
    startX = e.pageX - e.target.offsetLeft;
    scrollLeft = e.target.scrollLeft;
  };

  const stopDragging = () => {
    mouseDown = false;
  };

  $('.spacer .tabs.overflow').on('mousemove', function (e) {
    e.preventDefault();
    if (!mouseDown) return;

    const x = e.pageX - e.target.offsetLeft;
    const scroll = x - startX;

    e.target.scrollLeft = scrollLeft - scroll;
  });

  $('.spacer .tabs.overflow').on('mousedown', startDragging);
  $('.spacer .tabs.overflow').on('mouseup mouseleave', stopDragging);
});
