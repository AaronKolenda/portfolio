$(document).on("ready", function() {

	var $nav = $("#nav");

	$nav.sticky({topSpacing:0});

	$(window).on("scroll", function(e) {
		console.log("in scroll");
		if ($("#nav-sticky-wrapper").hasClass('is-sticky')) {
			console.log("in if");
			$nav.css("background-color", "rgba(255, 255, 255, .8");
			$nav.css("top", "-40px");
		}
		if ($("#nav-sticky-wrapper").hasClass('is-sticky') === false) {
			console.log("in second if");
			$nav.css("background-color", "transparent");
			$nav.css("top", "0px");
		}
	});

});