$(document).ready(function(){$(".owl-carousel").owlCarousel({loop:!0,margin:20,nav:!0,dots:!1,autoplay:!0,smartSpeed:1e3,responsive:{0:{items:1},600:{items:2},1e3:{items:2}}}),$(".owl-carousel").on("mousewheel",".owl-stage",function(e){0<e.deltaY?$(".owl-carousel").trigger("next.owl"):$(".owl-carousel").trigger("prev.owl"),e.preventDefault()})});
//# sourceMappingURL=homePage.js.map
