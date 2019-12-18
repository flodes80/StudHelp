<?php get_header(); ?>

    <!-- Main Content -->
    <div class="container">
        <div class="content">
			<?php 
			if (have_posts()) : while (have_posts()) : the_post();
				get_template_part('content-single', get_post_format());
				
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; endif; 
			?>
        </div>
	</div>
	<!-- End of Main Content -->

<?php get_footer(); ?>