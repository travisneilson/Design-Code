$(function() {
  getTxt();  
});



function getTxt() {
  $.get('https://dl.dropboxusercontent.com/u/434598/UP/activity_report.txt', function(data) {
    var newData = '[' + data.slice(0, -1) + ']';
    
    var d = jQuery.parseJSON(newData),
        dNum = d.length;

    //for (var i = 0; i < dNum; i++) {
    for (var i = dNum-1; i > 0; --i) {
      var steps = d[i].totalSteps,
          calories = d[i].caloriesBurned,
          active = d[i].percentOfTimeActive,
          distance = d[i].distanceCovered,
          label = d[i].date;

      circleMaker(steps, calories, active, distance, label);

    }
    
    
    
    // Packery
    var stampElem = document.querySelector('.stamp');
    var pckry = new Packery( document.querySelector('.days'), {
      itemSelector: '.circle',
      gutter: 10
    });
    
    pckry.stamp( stampElem ); 
    pckry.layout();

    
  });
}



function circleMaker(steps, cal, active, size, label) {
  
  
  
  if (steps > 10000) {
    var percent = 100;
  } else {
    var percent = (steps/10000)*100;
  }
    
  if (percent < 50) {
    var rightDeg = (percent*3.6)+180,
        leftDeg  = 180;      
  } else {
    var rightDeg = 0,
        leftDeg  = (percent*3.6);
  }
  
  if (cal > 1200) {
    var hue = 220;
  } else if (cal < 400) {
    var hue = 0;
  } else {
    var hue = ((220 - 0) * (cal - 400))/(1200 - 400) + 0;  
  }
  
  var labelDay = label.slice(8),
      labelMonth = label.slice(5, 7);
      
  if (labelMonth === '01') {
    var labelMonthTxt = 'Jan';
  } else if (labelMonth === '02') {
    var labelMonthTxt = 'Feb';
  } else if (labelMonth === '03') {
    var labelMonthTxt = 'Mar';
  } else if (labelMonth === '04') {
    var labelMonthTxt = 'Apr';
  } else if (labelMonth === '05') {
    var labelMonthTxt = 'May';
  } else if (labelMonth === '06') {
    var labelMonthTxt = 'Jun';
  } else if (labelMonth === '07') {
    var labelMonthTxt = 'Jul';
  } else if (labelMonth === '08') {
    var labelMonthTxt = 'Aug';
  } else if (labelMonth === '09') {
    var labelMonthTxt = 'Sep';
  } else if (labelMonth === '10') {
    var labelMonthTxt = 'Oct';
  } else if (labelMonth === '11') {
    var labelMonthTxt = 'Nov';
  } else if (labelMonth === '12') {
    var labelMonthTxt = 'Dec';
  } else {
    var labelMonthTxt = labelMonth;
  }
  
    
  
  var newActive = 100 - parseInt(active);
  
  var leftStrokeStyle  = '-webkit-transform: rotate('+ leftDeg +'deg);'+
                         '-moz-transform: rotate('+ leftDeg +'deg);'+
                         '-ms-transform: rotate('+ leftDeg +'deg);'+
                         '-webkit-transform: rotate('+ leftDeg +'deg);'+
                         'background-color: hsl('+ hue +', 80%, 50%);',
                   
      rightStrokeStyle = '-webkit-transform: rotate('+ rightDeg +'deg);'+
                         '-moz-transform: rotate('+ rightDeg +'deg);'+
                         '-ms-transform: rotate('+ rightDeg +'deg);'+
                         '-webkit-transform: rotate('+ rightDeg +'deg);'+
                         'background-color: hsl('+ hue +', 80%, 50%);';
  
  var fillStyle = 'width: '+ newActive +'%;'+
                  'height: '+ newActive +'%;'+
                  'margin: -'+ (newActive/2) +'% 0 0 -'+ (newActive/2) +'%;';
  
  
  var circleStyle = 'width: '+ size*30 +'px;'+
                    'height: '+ size*30 +'px;';
  
    
  var template = '<div class="circle" style="'+ circleStyle +'">' +
                  '<div class="side-left"><div class="stroke" style="'+ leftStrokeStyle +'"></div></div>' +
                  '<div class="side-right"><div class="stroke" style="'+ rightStrokeStyle +'"></div></div>' +
                  '<div class="fill" style="'+ fillStyle +'"></div>' +
                  '<div class="label">'+ labelMonthTxt +' '+ labelDay +'</div>'+
                '</div>';
    
  $('article.up .days').append(template);
  
  

}