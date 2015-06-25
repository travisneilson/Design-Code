$(window).scroll(function(){

  var wScroll = $(window).scrollTop();

  $('.video-strip').css('background-position', 'center -'+ wScroll +'px');

});
