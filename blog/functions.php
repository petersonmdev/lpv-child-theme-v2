<?php

function get_excerpt($count){
  $permalink = get_permalink($post->ID);
  $excerpt = get_the_excerpt();
  $excerpt = strip_tags($excerpt);
  $excerpt = substr($excerpt, 0, $count);
  $excerpt = $excerpt.'  [...]';
  return $excerpt;
}

/*///////////////////////////////////////////////
////////// WORDPRESS DEFAULT SETTINGS
////////////////////////////*/
show_admin_bar(false);
add_theme_support('post-thumbnails');
add_theme_support('menus');
add_theme_support('woocommerce', array(
    'thumbnail_image_width' => 300,
    'gallery_thumbnail_image_width' => 200,
    'single_image_width' => 450,
    )
);
add_theme_support('html5', array(
'search-form',
'comment-form',
'comment-list',
'gallery',
'caption',
));



/*///////////////////////////////////////////////
////////// IMPORT DE LIBS
////////////////////////////*/
// Register Custom Navigation Walker
//require_once('includes/wp_bootstrap_navwalker.php');
// Register Custom Navigation Walker
//require_once('includes/wp_bootstrap_pagination.php');


/*///////////////////////////////////////////////
////////// LOAD DE SCRIPTS
////////////////////////////*/
function phenatrim_scripts()
{  

    //////////////////////////////////
    // STYLES 
    //////////////////////////////////
    wp_enqueue_style('theme-style', get_stylesheet_uri());
    wp_enqueue_style('main-css', get_template_directory_uri() . '/assets/css/main.css');

    //////////////////////////////////
    // SCRIPTS
    //////////////////////////////////
    //wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.3.1.min.js');
    wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/js/main.js');

}
add_action('wp_enqueue_scripts', 'phenatrim_scripts');