
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: $('.channel-control_btn--js.active').data('channelVideoId'),
    playerVars: { 'autoplay': 0},
  });
}

  $(document).on('click', '.channel-control_btn--js', function(){

    if (!$(this).hasClass('active')) {
        $('.channel-control_btn--js').removeClass('active');
        $('.channel-video--js img').css({'display': 'block'});
        player.cueVideoById($(this).data('channelVideoId')); 
        $('.channel-video--js img').attr('src', $(this).data('channelImgSrc'));
        $(this).addClass('active');
      }
  
  }); 
  $(document).on('click', '.channel-video--js img', function(){
    $('.channel-video--js img').fadeOut(300);
        player.playVideo();
  }); 
