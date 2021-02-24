<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package storefront
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <meta name="robots" content="noindex,nofollow">

    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

    <?php wp_head(); ?>

    <?php if(is_checkout()): ?>
    <!-- boostrap css e js -->
    <link href="<?php echo get_stylesheet_directory_uri(); ?>/assets/css/bootstrap/bootstrap.min.css" media="screen" rel="stylesheet" type="text/css">
    <link href="<?php echo get_stylesheet_directory_uri(); ?>/assets/css/bootstrap/bootstrap-grid.min.css" media="screen" rel="stylesheet" type="text/css">
    <?php endif; ?>

    <!-- Bibliteca landPage -->
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/css/main.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400" rel="stylesheet">

    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/css/animate.css">
    <script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/js/bootstrap-notify.min.js"></script>
    <script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/js/main.js"></script>
    <?php get_template_part( 'style', 'custom' ); ?>
    <!-- Fim da Biblioteca do site -->

    <!-- Biblioteca Blog -->
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() ?>/blog/assets/css/main.css">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() ?>/blog/assets/css/header.css"> 
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() ?>/blog/assets/css/single.css">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() ?>/blog/assets/css/sidebar.css">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() ?>/blog/assets/css/category.css">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() ?>/blog/assets/css/footer.css"> 
    <!-- Biblioteca Fim -->


    <script src="<?php echo get_stylesheet_directory_uri() .'/assets/js/bootstrap.js'; ?>" type="text/javascript" charset="utf-8"></script>
   
    <!-- //////////////////////////////////////////////////////////////////
    ////////////// PIXEL GOOGLE ANALYTICS
    ////////////////////////////////////// -->
    <?php if(have_rows('google_analytcs', 'option')): ?>
      <?php while(have_rows('google_analytcs', 'option')): ?>
        <?php the_row(); ?>
          <!-- Global site tag (gtag.js) - Google Ads: <?php echo get_sub_field('tag_name', 'option') .' - '. get_sub_field('tag_global', 'option'); ?> -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo get_sub_field('tag_global', 'option'); ?>"></script>
          <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '<?php echo get_sub_field("tag_global", "option"); ?>');
          </script>

      <?php endwhile; ?>
    <?php endif; ?>


        <!-- //////////////////////////////////////////////////////////////////
    ////////////// REMARKETING GOOGLE ADS
    ////////////////////////////////////// -->
    <?php
      if(have_rows('tag_de_remarketing', 'option')){

        while(have_rows('tag_de_remarketing', 'option')){
          the_row();
          $pagina = get_sub_field('pagina');

          foreach ($pagina as $key => $value) {
            if( is_page($value) ){
              echo "<script>".get_sub_field('global_tag_id')."</script>";
              echo "<script>".get_sub_field('snipet_id')."</script>";
            }
          }

        }

      }
    ?>

  </head>

  <body <?php body_class(); ?>>
   <div id="page" class="site">
      <header class="banner navbar navbar-default navbar-fixed-top" role="banner">
        <div class="topbar">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <ul class="list-inline header-options text-right">
                  <li>
                    <span class="click-to-call hidden-sm hidden-md hidden-lg"><span class="glyphicon glyphicon-earphone"></span> FALE CONOSCO: (62) 3639-2975</span>
                    <span class="call-us hidden-xs"><span class="glyphicon glyphicon-earphone"></span> FALE CONOSCO: (62) 3639-2975</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <!-- navbar-header inicio -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <div class="pull-right hidden-sm hidden-md hidden-lg xs-order">
              <ul id="menu-order-portugues" class="order-nav">
                <li class="btn-order menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-92053 active">
                  <a title="Encomendar" class="page-scroll" href="#order">Peça Agora</a>
                </li>
              </ul>
            </div>

            <?php $custom_logo_id = get_theme_mod( 'custom_logo' );
            $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
            ?>

            <a id="site-brand" class="navbar-brand" href="<?php echo get_site_url(); ?>">
              <img class="img-responsive" src="<?php echo $image[0]; ?>" alt="">
            </a>
          </div>
          <!-- "navbar-header fim -->

          <nav class="collapse navbar-collapse pull-right menu-topo-mobile" role="navigation">
            <ul id="menu-main-menu-portugues" class="nav navbar-nav">
              <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-92059">
                <a title="como funciona" class="page-scroll" href="<?php echo get_site_url(); ?>/#como-funciona">Como funciona</a>
              </li>
              
              <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-92063">
                <a title="ingredientes" class="page-scroll" href="<?php echo get_site_url(); ?>/#ingredientes">Ingredientes</a>
              </li>
              
              <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-92064">
                <a title="testemunhos" class="page-scroll" href="<?php echo get_site_url(); ?>/#historias">Histórias de Sucesso</a>
              </li>
              
              <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-92066">
                <a title="perguntas frequentes" class="page-scroll" href="<?php echo get_site_url(); ?>/#faq">Perguntas Frequentes</a>
              </li>
            </ul>

            <div class="pull-right hidden-xs">
              <ul id="menu-order-portugues-1" class="nav order-nav">
                <li class="btn-order menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-92053"><a title="Encomendar" class="page-scroll" href="#order">Peça Agora</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>