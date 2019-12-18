<?php
if (has_post_thumbnail())
{
?>
<div class="columns single-margin">
<div class="column">
<?php
}
?>
<div id="post-<?php the_ID(); ?>" class="post-single" <?php post_class(); ?>>
<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
<p class="footnote"><?php _e('Posted by', 'atreus'); ?> <?php the_author_posts_link(); ?> <?php _e('on', 'atreus'); ?> <?php echo esc_html(get_the_date()); ?></p>
<hr />
<?php the_content(); ?>
<p><?php the_tags( '<span class="tag is-medium">', '</span> <span class="tag is-medium">', '</span>' ); ?></p>
<hr />
</div>
<?php
if (has_post_thumbnail())
{
?>
</div>
<div id="post-<?php the_ID(); ?>-feature" class="column is-4 post-single-img">

<?php
$large_image_url = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full');

if (!empty($large_image_url[0])) 
{
    ?>
        <img src="<?php echo esc_url($large_image_url[0]) ?>" />
    <?php
}
?>
</div>
</div>
<?php
}
?>