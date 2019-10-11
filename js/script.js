$(document).ready(function(){
    $(".menu-icon").click(function(){
        $(".menu-icon").toggleClass("active")
        $(".dropdown").toggleClass("active");
    });

    $(".menu-logo").click(function(){
        $(".sidebar").toggleClass("active")
    });

    $('.home').click(function(){
      $('.screen').toggleClass('active');
    });

    $('.menu_svg').click(function(){
        $('ul').toggleClass('active');
    });
  /* ======================
      scroll to top - note: remake this
    ======================
  */
    $(window).scroll(function(){
      if($(this).scrollTop() > 200){
        $('.scrollToTop').fadeIn();
        $('.scrollToTop').addClass('visible');
      } else {
        $('.scrollToTop').fadeOut();
        $('.scrollToTop').removeClass('visible');
      }
    });
        $('.scrollToTop').click(function(){
          $('html, body').animate({scrollTop: 0}, 1000)
        })
});

/* ======================
    hide show nav
   ======================
*/
var lastScrollTop = 0;
var sticky1 = navbar.offsetTop; 


navbar = document.getElementById("navbar");
// filter = document.getElementsById("filter-btn");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
    if (window.pageYOffset >= 500 + sticky1) {
        if (scrollTop > lastScrollTop){
          // navbar.style.top = "-80px";
          // filter.style.top = "20px";
      } else {
          navbar.style.top = "0";
          // filter.style.top = "0";
      }
    }
    else {
      navbar.style.top = "0";
  }
    
    lastScrollTop = scrollTop;
})
/* ======================
    sticky nav
    execute function when offset = nav
   ======================
*/

window.onscroll = function(){
  stickyNav()
};

const navbar2 = document.getElementById("navbar");
const sticky = navbar2.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= 100 + sticky)
  {
      navbar2.classList.add("sticky");
  } 
  else {
      navbar2.classList.remove("sticky");
  }

}

/*
=============================
 Circle Landing effects
=============================
 */
$(document).on('mouseover', '.landing-container .column', function(){
  //   $(this).addClass('active_landing').siblings().removeClass('active_landing');
  })
  
  $(document).on('mouseover', '.circle_container .circle', function(){
    $(this).addClass('active_projects').siblings().removeClass('active_projects');
  //   $("body").css("background-color", "white");
  })
  $(document).on('mouseleave', '.circle_container .circle', function(){
      $(this).addClass('deactive_projects').siblings().removeClass('deactive_projects');
      // $("body").css("background-color", "gray");
    })


    
/*
=============================
 Dark Theme
=============================
 */
/* darklight box */
$(document).ready(function(){
  $('ul.darklight').click(function(){
    $('ul.darklight').toggleClass('dl-active');
    $('body').toggleClass('dl-dark');


  })
})

/* darklight switch */
$(document).ready(function(){
  $('input.darklight-switch').click(function(){
    $('body').toggleClass('dl-dark');
  })
})

/*
=============================
 scroll indicator
============================= */
const landing = document.getElementById("landing");

const landingOffset = landing.offsetTop;
// landing.onscroll = function() {
  window.onscroll = function() {
  myFunction()
};

// When the user scrolls the page, execute myFunction 
function myFunction() {
  if (window.pageYOffset >= landingOffset){
      
    const scrollBody = document.body.scrollTop || document.documentElement.scrollTop;

      var winScroll = scrollBody - landingOffset;

      const scrollH = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  var height =scrollH - landingOffset;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
  }

}