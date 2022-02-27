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

  
});

//
// $("#backVideo").vide("video/rolling-shutters/1.mp4");
