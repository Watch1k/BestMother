/* Common JS */
$(document).ready(function () {

	$(window).on('resize', function () {
		showNav();
		showLogin();
		toggleNavBtn();
	});

	// Clear placeholder
	(function () {
		var el = $('input, textarea');
		el.focus(function () {
			$(this).data('placeholder', $(this).attr('placeholder'));
			$(this).attr('placeholder', '');
		});
		el.blur(function () {
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
	}());

	(function () {
		var showBtn = $('.js-show-pass'),
			inputPass = $('.js-passs');

		$.validate();

		showBtn.on('click', function () {
			if ($(this).siblings(inputPass).attr('type') == 'password') {
				$(this).siblings(inputPass).attr('type', 'text');
			} else {
				$(this).siblings(inputPass).attr('type', 'password');
			}
		});
	})();

	(function () {
		var navigation = $('.js-navigation'),
			navigationItem = navigation.children(),
			navigate = $('.js-navigate');

		var timer;
		navigationItem.on({
			'mouseenter': function () {
				var _this = $(this);
				timer = setTimeout(function () {
					_this.find(navigate).fadeIn().css('z-index', '3');
				}, 350);
			},
			'mouseleave': function () {
				var _this = $(this);
				clearTimeout(timer);
				_this.find(navigate).fadeOut().css('z-index', '2');
			}
		});

		navigationItem.children('a').on('touchstart', function (e) {
			$(this).parent().siblings().trigger('mouseleave');
			$(this).parent().trigger('mouseenter');
			e.preventDefault();
		});
	})();

	(function () {
		var error = $('.js-hide-error');

		error.on('click', function () {
			$(this).fadeOut();
		});
	})();

	(function () {
		var clear = $('.js-form-clear'),
			searchBlock = $('.js-search'),
			toggle = $('.js-toggle-search');

		toggle.on('click', function () {
			searchBlock.fadeIn();
		});

		clear.on('click', function () {
			$(this).siblings('input').val('');
			searchBlock.fadeOut();
		});
	})();

	(function () {
		var slider = $('.js-slider');

		slider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			autoplay: true,
			autoplaySpeed: 10000,
			dots: true
		});
	})();

	(function () {
		var navBtn = $('.js-hamburger'),
			nav = $('.js-nav'),
			login = $('.js-login');

		navBtn.on('click', function () {
			$(this).toggleClass('is-active');

			nav.fadeToggle();
			login.fadeToggle();
		});
	})();

	function showNav() {
		var nav = $('.js-nav');

		if ($(window).width() >= 1024) {
			nav.css('display', 'flex');
		} else {
			nav.css('display', 'none');
		}
	}

	function showLogin() {
		var login = $('.js-login');

		if ($(window).width() >= 1024) {
			login.css('display', 'block');
		} else {
			login.css('display', 'none');
		}
	}

	function toggleNavBtn() {
		var navBtn = $('.js-hamburger');

		navBtn.removeClass('is-active');
	}
});