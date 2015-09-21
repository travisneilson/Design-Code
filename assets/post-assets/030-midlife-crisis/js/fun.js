//jQuery.noConflict();
jQuery(document).ready(function() {
	
	slides();
	
});



function slides() {

  $('.trigger').click(function() {
    var $this = $(this),
        $slider = $this.parent().parent();
        
        if ($slider.hasClass('closed')) {
          console.log('HAS CLOSED');
          $slider.removeClass('closed');
          $slider.prevAll().removeClass('closed');
          $slider.nextAll().addClass('closed');
          $slider.addClass('current').siblings().removeClass('current');
        } else {
          console.log('HAS NO CLOSED');
        //  $slider.addClass('closed');
          $slider.prevAll().removeClass('closed');
          $slider.nextAll().addClass('closed');
        }
        
  });

}