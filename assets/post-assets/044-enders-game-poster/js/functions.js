$(function() {

  $('.e-thumb').click(function() {
    var $this = $(this),
        imgUrl = $this.css('background-image'),
        $template = '<div class="overlay" style="background-image:'+imgUrl+'"></div>';
    
    $('body').append($template);
    
  });
  
  $('body').on('click', '.overlay', function() {
    $(this).remove();
  });
  
});

