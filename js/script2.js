/*
=============================
 Parallax
============================= */
var headerBg = document.getElementById('parallax-scroll')
window.addEventListener('scroll', function(){
    headerBg.style.opacity = 1 - +window.pageYOffset/750+''
    headerBg.style.top = +window.pageYOffset+'px'
    headerBg.style.backgroundPositionY = - +window.pageYOffset/2 + 'px'
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
