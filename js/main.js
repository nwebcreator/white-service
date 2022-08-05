// Carousel
const owl = $('.owl-carousel');

owl.owlCarousel({
	center: false,
	loop: true,
	margin: 163,
	startPosition: 0,
	items: 1,
	responsive: {
		1920: {
			items: 4,
			startPosition: 0,
		},
		1366: {
			items: 3,
			startPosition: 0,
			margin: 146,
		},
		1024: {
			items: 3,
			startPosition: 0,
			margin: 70,
		},
		768: {
			items: 3,
			startPosition: 0,
			margin: 61,
		},
		375: {
			items: 1,
			startPosition: 0,
		},

	},
});

$('.slider__btn--prev').click(function () {
	owl.trigger('prev.owl.carousel');
});


$('.slider__btn--next').click(function () {
	owl.trigger('next.owl.carousel');
});


$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
