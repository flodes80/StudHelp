<?php
$hide = apply_filters('peepso_action_activity_hide_before', false, $ID, $act_module_id);
if($hide) {
	return;
}

$PeepSoActivity = PeepSoActivity::get_instance();
$PeepSoUser= PeepSoUser::get_instance($post_author);
$PeepSoPrivacy	= PeepSoPrivacy::get_instance();

$scheduled = ($post_status == 'future') ? TRUE : FALSE;


$comments_open = TRUE;
if (strlen(get_post_meta($ID, 'peepso_disable_comments', TRUE))) {
    $comments_open = FALSE;
}
?>

<div class="ps-stream ps-js-activity <?php echo (TRUE == $pinned) ? 'ps-stream__post--pinned ps-js-activity-pinned' : ''?> ps-js-activity--<?php echo $act_id; ?>"
    data-id="<?php echo $act_id; ?>" data-post-id="<?php echo $ID; ?>" data-author="<?php echo $post_author ?>"
    data-module-id="<?php echo $act_module_id ?>">

	<?php
	// if post is pinned and it's visibility is limited, display a warning
	if( PeepSo::is_admin() && TRUE == $pinned && !in_array($act_access, array(PeepSo::ACCESS_MEMBERS, PeepSo::ACCESS_PUBLIC)) ) {

		echo '<div class="ps-alert ps-alert-warning ps-stream__post-alert reset-gap">',__('This pinned post will not display to all users because of its privacy settings.', 'peepso-core'),'</div>';
	}
	?>

	<div class="ps-stream__post-pin" style="<?php echo (TRUE == $pinned) ? 'display:block':''?>">
		<span><?php _e('Pinned', 'peepso-core');?></span>
        <?php


        ?>
	</div>

	<div class="ps-stream-header">

		<!-- post author avatar -->
		<div class="ps-avatar-stream">
			<a href="<?php echo $PeepSoUser->get_profileurl(); ?>">
				<img data-author="<?php echo $post_author; ?>" src="<?php echo $PeepSoUser->get_avatar();?>" alt="<?php echo $PeepSoUser->get_fullname(); ?> avatar" />
			</a>
		</div>
		<!-- post meta -->
		<div class="ps-stream-meta">
			<div class="ps-post__title">
				<?php $PeepSoActivity->post_action_title(); ?>
				<span class="ps-post__subtitle-extras ps-js-activity-extras"><?php
					$post_extras = apply_filters('peepso_post_extras', array());
					if(is_array($post_extras)) {
						echo implode(' ', $post_extras);
					}
				?></span>
			</div>
			<span class="ps-post__time ps-stream-time" data-timestamp="<?php $PeepSoActivity->post_timestamp(); ?>">
				<a href="<?php $PeepSoActivity->post_link(); ?>">
					<?php $PeepSoActivity->post_age(); ?>
				</a>

                <a href="<?php $PeepSoActivity->post_link(); ?>">
                <?php $PeepSoActivity->post_permalink(); ?>
                </a>

			</span>

			<?php
			$PeepSoActivity->post_edit_notice();
			?>
			
			<?php if (($post_author == get_current_user_id() || PeepSo::is_admin()) && apply_filters('peepso_activity_has_privacy', TRUE)) { ?>
			<span class="ps-post__privacy ps-dropdown ps-dropdown-privacy ps-stream-privacy ps-js-dropdown ps-js-privacy--<?php echo $act_id; ?>">
				<a href="#" data-value="" class="ps-dropdown__toggle ps-js-dropdown-toggle">
					<span class="dropdown-value">
						<?php $PeepSoActivity->post_access(); ?>
					</span>
				<!--<span class="dropdown-caret ps-icon-caret-down"></span>-->
				</a>
				<?php wp_nonce_field('change_post_privacy_' . $act_id, '_privacy_wpnonce_' . $act_id); ?>
				<?php echo $PeepSoPrivacy->render_dropdown('activity.change_post_privacy(this, ' . $act_id . ')'); ?>
			</span>
			<?php } ?>
		</div>

		<!-- post options -->
		<div class="ps-stream-options">
			<?php $PeepSoActivity->post_options(); ?>
		</div>
	</div>

	<!-- post body -->
	<div class="ps-stream-body">
        <?php if(!strlen($human_friendly)) { ?>
            <input type="hidden" name="peepso_set_human_friendly" value="<?php echo $ID;?>" />
        <?php }?>




		<div class="ps-stream-attachment cstream-attachment ps-js-activity-content ps-js-activity-content--<?php echo $act_id; ?>"><?php $PeepSoActivity->content(); ?></div>
		<div class="ps-js-activity-edit ps-js-activity-edit--<?php echo $act_id; ?>" style="display:none"></div>
		<div class="ps-stream-attachments cstream-attachments"><?php $PeepSoActivity->post_attachment(); ?></div>
	</div>

	<!-- post actions -->
    <?php if(!$scheduled) {  ?>
	<div class="ps-stream-actions stream-actions" data-type="stream-action"><?php $PeepSoActivity->post_actions(); ?></div>
    <?php } ?>

	<?php if(!$scheduled) { do_action('peepso_post_before_comments'); } ?>

	<?php //do_action('peepso_post_before_comments'); ?>
	<div class="ps-comment cstream-respond wall-cocs" id="wall-cmt-<?php echo $act_id; ?>">
		<div class="ps-comment-container comment-container ps-js-comment-container ps-js-comment-container--<?php echo $act_id; ?>"
			data-act-id="<?php echo $act_id ?>"
			data-post-id="<?php echo $ID ?>"
			data-comments-open="<?php echo intval($comments_open) ?>">
			<?php $PeepSoActivity->show_recent_comments(); ?>
		</div>

		<?php $show_commentsbox = apply_filters('peepso_commentsbox_display', apply_filters('peepso_permissions_comment_create', TRUE), $ID); ?>

        <?php if(!$comments_open) { $show_commentsbox = FALSE; } ?>

        <?php if($scheduled) { $show_commentsbox = FALSE; } ?>

        <?php if(is_user_logged_in() && !$comments_open) { ?>
        <div class="ps-comments-closed">
            <?php echo __('Commments are closed', 'peepso-core');?>
        </div>
        <?php }  ?>

		<?php if (is_user_logged_in() && $show_commentsbox ) { ?>
		<div id="act-new-comment-<?php echo $act_id; ?>" class="ps-comment-reply cstream-form stream-form wallform ps-js-comment-new ps-js-newcomment-<?php echo $act_id; ?>"
				data-id="<?php echo $act_id; ?>" data-type="stream-newcomment" data-formblock="true">
			<a class="ps-avatar cstream-avatar cstream-author" href="<?php echo PeepSouser::get_instance()->get_profileurl(); ?>">
				<img data-author="<?php echo $post_author; ?>" src="<?php echo PeepSoUser::get_instance()->get_avatar(); ?>" alt="" />
			</a>
			<div class="ps-textarea-wrapper cstream-form-input">
				<textarea
					data-act-id="<?php echo $act_id;?>"
					class="ps-textarea cstream-form-text"
					name="comment"
					oninput="return activity.on_commentbox_change(this);"
					placeholder="<?php _e('Write a comment...', 'peepso-core');?>"></textarea>
				<?php
				// call function to add button addons for comments
				$PeepSoActivity->show_commentsbox_addons();
				?>
			</div>
			<div class="ps-comment-send cstream-form-submit" style="display:none;">
				<div class="ps-comment-loading" style="display:none;">
					<img src="<?php echo PeepSo::get_asset('images/ajax-loader.gif'); ?>" alt="" />
					<div> </div>
				</div>
				<div class="ps-comment-actions" style="display:none;">
					<button onclick="return activity.comment_cancel(<?php echo $act_id; ?>);" class="ps-btn ps-button-cancel"><?php _e('Clear', 'peepso-core'); ?></button>
					<button onclick="return activity.comment_save(<?php echo $act_id; ?>, this);" class="ps-btn ps-btn-primary ps-button-action" disabled><?php _e('Post', 'peepso-core'); ?></button>
				</div>
			</div>
		</div>
		<?php } // is_user_loggged_in ?>
	</div>
</div>