jQuery(document).ready(function( $ ) {
	$(document).on('click','[data-pafe-form-builder-nav="next"]',function(){
		var formID = $(this).data('pafe-form-builder-nav-form-id'),
			$wrapper = $(this).closest('.pafe-multi-step-form__content-item'),
    		$fields = $wrapper.find('[data-pafe-form-builder-form-id='+ formID +']'),
    		error = 0;

		$fields.each(function(){
			if ( $(this).data('pafe-form-builder-stripe') == undefined && $(this).data('pafe-form-builder-html') == undefined ) {
				if ( !$(this)[0].checkValidity() && $(this).closest('.elementor-widget').css('display') != 'none' ) {
					if ($(this).css('display') == 'none' || $(this).data('pafe-form-builder-image-select') != undefined) {
						$(this).closest('.elementor-field-group').find('[data-pafe-form-builder-required]').html(requiredText);
					} else {
						if ($(this).data('pafe-form-builder-image-select') == undefined) {
							$(this)[0].reportValidity();
						}
					}
					error++;
				}
			}
		});

		if (error == 0) {
			$wrapper.removeClass('active');
			$wrapper.next().addClass('active');
			var index = $wrapper.next().index(),
				$progressbarItem = $(this).closest('.pafe-multi-step-form').find('.pafe-multi-step-form__progressbar-item');
			$progressbarItem.eq(index).addClass('active');

			var $scrollToTop = $(this).closest('[data-pafe-multi-step-form-scroll-to-top]');

			if ($scrollToTop.length > 0) {
				var breakPointMd = $('[data-pafe-break-point-md]').data('pafe-break-point-md'),
					breakPointLg = $('[data-pafe-break-point-lg]').data('pafe-break-point-lg'),
					windowWidth = window.innerWidth;

				if( windowWidth >= breakPointLg ) {
					$('html, body').animate({
						scrollTop: $scrollToTop.offset().top - $scrollToTop.data('pafe-multi-step-form-scroll-to-top-offset-desktop') }
					, 300);
				}

				if( windowWidth >= breakPointMd && windowWidth < breakPointLg ) {
					$('html, body').animate({
						scrollTop: $scrollToTop.offset().top - $scrollToTop.data('pafe-multi-step-form-scroll-to-top-offset-tablet') }
					, 300);
				}

				if( windowWidth < breakPointMd ) {
					$('html, body').animate({
						scrollTop: $scrollToTop.offset().top - $scrollToTop.data('pafe-multi-step-form-scroll-to-top-offset-mobile') }
					, 300);
				}
			}
		}
	});

	$(document).on('click','[data-pafe-form-builder-nav="prev"]',function(){
		var formID = $(this).data('pafe-form-builder-nav-form-id'),
			$wrapper = $(this).closest('.pafe-multi-step-form__content-item');

		$wrapper.removeClass('active');
		$wrapper.prev().addClass('active');
		var index = $wrapper.index(),
			$progressbarItem = $(this).closest('.pafe-multi-step-form').find('.pafe-multi-step-form__progressbar-item');
		$progressbarItem.eq(index).removeClass('active');

		var $scrollToTop = $(this).closest('[data-pafe-multi-step-form-scroll-to-top]');

		if ($scrollToTop.length > 0) {
			var breakPointMd = $('[data-pafe-break-point-md]').data('pafe-break-point-md'),
				breakPointLg = $('[data-pafe-break-point-lg]').data('pafe-break-point-lg'),
				windowWidth = window.innerWidth;

			if( windowWidth >= breakPointLg ) {
				$('html, body').animate({
					scrollTop: $scrollToTop.offset().top - $scrollToTop.data('pafe-multi-step-form-scroll-to-top-offset-desktop') }
				, 300);
			}

			if( windowWidth >= breakPointMd && windowWidth < breakPointLg ) {
				$('html, body').animate({
					scrollTop: $scrollToTop.offset().top - $scrollToTop.data('pafe-multi-step-form-scroll-to-top-offset-tablet') }
				, 300);
			}

			if( windowWidth < breakPointMd ) {
				$('html, body').animate({
					scrollTop: $scrollToTop.offset().top - $scrollToTop.data('pafe-multi-step-form-scroll-to-top-offset-mobile') }
				, 300);
			}
		}
	});
});