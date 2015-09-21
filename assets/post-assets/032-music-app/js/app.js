$(function() {
  
  $('.thumbnail').click(function() {
    $('.overlay.tour').addClass('active');
    timer();
    var cycle = setInterval(function() {timer()}, 36000);
    return false;
  });
  
  $('.close-tour').click(function() {
    $('.overlay.tour').removeClass('active');
    clearTimeout(cycle);
    
  });
  
});



function  timer(){

  var $viewport =  $('.iphone-viewport');
  
  setTimeout(function() {
    $viewport.removeClass().addClass('iphone-viewport step1');
  }, 1500)
  
  setTimeout(function() {
    $viewport.removeClass().addClass('iphone-viewport step2');
  }, 8000)
  
  setTimeout(function() {
    $viewport.removeClass().addClass('iphone-viewport step3');
  }, 14500)
  
  setTimeout(function() {
    $viewport.removeClass().addClass('iphone-viewport step4');
  }, 15000)
  
  setTimeout(function() {
    $viewport.removeClass().addClass('iphone-viewport step5');
  }, 17000)
  
  setTimeout(function() {
    $viewport.removeClass().addClass('iphone-viewport step6');
  }, 24000)
  
  setTimeout(function() {
    $viewport.removeClass().addClass('iphone-viewport step7');
  }, 26000)
  
  setTimeout(function() {
    $viewport.removeClass().addClass('iphone-viewport step8');
  }, 28000)
  
  setTimeout(function() {
    $viewport.removeClass().addClass('iphone-viewport step9');
  }, 33000)
  
  setTimeout(function() {
    $viewport.removeClass().addClass('iphone-viewport step0');
  }, 34500)

}