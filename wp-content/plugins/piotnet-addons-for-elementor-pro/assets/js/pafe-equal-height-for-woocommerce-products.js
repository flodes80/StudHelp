jQuery(document).ready(function( $ ) {
	function pafeEqualHeightForWoocommerceProducts() {

		$('[data-pafe-equal-height-for-woocommerce-products]').each(function(){
			var $ulProducts = $(this).find('ul.products'),
				$items = $ulProducts.find('.product'),
				itemsPerRows = ($ulProducts.css('grid-template-columns').match(/px/g) || []).length;

			$items.find('.woocommerce-loop-product__title').height('auto');

			if ($items.length > 0) {
				if (itemsPerRows > 0) {
					var rows = Math.ceil( $items.length / itemsPerRows );
					for (var j = 0; j < rows; j++) {
						var titleHeight = [];
						
						for (var z = j*itemsPerRows; z < (j+1)*itemsPerRows; z++) {
							titleHeight.push($items.eq(z).find('.woocommerce-loop-product__title').height());
						}

						var maxHeightTitle = Math.max.apply(Math, titleHeight);

						for (var z = j*itemsPerRows; z < (j+1)*itemsPerRows; z++) {
							$items.eq(z).find('.woocommerce-loop-product__title').height(maxHeightTitle + 'px');
						}
					}
				}
			}

		});
		
	}

	$(window).on('load resize', function() {
		pafeEqualHeightForWoocommerceProducts();
	});
});