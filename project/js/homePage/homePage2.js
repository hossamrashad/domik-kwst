/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write
/*global console , alert , prompt , $ , document, write, ADSAFE, report, jslint, bitwise, node*/
/*property charAt, slicexs*/
/*jslint browser: true */
/*global window */

$(document).ready(function () {
 
  
  // owl
  $(".owl-carousel").owlCarousel({
    loop: true,
    // margin: 20,
    margin: 5,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  // mousewheel owl-carousel
  $(".owl-carousel").on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaY > 0) {
      $(".owl-carousel").trigger("next.owl");
    } else {
      $(".owl-carousel").trigger("prev.owl");
    }
    e.preventDefault();
  });
});

//
// $("#backVideo").vide("video/rolling-shutters/1.mp4");
