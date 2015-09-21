$(document).ready(function (){

	$('.handle').draggable({ containment: "parent" }); 	
	
	$('.handle').bind( "drag", function(event, ui) {	
	 	
	 	var left = parseFloat($('.handle').css('left')) / 2	 	
	 	$('.new').css('width', left+'%');				
	
		var hateyou = ((100 - left).toFixed( 2 ))/100;
		$('.hide-remember').css('opacity', hateyou);
		
		var hateme = (left.toFixed( 2 ))/100;
//		$('.message').css('opacity', hateme);

		if(left == 100) {
			hellosteve();
		}
		
		textfit();
		touch();
		init();
	});

	$('.new span').css('width', $(window).width());
	
}); // END READY




function hellosteve() {
	$('.belt').animate({bottom: '-100px'}, 300).hide(function() {
		$('.message').animate({opacity: '1'});
	});
}

function textfit() {
	
	var wh = $(window).height()

	if(wh <= 706) {$('.message').css({fontSize: '21px', wordSpacing: '0px'});}
	if(wh >= 707 && wh <= 905) {$('.message').css({fontSize: '24px', wordSpacing: '-1px'});}
	if(wh > 905) {$('.message').css({fontSize: '27px', wordSpacing: '0px'});}
}


$(window).resize(function() {
	$('.new span').css('width', $(window).width());
	textfit(); 
});


function touch() {



}


function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function init() {
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
}