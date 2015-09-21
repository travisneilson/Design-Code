$(document).ready(function() {
  
  jQuery('.parallax-layer').parallax({
    mouseport: jQuery("#port"),
    yparallax: false
  });
  
  
  
  $('.dive-in').click( function() { $('.intro, .article-container').css('top', '-100%'); });
  
  $('#port a').click(function() {
  	var $this = $(this),
  		$slide = $this.data('slide'),
  		$move = $slide.slice(5) * 960 - 960;
  		
  	$('#port a').removeClass('active');
    $this.addClass('active'); 
    
    $('.belt').css('left', '-' + $move + 'px');
    $('.slide').removeClass('showing').filter('.' + $slide).addClass('showing');
    
    return false;
  });

});