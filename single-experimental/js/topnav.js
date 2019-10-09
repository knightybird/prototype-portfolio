$(document).ready(function(){
    var navOffset   = $('header .navigation').offset().top;
    var scrollSpyPause = false;

    // Scroll window
    $(window).scroll(function() {
        // fixed navigation bar 
        if ($(window).scrollTop() > navOffset) {
            if (!$('header').hasClass('fixed')) {
                $('header').addClass('fixed');
                $('.scroll-to-top').fadeIn(350);
            }
        } else {
            if ($('header').hasClass('fixed')) {
                $('header').removeClass('fixed');
            }
        }
        //Scroll spy
        if (!scrollSpyPause) {
            $('header .navigation a[href^="#"').each(function(){
                var offset = $($(this).attr('href')).offset().top - 120;
                if (Math.abs($(window).scrollTop() - offset) < 100) {
                    $('header .navigation li.active').removeClass('active');
                    $(this).parents('li').addClass('active');
                }
            });
            $('header.not(.fixed) .navigation li.active').removeClass('active');
        }
    });

    
/*
-----------------------------
 click effects
-----------------------------
 */
/* darklight box */
    $('ul.darklight').click(function(){
      $('ul.darklight').toggleClass('dl-active');
      $('body').toggleClass('dl-dark');
    })
  
  /* darklight switch */
    $('input.darklight-switch').click(function(){
      $('body').toggleClass('dl-dark');
    })
  
});