$(function() {
  
  $('.trigger').hover(function() {
    
    var $this = $(this),
        term = $this.data('term');
    
    $('.' + term).addClass('grown');
    $('.headline').fadeOut(200);
    
  }, function() {
    
    $('.grower').removeClass('grown');
    $('.headline').fadeIn(200);
  });
  
  $('.comments-link').click(function() {
    var $this = $(this);
    
    if ($this.hasClass('open')) {
      $this.removeClass('open').text('Read / Post Comments');
      $('.comments-wrap').hide(200);
    }
    
    else {
      $this.addClass('open').text('Close Comments');
      $('.comments-wrap').show(200);
    }
    
    return false;
  });
  
  
});