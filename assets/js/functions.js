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
    this.wScroll = $(window).scrollTop();
};

/**
 * ================================================
 *  Youtube
 *  @(Description): Main YouTube Section Functions
 * ================================================
 */

TN.prototype.youtube = function(self) {
    // Add logic here if needed & call in init()
};

TN.prototype.youtubeScroll = function(self) {
    $('.video-strip').css('background-position', 'center -'+ self.wScroll +'px');
};

/**
 * ==================================================
 *  Mentoring
 *  @(Description): Main Mentoring Section Functions
 * ==================================================
 */

TN.prototype.mentoring = function(self) {
    self.mentoringBubble();
};

TN.prototype.mentoringStart = function(self) {
    if($('section.mentoring').offset().top - $(window).height()/2 < self.wScroll) {
        if($(window).width() > 640) {
            $('.faces').addClass('launched');
            if(!$('.face').hasClass('has-bubble-open')) {
                setTimeout(function() {
                    $('.face:nth-child(3)').addClass('has-bubble-open');
                }, 400);
            }
        } else {
            self.mentoringNarrow();
        }
    }
};

TN.prototype.mentoringBubble = function(self) {
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
                self.mentoringNarrow();
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

TN.prototype.mentoringNarrow = function(self) {
    $('.faces').css({
        'top': '230px',
        'left': '0px'
    });
    $('.face').first()
              .addClass('has-bubble-open')
              .siblings()
              .removeClass('has-bubble-open');
};

TN.prototype.mentoringWide = function(self) {
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

TN.prototype.articles = function(self) {
    self.articlesShow();
};

TN.prototype.articlesStart = function(self) {
    if($('section.articles').offset().top - $(window).height()/2 < self.wScroll) {
        $('.article-thumb').each(function(i) {
            setTimeout(function() {
                $('.article-thumb').eq(i).addClass('is-visible');
            }, 200 * i);
        });
    }
};

TN.prototype.articlesShow = function(self) {
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
 *  Window Changes
 *  @(Description): Main Window Changes Functions
 * ===============================================
 */

TN.prototype.windowScroll = function(self) {
    window.onscroll = function() {
        self.wScroll = $(window).scrollTop();
        self.youtubeScroll(self);
        self.mentoringStart(self);
        self.articlesStart(self);
    };
};

TN.prototype.windowResize = function(self) {
    window.onresize = function() {
        if($(window).width() > 640) {
            self.mentoringWide(self);
        } else {
            self.mentoringNarrow(self);
        }
    };
};

/**
 * ===============================================
 *  Initialization
 *  @(Description): Main Functions Initialization
 * ===============================================
 */

TN.prototype.init = function() {
    var self = this;
    self.windowScroll(self);
    self.windowResize(self);
    self.mentoring(self);
    self.articles(self);
};

// Initialize App
var app = new TN();
app.init();
