<?php get_header(); ?>

    <!-- Main Content -->
    <div class="container">
        <div class="content">
            <div class="columns">
                <div class="column">
					<?php 
					if (have_posts()) : while (have_posts()) : the_post();
						get_template_part('content-single', get_post_format());
					endwhile; endif; 
					?>
                </div>
			</div>
        </div>
	</div>
	<!-- End of Main Content -->

<?php get_footer(); ?>