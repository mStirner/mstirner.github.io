/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge: ['1141px', '1680px'],
		large: ['981px', '1140px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['321px', '480px'],
		xxsmall: [null, '320px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Scrolly.
	$('.scrolly').scrolly();



	// MODAL
	(() => {

		$("[data-target='modal']").click(function () {
			let modal = this.attributes["data-modal"];
			let target = $(`#${modal.nodeValue}`);

			target.toggleClass('is-visible');

			target.next()

			$('body').toggleClass('overflow-hidden');
			$('.modal-wrapper').toggleClass('overflow-hidden');

		});

	})();





	$('#carousel').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					//dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
		prevArrow: '<button type="button" class="slick-prev slick-btn"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next slick-btn"><i class="fas fa-chevron-right"></i></button>'
	});


})(jQuery);
