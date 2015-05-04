$(document).on("ready", function() {

	var $nav = $("#nav");
	var $nava = $("#nav a");

	$nav.sticky({topSpacing:0});

	$(window).on("scroll", function(e) {
		console.log("in scroll");
		if ($("#nav-sticky-wrapper").hasClass('is-sticky')) {
			console.log("in if");
			$nav.css("background-color", "rgba(119, 31, 31, 0.93)");
			$nava.css("color", "rgb(255, 209, 220)");
			$nav.css("top", "0px");
			$nav.css("z-index", "1");
		}
		if ($("#nav-sticky-wrapper").hasClass('is-sticky') === false) {
			console.log("in second if");
			$nav.css("background-color", "rgb(119, 31, 31)");
			$nava.css("color", "rgb(255, 209, 220)");
			$nav.css("top", "0px");
			$nav.css("z-index", "0");
		}
	});

});