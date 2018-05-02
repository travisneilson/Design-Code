// -----------------------------------------------------------------------------
// About svg animation
// -----------------------------------------------------------------------------

var params = {
  container: document.getElementById('lottie'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/js/data.json'
};

var anim;

anim = lottie.loadAnimation(params);


// -----------------------------------------------------------------------------
// Global functionality
// -----------------------------------------------------------------------------

(function ($) {

    "use strict"

    var $body,
        $window,
        settings = {
            scrollDuration: 300
        };

    function onMobileToggleClick (e) {
        var $this = $(this),
            $navigation = $('.mobile-nav');

        $this.toggleClass('is-open');
        $navigation.toggleClass('is-open');
    }

    function onBlankLinkClick (e) {
        var $this = $(this),
            href = $this.attr('href'),
            $target = $(href);

        if ($target.length == 0)
            return;

        e.preventDefault();

        $body.animate({
            scrollTop: $target.offset().top
        }, settings.duration);
    }

    function bindings () {
        // Toggle mobile navigation (mobileNav)
        $('.mobile-nav-toggle').on('click', onMobileToggleClick);

        // Smooth scroll (smoothScroll)
        $('a[href^="#"]').on('click', onBlankLinkClick);
    }

    $(document).ready(function () {
        // Variable definitions
        $body = $('html, body');
        $window = $(window);

        bindings();
    });

})(jQuery);


// -----------------------------------------------------------------------------
// headroom.js
// -----------------------------------------------------------------------------

(function() {

  var elem = document.querySelector("header");

  var headroom  = new Headroom(elem, {
    'offset': 220,
    'tolerance': 5
  });

  headroom.init();

}());
