// Carousel
const owl = $('.owl-carousel');

owl.owlCarousel({
	center: false,
	loop: true,
	margin: 90,
	startPosition: 0,
	items: 1,
	responsive: {
		1920: {
			items: 4,
			startPosition: 1,
		},
		1366: {
			items: 3,
			startPosition: 1,
		},
		1024: {
			items: 3,
			startPosition: 1,
		},
		768: {
			items: 3,
			startPosition: 1,
		},
		375: {
			items: 1,
			startPosition: 1,
		},

	},
});

$('.slider__btn--prev').click(function () {
	owl.trigger('prev.owl.carousel');
});


$('.slider__btn--next').click(function () {
	owl.trigger('next.owl.carousel');
});
