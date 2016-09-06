$(document).ready(function() {
 
  var owl = $("#client-logo");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 2],
        [450, 3],
        [600, 4],
        [700, 5],
        [1000, 5],
        [1200, 5],
        [1400, 5],
        [1600, 5]
      ],
      pagination : false
  });

});

$(document).ready(function() {
 
  var owl = $("#investor-slide");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 2],
        [450, 2],
        [600, 3],
        [700, 4],
        [1000, 5],
        [1200, 5],
        [1400, 5],
        [1600, 5]
      ],
      pagination : false
 
  });
 
});


$(document).ready(function() {
 
  $("#team-profiles").owlCarousel({
      autoPlay: 3000, 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });
 
});

$('.timer').countTo();

new WOW().init();
