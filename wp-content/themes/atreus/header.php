<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="<?php bloginfo('charset'); ?>" />
	
	<?php wp_head(); ?> 
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'atreus' ); ?></a>
    <!-- Header -->
    <section class="hero <?php if(get_theme_mod('atreus_theme_colour_setting')==false){echo esc_html('is-link');}else{echo esc_html(get_theme_mod('atreus_theme_colour_setting'));} ?>">
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="<?php echo esc_url(home_url());?>">
                            <?php
                                $custom_logo_id = get_theme_mod('custom_logo');
                                $logo = wp_get_attachment_image_src($custom_logo_id , 'full');

                                if (has_custom_logo()) 
                                {
                            ?>

                            <img src="<?php echo esc_url($logo[0]); ?>" alt="<?php echo esc_html(get_bloginfo('name')); ?>">

                            <?php
                                } 
                                else 
                                {
                                    echo esc_html(get_bloginfo('name'));
                                }
                            ?>
                        </a>
                        <span class="navbar-burger burger" data-target="navmenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navmenu" class="navbar-menu">
                        <div class="navbar-end">
                            <?php 
                                if (has_nav_menu('hero-header-menu'))
                                {
                                    $headerMenuParameters = array(
                                        'container'       => false,
                                        'echo'            => false,
                                        'items_wrap'      => '%3$s',
                                        'depth'           => 0,
                                        'theme_location'  => 'hero-header-menu'
                                    );
                            
                                    echo strip_tags(wp_nav_menu($headerMenuParameters), '<a>');
                                }
                            ?>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <div class="hero-body">
            <div class="container">
                <?php
                if (get_theme_mod('header_text') !== 0)
                {
                    ?>
                    <h1 class="title">
                        <?php echo esc_html(get_bloginfo('name')); ?>
                    </h1>
                    <h2 class="subtitle">
                        <?php echo esc_html(get_bloginfo('description')); ?>
                    </h2>
                    <?php                          
                }
                ?>
            </div>
        </div>

        <?php 
            if (has_nav_menu('hero-footer-menu'))
            {
                $footerMenuParameters = array(
                    'container_class' => 'hero-foot tabs',
                    'menu_class'      => 'container',
                    'echo'            => true,
                    'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                    'depth'           => 0,
                    'theme_location'  => 'hero-footer-menu'
                );
        
                wp_nav_menu($footerMenuParameters);
            }
        ?>
    </section>