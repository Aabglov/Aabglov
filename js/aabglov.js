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

    // Populate this week's cage Movie
    // var movie_ind = 1; // First movie index is 1 (Fast Times at Ridgemont High)
    // var num_seen = 0;
    // for(var i = 1;i < Object.keys(movies).length+1;i++){ // We iterate up to length+1 because it's possible this week's movie is the last in the list and we index at 1
    //   if(!movies[i]["seen"]){
    //     movie_ind = i;
    //     break;
    //   }else{
    //     num_seen += 1;
    //   }
    // }
    // console.log(movie_ind);
    // $('.cage').html("I'm not all business though.  My friends and I LOVE Nicolas Cage.  We're watching his movies.  All of them.  In chronological order of release.  We've seen " + num_seen +" so far.  Up next is: " + movies[movie_ind]["link"]);

    // var newColor = '#FFFFFF';
    // nodes.update([{id:0, color:{background:newColor}}]);
    console.log(network);

}

function mobileInit(){

  window.onresize = function(event) {
    //screen_width = $(window).width()
    //screen_height = $(window).height();
    var canvas = document.getElementsByTagName('canvas')[0];
    canvas.width = $("#tools").width();
    canvas.height = Math.min(200,canvas.width);
    // Perform iPhoneHack if the device is an iPhone
    //if(iOS){
    //  iPhoneHack(screen_height,screen_width);
    //}
  };

  // Trigger the window.onresize function once to
  // apply all our custom sizing
  window.onresize();

  // Create Carousel
  $('#cv').slick({
      autoplay:false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      arrows:false
    });
}
