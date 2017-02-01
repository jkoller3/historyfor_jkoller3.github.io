
$(document).on('ready', function () {
//	$("div").prop("aria-hidden").val("false");
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

var image_fromDOM;
$("button").click(function (event) {
	//to download this? 
	var toDownload = confirm("Will you download this?");
	if (toDownload) {
		var dom_search = $(".slick-track").children();
		dom_search.each(function (i) {
			if ($(dom_search[i]).attr("aria-hidden") !== "true") {
				image_fromDOM = $($(dom_search[i])[0].children[0]).attr("src");
				window.open(image_fromDOM);
			}
		});
		//logic for adding point to user's score 
		//not connected to a working db, but basic logic is here as an outline of how it could work
		$.ajax({
			type: "post"
			, url: "userPTupdate.php"
			, data: "pointIncrement=" + 1
			, success: function (data) {
				console.log(data);
			}
		});
	}
});