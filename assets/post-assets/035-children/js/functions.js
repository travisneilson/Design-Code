$(function() {
  
  $('.tile').bind('touchstart', function() {
          $(this).addClass('touched');
  });
  
  $('.tile').bind('touchend', function() {
          $(this).removeClass('touched');
  });
  
});

// .touching