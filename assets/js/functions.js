$(window).scroll(function(){

  var wScroll = $(window).scrollTop();

  $('.video-strip').css('background-position', 'center -'+ wScroll +'px');

  startMentoring(wScroll);

});


$(function(){
  mentoringBubble();
});


function mentoringBubble() {

  $('.face').on('click', function(){
    var faceTop = $(this).position().top,
        vertMath = -1 * (faceTop - 240),
        faceLeft = $(this).position().left,
        leftMath = 0 - faceLeft;

    if ($(window).width() > 640){
      $('.face-wrap').css('top', vertMath + 'px');
    } else {
      if($(this).hasClass('back-btn')){
        mentoringNarrowStart();
      } else{
        $('.face-wrap').css('left', leftMath + 'px');
        $('.bubble').css('left', faceLeft + 'px');
      }
    }
    if(!$(this).hasClass('back-btn')){
      $(this).addClass('has-open-bubble')
      .siblings().removeClass('has-open-bubble');
    }
  });


  // click something
  // get its distance from the top of its parent
  // move everything to that the perfect distance (240) - items distance
  // add class of is-open on it, so it pop's the balloon

}
function mentoringWideStart() {
  $('.face:nth-child(3)').addClass('has-open-bubble')
  .siblings().removeClass('has-open-bubble');
  $('.face-wrap').css({
    'left': '0px',
    'top': '0px'
  });
  $('.bubble').css('left','100%');
}

function mentoringNarrowStart(){
  $('.face').first().addClass('has-open-bubble')
  .siblings().removeClass('has-open-bubble');
  $('.face-wrap').css({
    'left': '0px',
    'top': '0px'
  });
  $('.bubble').css('left','0px');
}

function startMentoring(wScroll){
  if($('section.mentoring').offset().top - 200 < wScroll){
    $('.face-wrap').addClass('launched');

    setTimeout(function(){
      if(!$('.face').hasClass('has-open-bubble')) {
        if($(window).width() > 640){
          mentoringWideStart();
        } else {
          mentoringNarrowStart();
        }
      }
    }, 300);
  }
}

$(window).resize(function(){
  if($(window).width() > 640){
    mentoringWideStart();
  } else {
    mentoringNarrowStart();
  }
});
