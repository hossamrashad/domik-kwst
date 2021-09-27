$(document).ready(function () {
  // nivo slide
  $(".slider-active").nivoSlider({
    // points
    controlNav: true,
    // angle left & right
    directionNav: true,
    randomStart: true,
    controlNavThumbs: false,
    animSpeed: 500,
    pauseTime: 5000,
    pauseOnHover: false,
    manualAdvance: false,
    prevText: '<i class="fas fa-long-arrow-alt-left"></i>',
    nextText: '<i class="fas fa-long-arrow-alt-right"></i>',
    slices: 15,
    boxCols: 8,
    boxRows: 4,

    // effect: "random",

    // startSlide: 0,

    // beforeChange: function () {},
    // afterChange: function () {},
    // slideshowEnd: function () {},
    // lastSlide: function () {},
    // afterLoad: function () {},
  });

  // countTo
  $(".countTo-1920").countTo({
    from: 50,
    to: 1920,
    speed: 3000,
    refreshInterval: 50,
  });

  $(".countTo-3450").countTo({
    from: 50,
    to: 3450,
    speed: 5000,
    refreshInterval: 50,
  });
  $(".countTo-16700").countTo({
    from: 50,
    to: 16700,
    speed: 9000,
    refreshInterval: 50,
  });

  // init Isotope
  var $grid = $("#portfolio-list").isotope({
    // options
  });
  // filter items on button click
  $(".filter-button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // gmaps
  // var map = new GMaps({ el: ".jq-map", lat: 30.039977, lng: 31.219695 });

  // owl
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
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

  // magnific
  $(".jq-magnific-image").magnificPopup({
    type: "image",
  });

  $(".jq-magnific-gallery").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".jq-magnific-video").magnificPopup({
    type: "iframe",
  });
});
