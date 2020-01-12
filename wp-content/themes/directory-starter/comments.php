<a id="comments"></a>
<?php if($comments) : ?>  
    <ol class="comments">  
    <?php foreach($comments as $comment) : ?>  
        <li class="studhelp-comment" id="comment-<?php comment_ID(); ?>" class="<?php if ($comment->user_id == 1) echo "authcomment";?>">      
            <cite><h3><?php echo get_avatar(get_comment_author_email(), 48, $default_avatar); ?> <?php comment_author_link(); ?> <small>le <?php comment_date(); ?></small></h3></cite><br />
            <?php comment_text(); ?>  
        </li>  
    <?php endforeach; ?>  
    </ol>  
<?php endif; ?> 
<?php if(comments_open()) : ?>
	<h3>Ajouter un commentaire</h3>
    <?php if(get_option('comment_registration') && !$user_ID) : ?>  
        <p>You must be <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?redirect_to=<?php echo urlencode(get_permalink()); ?>">logged in</a> to post a comment.</p><?php else : ?>  
        <form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform"> 
            <p><input type="text" name="comment" id="comment"></textarea></p>  
            <?php //show_subscription_checkbox(); ?>
            <p><input name="submit" type="submit" id="submit" tabindex="5" value="Poster commentaire" />  
            <input type="hidden" name="comment_post_ID" value="<?php echo $id; ?>" /></p>  
            <?php do_action('comment_form', $post->ID); ?>  
        </form>  
    <?php endif; ?>  
<?php else : ?>  
    <p>The comments are closed.</p>  
<?php endif; ?>