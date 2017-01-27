$(document).on('ready', function () {
	$(".variable").slick({
		dots: true
		, swipe: true
		, mobileFirst: true
		, responsive: [
			{
				breakpoint: 1024
				, settings: {
					slidesToShow: 1
					, slidesToScroll: 1, //        infinite: true,
					dots: true
				}
    }
					, {
				breakpoint: 600
				, settings: {
					slidesToShow: 1
					, slidesToScroll: 1
				}
    }
					, {
				breakpoint: 480
				, settings: {
					slidesToShow: 1
					, slidesToScroll: 1
				}
    }
  ]
	});
});
var canvas = document.getElementById("invisiblecanvas");
context = canvas.getContext('2d');
var base_image = new Image(1440, 2560);
var image_fromDOM;
$("button").click(function (event) {
	event.preventDefault();
	var x = confirm("Will you download this?");
	if (x) {
		var dom_search = $(".slick-track").children();
		dom_search.each(function (i) {
				if ($(dom_search[i]).attr("aria-hidden") !== "true") {
					image_fromDOM = $($(dom_search[i])[0].children[0]).attr("src"); 
					window.open(image_fromDOM);
				}
	});
}
});