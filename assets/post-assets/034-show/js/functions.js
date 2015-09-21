$(function() {

  	$('.triggers li').hover(function() {
  		var trig = $(this).attr('class').slice(7);
  		if (trig == 1 || trig == 2) { $('.loupe' + trig).show(150); }
  		if (trig == 3) { $('.second-loupe').css({marginLeft: '-50px', marginTop: '-50px'}).show(150); }
  		if (trig == 4) { $('.second-loupe').css({marginLeft: '-50px', marginTop: '0px'}).show(150); }
  		if (trig == 5) { $('.second-loupe').css({marginLeft: '0px', marginTop: '-50px'}).show(150); }
  		if (trig == 6) { $('.second-loupe').css({marginLeft: '-50px', marginTop: '-100px'}).show(150); }
  		if (trig == 7) { $('.second-loupe').css({marginLeft: '-100px', marginTop: '-100px'}).show(150); }
  		if (trig == 8) { $('.third-loupe').show(); }
  		if (trig == 9) { $('.fourth-loupe').show(2000); }
  		var style3 = $('.third-loupe').attr('style');
  	}, function() {
  		$('.loupe1, .loupe2, .second-loupe, .third-loupe').hide(150);
  		$('.third-loupe, .fourth-loupe').hide();
  	});
     
});