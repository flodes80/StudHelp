<?php get_header(); ?>

    <!-- Main Content -->
    <div id="content" class="container">
        <div class="content">
            <div class="columns">
                <div class="column">
					<?php 
					if (have_posts()) : while (have_posts()) : the_post();
						get_template_part('content', get_post_format());
					endwhile; 
					?>

					<div class="alignleft"><?php previous_posts_link(__('Newer posts', 'atreus')); ?></div>
					<div class="alignright"><?php next_posts_link(__('Older posts', 'atreus')); ?></div>
					
					<?php wp_link_pages(); ?>
					<?php
					endif; 
					?>
                </div>

				<?php 
				if (is_active_sidebar('custom-side-bar')) :
				?>
				<div class="column is-one-quarter">
					<?php get_sidebar(); ?>
				</div>
				<?php
				endif; 
				?>
			</div>
        </div>
	</div>
	<!-- End of Main Content -->

<?php get_footer(); ?>