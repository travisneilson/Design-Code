$(function() {

  bgSwitcher();

}); // END.Ready



function bgSwitcher() {

  $('.bg-cycle').click(function() {
    
    var bgs = new Array();
        bgs[0] = 'arches.png';
        bgs[1] = 'hexellence.png';
        bgs[2] = 'worn_dots.png';
        bgs[3] = 'gradient_squares.png';
        bgs[4] = 'grey.png';
        bgs[5] = 'skelatal_weave.png';
        bgs[6] = 'subtle_surface.png';
        bgs[7] = 'retina_wood.png';
        bgs[8] = 'subtle_dots.png';
        bgs[9] = 'dust.png';
        bgs[10] = 'retina_dust.png';
        bgs[11] = 'light_noise_diagonal.png';
        bgs[12] = 'pyramid.png';
        bgs[13] = 'tiny_grid.png';
        bgs[14] = 'subtlenet2.png';
        bgs[15] = 'linen.png';
        bgs[16] = 'absurdidad.png';
        bgs[17] = 'escheresque.png';
        bgs[18] = 'reticular_tissue.png';
        bgs[19] = 'brillant.png';
        bgs[20] = 'tapestry_pattern.png';
        bgs[21] = 'gplaypattern.png';
        bgs[22] = 'weave.png';
        bgs[23] = 'lil_fiber.png';
        bgs[24] = 'diagonal_striped_brick.png';
        bgs[25] = 'stacked_circles.png';
        bgs[26] = 'paper.png';
    
    var $this = $(this),
        randBgNum = Math.floor(Math.random() * bgs.length);
    
    
    $('body').css('background-image', 'url(http://subtlepatterns.subtlepatterns.netdna-cdn.com/patterns/' + bgs[randBgNum] + ')'); //'
    
    $this.addClass('spin');    
    setTimeout(function(){$this.removeClass('spin')}, 200);
    
  });

} // END.bgSwitcher