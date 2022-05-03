/* global $ */

/* eslint-env jquery */


$('document').ready(function(){

    /* ---------------- sticky navigation  ---------------- */


    
    $('.js--section-features').waypoint(function(direction) {
        
        if(direction == "down") {
            $('nav').addClass('sticky'); // while scroling down it will add class sticky to nav so that our css works 
        } else {
            $('nav').removeClass('sticky'); // and similarly while going down it will remove class sticky from nav 
        }
        
    }, {
        offset: '60px;' // before 60px navigation will pop up
    });
    
    /* ---------------- scroll on buttons   ---------------- */
    
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    
    /* ---------------- scroll on buttons  taken from css-tricks ---------------- */
    
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    /* ----------------animation on scroll ---------------- */
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    
    /* ----------------mobile nav ---------------- */
    
//    $('.js--nav-icon').click(function() {
//        var nav = $('.js--main-nav');
//        var icon = $('.js--nav-icon');
//        nav.slideToggle(150);
//        
//        if(icon.hasClass('ion-navicon-round')) {
//            icon.addClass('ion-close-round');
//            icon.removeClass('ion-navicon-round');
//        } else {
//            icon.addClass('ion-navicon-round');
//            icon.removeClass('ion-close-round');
//        }
//    });
//  
    
    
    
//   **************************mobile nav *******************************8
    
    $('.js--nav-icon, .js--main-nav a, .logo-black').click(function(element){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        //Gets the class name of the element that triggered the event
        var clicked =  element.target.className;

        //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
        if (icon.hasClass('ion-navicon-round') && clicked == 'logo-black')
            return;

        //Opens and closes the menu
        if ($(window).width() < 768){
            nav.slideToggle(200);
        }

        //Changes icon states of the menu button
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });


    $(window).resize(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        if ($(window).width() > 767){
            nav.css("display", "block");
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });
    

    
});

//   ------------- canvas --------------
    function upload(){
 
  var canvas = document.getElementById ("can");
  
  var getimg = document.getElementById ("img");
  
  var image = new SimpleImage (getimg);
  
  image.drawTo(canvas);
 }



    
