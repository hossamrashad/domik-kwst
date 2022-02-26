$(document).ready(function () {
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

  // filter items on button click
  $(".filter-button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // owl
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
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
        items: 2,
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
