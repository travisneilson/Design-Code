$(window).scroll(function() {
  windowScroll = $(this).scrollTop();
    $('body').css({
      'background-position' : 'center ' + (-windowScroll/2)+"px"
    });
});



  
