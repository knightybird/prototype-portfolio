$(document).ready(function(){
    $(".menu-icon").click(function(){
        $(".menu-icon").toggleClass("active")
    })

    $(".menu-icon").click(function(){
        $(".sidebar").toggleClass("active")
    })
})

$(document).ready(function(){
    $('.home').click(function(){
        $('.screen').toggleClass('active');
    })
})

$(document).ready(function(){
    $('.menu_svg').click(function(){
        $('ul').toggleClass('active');
    })
})
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
          navbar.style.top = "-80px";
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

/* ======================
    scroll to top
   ======================
*/
$(document).ready(function(){
  // check to see if the window is top if not display button
  $(window).scroll(function(){
      if($(this).scrollTop() > 200){
          $('.scrollToTop').fadeIn();
          $('.scrollToTop').addClass('visible');
      } else {
          $('.scrollToTop').fadeOut();
          $('.scrollToTop').removeClass('visible');
      }
  });
  //smooth scrolling to top, click event to scroll to top
      $('.scrollToTop').click(function(){
          $('html, body').animate({scrollTop: 0}, 1000)
      })
});


/* ======================
    remove Isotope's layout
   ======================
*/
Isotope.Item.prototype._create = function() {
    // assign id, used for original-order sorting
    this.id = this.layout.itemGUID++;
    // transition objects
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    };
    this.sortData = {};
  };
  
  Isotope.Item.prototype.layoutPosition = function() {
    this.emitEvent( 'layout', [ this ] );
  };
  
  Isotope.prototype.arrange = function( opts ) {
    // set any options pass
    this.option( opts );
    this._getIsInstant();
    // just filter
    this.filteredItems = this._filter( this.items );
    // flag for initalized
    this._isLayoutInited = true;
  };
  
  // layout mode that does not position items
  Isotope.LayoutMode.create('none');
  
  
  // --------------- //
  
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'none'
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  