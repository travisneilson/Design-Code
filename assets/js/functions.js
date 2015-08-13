/**
 * ======================================
 *  Functions
 *  @(Filename):    functions.js
 *  @(Description): Main JavaScript File
 *  @(Author):      Travis Neilson
 *  @(Copyright):   DevTips (C) 2015
 * ======================================
 */

/**
 * ============================================
 *  Constructor
 *  @(Description): Set Class Global Variables
 * ============================================
 */

var TN = function() {
    this.wScroll    = $(window).scrollTop();
};


/**
 * ===============================================
 *  Window Changes
 *  @(Description): Main Window Changes Functions
 * ===============================================
 */

TN.prototype.windowScroll = function() {
    $(window).scroll(function() {
        this.wScroll = $(window).scrollTop();
        this.youtubeScroll();
        this.mentoringStart();
        this.articlesStart();
    });
};

TN.prototype.windowResize = function() {
    $(window).resize(function() {
        if($(window).width() > 640) {
            this.mentoringWide();
        } else {
            this.mentoringNarrow();
        }
    });
};

/**
 * ================================================
 *  Youtube
 *  @(Description): Main YouTube Section Functions
 * ================================================
 */

TN.prototype.youtube = function() {
    // Add logic here if needed & call in init()
};

TN.prototype.youtubeScroll = function() {
    $('.video-strip').css('background-position', 'center -'+ this.wScroll +'px');
};

/**
 * ==================================================
 *  Mentoring
 *  @(Description): Main Mentoring Section Functions
 * ==================================================
 */

TN.prototype.mentoring = function() {
    this.mentoringBubble();
};

TN.prototype.mentoringStart = function() {
    if($('section.mentoring').offset().top - $(window).height()/2 < this.wScroll) {
        if($(window).width() > 640) {
            $('.faces').addClass('launched');
            if(!$('.face').hasClass('has-bubble-open')) {
                setTimeout(function(){
                    $('.face:nth-child(3)').addClass('has-bubble-open');
                }, 400);
            }
        } else {
            this.mentoringNarrow();
        }
    }
};

TN.prototype.mentoringBubble = function() {
    $('.face').on('click',function() {
        var $this = $(this),
            faceTop = $this.position().top,
            vertMath =  -1 * (faceTop - 230),
            faceLeft = $this.position().left,
            horizMath =  0 - faceLeft;

    if($(window).width() > 640) {
        $this.parent().css('top', + vertMath +'px');
    } else {
        if($this.hasClass('back-btn')) {
            this.mentoringNarrow();
        } else {
            $this.parent().css('left', + horizMath +'px');
        }
    }

    if(!$this.hasClass('back-btn')) {
        $this.addClass('has-bubble-open')
             .siblings()
             .removeClass('has-bubble-open');
    }
  });
};

TN.prototype.mentoringNarrow = function() {
    $('.faces').css({
        'top': '230px',
        'left': '0px'
    });
    $('.face').first()
              .addClass('has-bubble-open')
              .siblings()
              .removeClass('has-bubble-open');
};

TN.prototype.mentoringWide = function() {
    $('.faces').css({
        'top': '0px',
        'left': '0px'
    });
    $('.face:nth-child(3)').addClass('has-bubble-open')
                           .siblings()
                           .removeClass('has-bubble-open');
};

/**
 * =================================================
 *  Articles
 *  @(Description): Main Articles Section Functions
 * =================================================
 */

TN.prototype.articles = function() {
    this.articlesShow();
};

TN.prototype.articlesStart = function() {
    if($('section.articles').offset().top - $(window).height()/2 < this.wScroll) {
        $('.article-thumb').each(function(i) {
            setTimeout(function() {
                $('.article-thumb').eq(i).addClass('is-visible');
            }, 200 * i);
        });
    }
};

TN.prototype.articlesShow = function() {
    setInterval(function() {
        var randNum = Math.floor(Math.random() * $('.article-thumb').length) + 1;
        $('.article-thumb').eq(randNum)
                           .addClass('is-emph')
                           .siblings()
                           .removeClass('is-emph');
    }, 4000);
};

/**
 * ===============================================
 *  Initialization
 *  @(Description): Main Functions Initialization
 * ===============================================
 */

TN.prototype.init = function() {
    this.windowScroll();
    this.windowResize();
    this.mentoring();
    this.articles();
};

// Initialize App
var app = new TN();
app.init();
// Keep on hacking ;)
