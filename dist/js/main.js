// Responsive nav


$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });

  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function(e) {
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});

//Smooth Scrolling jquery plug in
//.cf is reference to nav class="cf"
// a is reference to a href
//  hash is whatever  # nav point (music, gift cards, etc)
// calls animate method, passing property of scrollTop, passing variable (hash).offset().top
//800 is the speed of 800ms,
//window.location.hash = hash; sets it to move to whatever hash
//

$('.cf a').on('click', function(event) {
	if (this.hash !== '') {
		event.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top
			},
			800,
			function() {
				window.location.hash = hash;
			}
		);
	}
});
