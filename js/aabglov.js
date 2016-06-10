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

    // Get the em size
    var em_width = screen_width / parseFloat($("body").css("font-size"));
    console.log(em_width);

    // Create the carousel bindings
    // Bumping this value up because iPhone 6+ is too big in landscape view
    if(em_width <= 70.0){
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
    screen_width = $(window).width()
    screen_height = $(window).height();
    $("#particles").width(screen_width);
    $("#particles").height(screen_width); // Keep the box square
    
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
