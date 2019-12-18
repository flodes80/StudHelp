<div id="post-<?php the_ID(); ?>" <?php post_class( 'post' ); ?>>
<?php
if ( has_post_thumbnail() ) 
{
?>
<div class="columns">
<div id="post-<?php the_ID(); ?>-thumb" class="column is-3 post-img">

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
<div class="column">
<?php
}
?>
<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
<hr />
<?php the_excerpt(); ?>
<hr />
<div class="columns">
<div class="column is-8"><p><?php the_tags( '<span class="tag">', '</span> <span class="tag">', '</span>' ); ?></p></div>
<div class="column"><div class="level-item"><p class="footnote"><?php _e('Posted by', 'atreus'); ?> <?php the_author_posts_link(); ?> <?php _e('on', 'atreus'); ?> <a href="<?php the_permalink(); ?>"><?php echo esc_html(get_the_date()); ?></a></p></div></div>
</div>
<?php
if ( has_post_thumbnail() ) 
{
?>
</div>
</div>
<?php
}
?>
</div>