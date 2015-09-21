$(function() {
  
  jamClick();
  helloAbout();
  
});// END.READY


$(window).scroll(function() {
  
  scrolly();

});




/*

  When you click a song...

--------------------------------*/


function jamClick() {
  $('.jam-unit').click(function() {

    var $this = $(this),
        audio = $this.find('audio')[0],
        duration = $this.find('audio').data('duration'),
        $progress = $this.find('.progress'),
        totalMeasures = Number( $this.find('audio').data('measures') ),
        bpm = Number($this.find('.bpm').html()),
        pulse = (60 / bpm)*1000; 
        
 
    if (audio.paused === false) {
      audio.pause();
      audio.currentTime = 0;
      $progress.stop().css('width', '0%');
      $this.removeClass('playing');
      clearInterval(intervals);
    }
    
    else {      
      var currMeasure = 1;
      
      audio.play();
      $this.addClass('playing');
      measureUp();
      intervals = setInterval(function() {measureUp()}, pulse); 
      
      progressAnimation();        
      function progressAnimation() {
        $progress.animate({width: '100%'}, duration, 'linear',
        function() {
          $progress.stop().css('width', '0%');
          progressAnimation();  
        });
      }
    } // END if else
    

    function measureUp() {
      $this.find('.measure').html(currMeasure);
      
      if (currMeasure === totalMeasures) { currMeasure = 1; }
      else { currMeasure++; }
      
      $this.find('.measure').addClass('pulse')
      .parent().siblings('.block').find('.name').addClass('pulse');
      
      setTimeout(function() {
        $this.find('.measure').removeClass('pulse')
        .parent().siblings('.block').find('.name').removeClass('pulse')
      }, pulse-100);
      
    } //END.measureUp
      

  }); // END.unit.click 

}


/*

  Fixed scroll header

--------------------------------*/

function scrolly() {
  var top = $('body').scrollTop();
  if (top > 380) {
    $('body').addClass('fixed-header');
  }
  else {
    if($('body').hasClass('fixed-header')) {
      $('body').removeClass('fixed-header'); }
  }
}




/*

  About Reveal & Hide

--------------------------------*/

function helloAbout() {

  $('.header-spinner-wrap').click(function() {
    $('.about-wrap').addClass('open');
  });
  
  $('.about-wrap').click(function() {
    $(this).removeClass('open');
  });

}








