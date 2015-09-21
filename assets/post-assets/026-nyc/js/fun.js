$(document).ready(function() {
  
  slidingTitle();
  sights();
  photos();
  statTags();
  routes();
  
});


$(window).scroll(function() {

    slidingTitle();
    photoDays();
    statDrop();
    
});


function slidingTitle() {
  windowScroll = $(this).scrollTop();
  $('header h2').css({
    'margin-top' : (windowScroll/2)+"px"
  });
  $('header').css({
    'background-position' : 'center ' + (-windowScroll/8)+"px"
  });
}


function sights() {
  $('.sight').hover(function() {
    var $this = $(this).attr('class').slice(6);
    $('.stat-desc.default').hide();
    $('.stat-desc.' + $this).show();
  }, function() {
    $('.stat-desc').hide();
    $('.stat-desc.default').show();
  });
}


function photos() {
  $('.photo-thumbs div').hover(function() {
    var $this = $(this),
        index = $this.index();
    $('.photo-conveyor .belt').css('margin-left', '-' + index * 440 + 'px');
    $this.addClass('seenit');
  });
}


function photoDays() {
  windowScroll = $(this).scrollTop();
  if (windowScroll > 1680) $('.bar-graph').addClass('go');
}


function statTags() {
  $('.point').hover(function() {
    var spanWidth = $(this).children('span').width() + 50;
    $('.point').css('width', '10px');
    $(this).css('width', spanWidth + 'px');
  });
}


function statDrop() {
  var headerHeight = $('header').height() - 350
    , windowScroll = $(this).scrollTop()
    ;
  if ( windowScroll > headerHeight) {
    $('.digits').each(function(i) {
    	setTimeout(function() {
    		$('.digits:eq('+i+')').addClass('down'); 
    	}, 300 * (i + 1))
    });
  }
}


function routes() {
  $('.route').hover(function() {
    $('.route').removeClass('active');
    $(this).addClass('active');
  });
}







