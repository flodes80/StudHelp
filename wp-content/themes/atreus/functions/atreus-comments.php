<?php function atreus_comments( $comment, $args, $depth ) { ?>
    <div class="card" id="comment-<?php comment_ID() ?>">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <?php
                            if ( $args['avatar_size'] != 0 ) {
                                $avatar_size = ! empty( $args['avatar_size'] ) ? $args['avatar_size'] : 70;
                                echo get_avatar($comment, $avatar_size);
                            }
                        ?>
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4"><?php echo get_comment_author_link(); ?></p>
                    <p class="subtitle is-6">
                    <a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ); ?>"><?php
						/* translators: 1: date, 2: time */
						printf(
							__( '%1$s at %2$s', 'atreus' ),
							get_comment_date(),
							get_comment_time()
						); ?>
					</a><?php edit_comment_link( __('(Edit)', 'atreus' ), '  ', '' ); ?>
                    </p>
                </div>
            </div>

            <div class="content">
                <p><?php comment_text(); ?></p>
                <?php
				// Display comment moderation text
				if ( $comment->comment_approved == '0' ) { ?>
					<em class="comment-awaiting-moderation"><?php _e('Your comment is awaiting moderation.', 'atreus'); ?></em><br/><?php
				} ?>
                <p>
                    <?php
                    // Display comment reply link
                    comment_reply_link( array_merge( $args, array(
                        'add_below' => $add_below,
                        'depth'     => $depth,
                        'max_depth' => $args['max_depth']
                    ) ) ); ?>
                </p>
            </div>
        </div>
    </div>
    <br>
<?php }