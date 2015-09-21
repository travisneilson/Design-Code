$(function() {

  setTimeout(gallerySize, 300);
  galleryChange();
});



function gallerySize() {

  $('.gallery').each(function() {
    var $this = $(this);
    configHeight($this);    
  });  
}



function configHeight(e) {
  var height = e.find('.current').height();
  e.css('height', height);
}

function galleryChange() {

  $('.gallery').on('click', '.next',function() {
    var $gallery = $(this).parents('.gallery'),
        $next = $gallery.find('.next'),
        $current = $gallery.find('.current'),
        $counter = $gallery.next('.gallery-title').find('.counter'),
        counterNum = parseInt($counter.html());
    
    $current.removeClass('current');
    $next.removeClass('next').addClass('current');
    
    if ($next.prev('.gallery-item').length === 1) {
      var upNext = $next.prev('.gallery-item'),
          upNextSrc = upNext.data('src');
        
        
    } else {
      var upNext = $next.siblings('.gallery-item').last(),
          upNextSrc = upNext.data('src');
    }
    
    upNext.addClass('next');
    upNext.attr('src', upNextSrc);
    
    if (counterNum === $gallery.find('.gallery-item').length) {
      $counter.html('1');
    } else {
      $counter.html(counterNum + 1);
    }
    
    gallerySize();
    
  });
  
}