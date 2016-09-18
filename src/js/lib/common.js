/* Common JS */
$(document).ready(function(){

	// Clear placeholder
	(function() {
		var el = $('input, textarea');
		el.focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'));
			$(this).attr('placeholder','');
		});
		el.blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
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
		var nav = $('.js-tabs-nav'),
			navFor = $('.js-tabs-for'),
			navItem = nav.children(),
			navForItem = navFor.children();

		navItem.on('click', function () {
			if (!$(this).hasClass('is-active')) {
				var _this = $(this);

				_this.addClass('is-active').siblings().removeClass('is-active');
				navForItem.filter('.is-active').removeClass('is-active').fadeOut(function () {
					navForItem.eq(_this.index()).addClass('is-active').fadeIn();
				});
			}
		});
	})();

	(function () {
		var navigation = $('.js-navigation'),
			navigationItem = navigation.children(),
			navigate = $('.js-navigate'),
			timer;

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
	})();

});