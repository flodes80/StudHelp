<?php

if ( isset( $html ) ) {
	// Wrap embed iframe with `ps-media-iframe` class.
	if ( preg_match( '/<iframe/i', $html ) ) {
		// Add specific class for WP_Embed content.
		$css_wpembed = '';
		if ( preg_match( '/wp-embedded-content/i', $html ) ) {
			$css_wpembed = ' ps-media-iframe--wpembed';
		}

		$html = '<div class="ps-media-iframe' . $css_wpembed . '">' . $html . '</div>';
	}
	echo $html;

} else {
	$linkAttr = 'rel="nofollow"';
	if (PeepSo::get_option('site_activity_open_links_in_new_tab', 1)) {
		$linkAttr = 'rel="nofollow noreferrer noopener" target="_blank"';
	}

?><div class="ps-media-video" data-mime-type="<?php esc_attr_e($mime_type) ?>">
	<?php if ( ! isset( $html ) && isset( $thumbnail ) ) { ?>
	<div class="ps-media-thumbnail video-avatar">
		<div class="media-object">
		<?php if ($thumbnail['type'] === 'audio') { ?>
			<audio preload="metadata" controls style="width:100%; padding:10px"
					src="<?php esc_attr_e($thumbnail['value']) ?>">
				<?php _e('Sorry, your browser does not support embedded audio.', 'peepso-core') ?>
			</audio>
		<?php } else if ($thumbnail['type'] === 'video') { ?>
			<video preload="metadata" controls style="width:100%">
				<source src="<?php esc_attr_e($thumbnail['value']) ?>"
					type="<?php esc_attr_e($mime_type) ?>">
				<?php _e('Sorry, your browser does not support embedded video.', 'peepso-core') ?>
			</video>
		<?php } else if ($thumbnail['type'] === 'image') { ?>
			<img src="<?php esc_attr_e($thumbnail['value']) ?>"
				alt="<?php esc_attr_e('preview thumbnail', 'peepso-core') ?>" />
		<?php } else {
			echo $thumbnail['value'];
		} ?>
		</div>
	</div>
	<?php } ?>
	<div class="ps-media-body video-description">
		<div class="ps-media-title">
			<a href="<?php esc_attr_e($url); ?>" <?php echo $linkAttr; ?>><?php echo $title; ?></a>
			<small>
				<a href="<?php esc_attr_e($url); ?>" <?php echo $linkAttr; ?>><?php echo $site_name; ?></a>
			</small>
		</div>
		<div class="ps-media-desc"><?php
			if (isset($description)) {
				echo wp_trim_words($description, 55);
			}
		?></div>
	</div>
</div><?php

}
