<?php if (post_password_required()) { return; } ?>

<div id="comments" class="comments">
    <?php if ( have_comments() ) : ?>
		<p>
            <?php
                if ('1' == get_comments_number()) 
                {
                    /* translators: %s: post title */
                    printf( _x( 'One comment on "%s"', 'comments title', 'atreus' ), get_the_title() );
                } 
                else 
                {
                    printf(
                            /* translators: 1: number of comments, 2: post title */
                            _nx(
                                    '%1$s comment on "%2$s"',
                                    '%1$s comments on "%2$s"',
                                    get_comments_number(),
                                    'comments title',
                                    'atreus'
                            ),
                            number_format_i18n(get_comments_number()),
                            get_the_title()
                    );
                }

            ?>
        </p>
        
        <?php wp_list_comments( array(
            'callback' => 'atreus_comments'
        ) ); ?>
	<?php endif; ?>

	<?php if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) : ?>
		<p class="no-comments">
            <?php _e('Comments are closed.', 'atreus'); ?>
		</p>
    <?php endif; ?>
    
    <p class="alignleft"><?php next_comments_link(__('Newer comments', 'atreus')); ?></p>
    <p class="alignright"><?php previous_comments_link(__('Older comments', 'atreus')); ?></p>
    <br>
    <hr />
    <?php 
    $args = array(
        'fields' => apply_filters('comment_form_default_fields', array(
            'author' => '<div class="field"><label class="label">' . __('Name', 'atreus') . ' *</label><div class="control"><input class="input" id="author" name="author" type="text" value="' . esc_attr($commenter['comment_author']) . '"' . $aria_req . ' /></div></div>',
            'email' => '<div class="field"> <label class="label">' . __('Email', 'atreus') . ' *</label> <div class="control"><input id="email" name="email" class="input" type="email" value="' . esc_attr( $commenter['comment_author_email']) . '" ' . $aria_req . ' /></div></div>'
        )),
        'comment_field' => '<div class="field"><label class="label">' . __('Comment', 'atreus') . ' *</label><div class="control"><textarea id="comment" name="comment" class="textarea" aria-required="true"></textarea></div></div>',
        'class_submit' => 'button ' . esc_html(get_theme_mod('atreus_theme_colour_setting'))
        );

    comment_form($args); ?>
</div>