jQuery(document).ready(function( $ ) {
	function pafeStickyHeader() {

		var breakPointMd = $('[data-pafe-break-point-md]').data('pafe-break-point-md'),
			breakPointLg = $('[data-pafe-break-point-lg]').data('pafe-break-point-lg'),
			windowScroll = $(window).scrollTop(),
			windowWidth = window.innerWidth;

		if( windowWidth >= breakPointLg ) {
			$('[data-pafe-sticky-header-on-desktop]').each(function(){
				var offset = $(this).data('pafe-sticky-header-offset');
				if (windowScroll >= $(this).data('pafe-sticky-header-offset')) {
					$(this).addClass('pafe-sticky-header-fixed');
					if (offset == 0 && windowScroll > 0 || offset > 0) {
						$('body').addClass('pafe-sticky-header-on');
						$(this).addClass('pafe-sticky-header-active');
						$(this).find('.elementor-element').addClass('pafe-sticky-header-active-element');
					}
					if (offset == 0 && windowScroll == 0) {
						$('body').removeClass('pafe-sticky-header-on');
						$(this).removeClass('pafe-sticky-header-active');
						$(this).find('.elementor-element').removeClass('pafe-sticky-header-active-element');
					}
				} else {
					$('body').removeClass('pafe-sticky-header-on');
					$(this).removeClass('pafe-sticky-header-fixed').removeClass('pafe-sticky-header-active');
					$(this).find('.elementor-element').removeClass('pafe-sticky-header-active-element');
				}

				$(this).find('.elementor-element').addClass('pafe-sticky-header-element');
			});
		}

		if( windowWidth >= breakPointMd && windowWidth < breakPointLg ) {
			$('[data-pafe-sticky-header-on-tablet]').each(function(){
				var offset = $(this).data('pafe-sticky-header-offset');
				if (windowScroll >= $(this).data('pafe-sticky-header-offset')) {
					$(this).addClass('pafe-sticky-header-fixed');
					if (offset == 0 && windowScroll > 0 || offset > 0) {
						$('body').addClass('pafe-sticky-header-on');
						$(this).addClass('pafe-sticky-header-active');
						$(this).find('.elementor-element').addClass('pafe-sticky-header-active-element');
					}
					if (offset == 0 && windowScroll == 0) {
						$('body').removeClass('pafe-sticky-header-on');
						$(this).removeClass('pafe-sticky-header-active');
						$(this).find('.elementor-element').removeClass('pafe-sticky-header-active-element');
					}
				} else {
					$('body').removeClass('pafe-sticky-header-on');
					$(this).removeClass('pafe-sticky-header-fixed').removeClass('pafe-sticky-header-active');
					$(this).find('.elementor-element').removeClass('pafe-sticky-header-active-element');
				}

				$(this).find('.elementor-element').addClass('pafe-sticky-header-element');
			});
		}

		if( windowWidth < breakPointMd ) {
			$('[data-pafe-sticky-header-on-mobile]').each(function(){
				var offset = $(this).data('pafe-sticky-header-offset');
				if (windowScroll >= $(this).data('pafe-sticky-header-offset')) {
					$(this).addClass('pafe-sticky-header-fixed');
					if (offset == 0 && windowScroll > 0 || offset > 0) {
						$('body').addClass('pafe-sticky-header-on');
						$(this).addClass('pafe-sticky-header-active');
						$(this).find('.elementor-element').addClass('pafe-sticky-header-active-element');
					}
					if (offset == 0 && windowScroll == 0) {
						$('body').removeClass('pafe-sticky-header-on');
						$(this).removeClass('pafe-sticky-header-active');
						$(this).find('.elementor-element').removeClass('pafe-sticky-header-active-element');
					}
				} else {
					$('body').removeClass('pafe-sticky-header-on');
					$(this).removeClass('pafe-sticky-header-fixed').removeClass('pafe-sticky-header-active');
					$(this).find('.elementor-element').removeClass('pafe-sticky-header-active-element');
				}

				$(this).find('.elementor-element').addClass('pafe-sticky-header-element');
			});
		}
		
	}

	$(window).on('load resize scroll', function() {
		pafeStickyHeader();
	});
}); 