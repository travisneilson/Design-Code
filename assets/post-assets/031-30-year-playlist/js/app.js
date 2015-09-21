$(function() {
  slide();
  sideNav();
  years();
  play();
  notes();
});


function slide() {
  
  //try to wire a keypress to a click.
  
  $('html').keydown(function(event){
  	
  	if (event.keyCode === 38) {
      $('.main-nav-item.prev').click();
        $('.instructions .key-prev i').addClass('pressed');
        setTimeout(function() {$('.instructions .key-prev i').removeClass('pressed')}, 100)
  	} else if (event.keyCode === 40) {
  	  $('.main-nav-item.next').click();
    	  $('.instructions .key-next i').addClass('pressed');
    	  setTimeout(function() {$('.instructions .key-next i').removeClass('pressed')}, 100)
  	} else if (event.keyCode === 79) {
  	  $('.current .album-meta-note-link').click();
  	    $('.instructions .key-open i').addClass('pressed');
  	    setTimeout(function() {$('.instructions .key-open i').removeClass('pressed')}, 100)
  	} else if (event.keyCode === 80) {
  	  $('.current .album-cover.not-playing').click();
        $('.instructions .key-play i').addClass('pressed');
        setTimeout(function() {$('.instructions .key-play i').removeClass('pressed')}, 100)
        
  	}
  });
  
  
  $('.next, .prev').click(function() {
    var $this = $(this),
        $curr = $('.current'),
        songLength = $('.song-wrap > section').length - 1,
        indexNum = $curr.index(),
        currBgPos = parseInt($('body').css('background-position').slice(3)),
        downBgPos = currBgPos + 5,
        upBgPos = currBgPos - 5;
        
     
    if($this.hasClass('next') && songLength > indexNum) {
      $curr.removeClass('current yet-to-see').addClass('seen');
      $curr.next().removeClass('yet-to-see seen').addClass('current');
      $('body').css('background-position', '0% '+downBgPos+'%');
      
      $('.side-nav li').removeClass('hovered').eq(indexNum+1).addClass('hovered');
    }
    
    if($this.hasClass('prev') && 0 < indexNum) {
      $curr.removeClass('current seen').addClass('yet-to-see');
      $curr.prev().removeClass('yet-to-see seen').addClass('current');
      $('body').css('background-position', '0% '+upBgPos+'%');
      
      $('.side-nav li').removeClass('hovered').eq(indexNum-1).addClass('hovered');
    }
    
    if (indexNum === 0) {
      setTimeout( function() {$('.main-nav-item, .instructions').removeClass('hidden')}, 800);
    }
    
    if ($this.hasClass('prev') && indexNum <= 1) {
      setTimeout( function() {$('.main-nav-item, .instructions').addClass('hidden');}, 800);
    }
    
    if ($this.hasClass('next') && songLength - 1 === indexNum) {
      setTimeout( function() {$('.main-nav-item.next, .instructions').addClass('hidden')}, 800);
    }
    
    if ($this.hasClass('prev') && songLength === indexNum) {
      setTimeout( function() {$('.main-nav-item.next, .instructions').removeClass('hidden')}, 800);
    }
        
    return false;
  });
}

function sideNav() {
  
  $('.side-nav li').click(function() {
    var $this = $(this),
        songLength = $('.song-wrap > section').length - 1,
        songRef = $this.data('song'),
        refIndex = $this.index(),
        $curr = $('.current'),
        currIndex = $curr.index(),
        currBgPos = parseInt($('body').css('background-position').slice(3)),
        downBgPos = currBgPos + 5,
        upBgPos = currBgPos - 5;
    
    $('.side-nav li').removeClass('hovered');
    $this.addClass('hovered');
    
    if (refIndex > currIndex) {
      $curr.removeClass('current yet-to-see').addClass('seen');
      $('.'+songRef).prevAll().removeClass('current yet-to-see').addClass('seen');
      $('.'+songRef).removeClass('yet-to-see seen').addClass('current');
      $('body').css('background-position', '0% '+downBgPos+'%');
      setTimeout( function() {$('.main-nav-item, .instructions').removeClass('hidden')}, 800);
      
      if (refIndex === 31) {
        setTimeout( function() {$('.main-nav-item.next, .instructions').addClass('hidden')}, 800); 
      }
    }
    
    if (refIndex < currIndex) {
      $curr.removeClass('current seen').addClass('yet-to-see');
      $('.'+songRef).nextAll().removeClass('current seen').addClass('yet-to-see');
      $('.'+songRef).removeClass('yet-to-see seen').addClass('current');
      $('body').css('background-position', '0% '+upBgPos+'%');
      
      if (refIndex === 0) {
        setTimeout( function() {$('.main-nav-item, .instructions').addClass('hidden')}, 800); 
      } else {
        setTimeout( function() {$('.main-nav-item, .instructions').removeClass('hidden')}, 800);
      }
    }
      
  });
  
}

function years() {

  $('.side-nav li').each(function() {
    var $this = $(this),
        refSong = $this.data('song'),
        year = $('.'+refSong).find('.album-note-year').text().slice(5),
        songTitle = $('.'+refSong).find('.album-meta-song').text(),
        artistTitle = $('.'+refSong).find('.album-meta-artist').text();
    
    if (refSong === "song0") {
      $this.find('span').text('START');
    } else if (refSong === "song31") {
      $this.find('span').text("FIN");
    } else {
      $this.find('span').text(artistTitle);
    }
  });

}

function play() {
  
   audios = []
   
     $('audio').each(function(){
        audios.push(this);
     });
     
     $('.album-cover.not-playing').click(function() {
         var i, 
             //audio = $(this).parents('.album-wrap').find('audio')[0],
             $this = $(this),
             $albumWrap = $this.parents('.album-wrap'),
             audio = $albumWrap.find('audio')[0],
             duration = $albumWrap.find('audio').data('duration'),
             $progress = $albumWrap.find('.progress');
                          
         for (i = 0; i < audios.length; i++){
         
             if (audios[i].paused === false){
                 audios[i].pause();
                 audios[i].currentTime = 0;
                 $progress.stop().css('width', '0%');
                 $this.removeClass('playing');
                 
             } else {
                 if (audios[i] === audio){
                     audio.play();
                     $this.addClass('playing');
                     $progress.animate({width: '100%'}, duration, 'linear');
                 }
             }
         }
     });
  
}


function notes() {

  $('.album-meta-note-link').click(function() {
    var $this = $(this),
        $albumWrap = $this.parents('.album-wrap'),
        $note = $albumWrap.find('.album-note');
    
    if($note.hasClass('open')) {
      $note.removeClass('open').slideUp(400);
      $this.removeClass('active');
      
    } else {
      $note.addClass('open').slideDown(400);
      $this.addClass('active');
    }
    
  });

}