//

var screen_height;
var screen_width;
var cal_height;
var map_size = 0.8;
var iOS = false;

//window.onload = init;
$(document).ready(init);

// jQuery for page scrolling feature - requires jQuery Easing plugin
function init(){
    // Determine if it's an iPhone
    iOS = /iPad|iPhone|iPod/.test(navigator.platform);

    screen_height = $(window).height()
    screen_width = $(window).width()

    // Set canvas width dynamically
    var canvas = document.getElementsByTagName('canvas')[0];
    canvas.width = $("#tools").width();

    // Get the em size
    var em_width = screen_width / parseFloat($("body").css("font-size"));
    console.log(em_width);

    // Create the carousel bindings
    if(em_width <= 65.0){
      console.log('MOBILE INIT');
      mobileInit();
    }

    // Bind smooth scrolling
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

}

function mobileInit(){

  window.onresize = function(event) {
    //screen_width = $(window).width()
    //screen_height = $(window).height();
    var canvas = document.getElementsByTagName('canvas')[0];
    canvas.width = $("#tools").width();

    // Perform iPhoneHack if the device is an iPhone
    //if(iOS){
    //  iPhoneHack(screen_height,screen_width);
    //}
  };

  // Create Carousel
  $('#cv').slick({
      autoplay:false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      arrows:false
    });
}
