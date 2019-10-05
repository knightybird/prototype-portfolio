/*
=============================
 hover effects
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