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
							, slidesToScroll: 1
							, //        infinite: true,
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