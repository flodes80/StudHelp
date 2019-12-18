<?php

require_once get_parent_theme_file_path( '/functions/atreus-comments.php' );

if ( ! isset( $content_width ) ) 
{
	$content_width = 600;
}

function atreus_after_setup_theme() 
{
    $defaults = array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array('site-title', 'site-description'),
    );

    add_theme_support('custom-logo', $defaults);
    add_theme_support('title-tag');
    add_theme_support('automatic-feed-links');
    add_theme_support('post-thumbnails'); 
}

add_action( 'after_setup_theme', 'atreus_after_setup_theme' );

function atreus_init() 
{   
    register_nav_menus(
        array(
            'hero-header-menu' => __('Hero Header Menu', 'atreus'),
            'hero-footer-menu' => __('Hero Footer Menu', 'atreus')
        )
    );
}

add_action( 'init', 'atreus_init' );

function atreus_wp_nav_menu($nav, $args) 
{
    if( $args->theme_location == 'hero-header-menu' )
    {
        return preg_replace('/<a /', '<a class="navbar-item"', $nav);
    }

    return $nav;
}

add_filter('wp_nav_menu', 'atreus_wp_nav_menu', 10, 2);

function atreus_widgets_init() 
{
    register_sidebar(
        array (
            'name' => __('Sidebar', 'atreus'),
            'id' => 'custom-side-bar',
            'description' => __('Sidebar', 'atreus'),
            'before_widget' => '<div class="widget">',
            'after_widget' => "</div>",
            'before_title' => '<h3>',
            'after_title' => '</h3>',
        )
    );
}

add_action( 'widgets_init', 'atreus_widgets_init' );

function atreus_get_search_form($form) 
{
    $form = '<form role="search" method="get" id="searchform" class="searchform" action="' . esc_url( '/' ) . '" >
        <div class="field is-grouped">
            <div class="control">
                <input class="input" type="text" value="' . get_search_query() . '" name="s" id="s" placeholder="'. __('Search this site', 'atreus') .'">
            </div>
            <div class="control">
                <input type="submit" class="button '. esc_attr(get_theme_mod('atreus_theme_colour_setting')) . '" id="searchsubmit" value="'. __('Search', 'atreus') .'">
            </div>
        </div>
    </form>';

    return $form;
}

add_filter( 'get_search_form', 'atreus_get_search_form', 100 );

function atreus_comment_form_before() 
{
    if( get_option( 'thread_comments' ) ) 
    {
        wp_enqueue_script( 'comment-reply' );
    }
}

add_action( 'comment_form_before', 'atreus_comment_form_before' );

function atreus_enqueue_scripts() 
{
    wp_enqueue_script('fontawesome', get_template_directory_uri() . '/js/fontawesome.js', false, '5.9.0', 'all');
    wp_enqueue_style('bulma', get_template_directory_uri() . '/css/bulma.min.css', false, '0.7.4', 'all');
    wp_enqueue_style('atreus_style', get_stylesheet_uri());
    wp_enqueue_script('atreus_main', get_template_directory_uri() . '/js/main.js', false, '1.0', 'all');
}

add_action( 'wp_enqueue_scripts', 'atreus_enqueue_scripts' );

function atreus_customize_register($wp_customize) 
{
    $wp_customize -> add_section('atreus_theme_colour_section', array(
        'title'      => __('Theme Colour', 'atreus'),
        'priority'   => 30,
        'capability'  => 'edit_theme_options',
        'description' => __('Allows you to customize settings for Theme.', 'atreus'),
    ));

    $wp_customize -> add_setting('atreus_theme_colour_setting', array(
        'default'    => 'is-link',
        'type'       => 'theme_mod',
        'capability' => 'edit_theme_options',
        'sanitize_callback' => 'esc_html'
    ));

    $wp_customize -> add_control(new WP_Customize_Control($wp_customize, 'atreus_them_colour_control', array(
       'label'       => __('Select Theme Colour', 'atreus'),
       'description' => __('Using this option you can change the theme colors', 'atreus'),
       'settings'    => 'atreus_theme_colour_setting',
       'priority'    => 10,
       'section'     => 'atreus_theme_colour_section',
       'type'        => 'select',
       'choices'     => array(
            'is-link'    => __('Blue', 'atreus'),
            'is-success' => __('Green', 'atreus'),
            'is-danger'  => __('Red', 'atreus'),
            'is-warning' => __('Yellow', 'atreus'),
            'is-primary' => __('Turqoise', 'atreus')
        )
   )));
}

add_action( 'customize_register', 'atreus_customize_register' );