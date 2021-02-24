<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">

    <?php if(is_checkout()): ?>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <?php endif; ?>

    <?php wp_head(); ?>    
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/css/__development.css">
    <!-- <link rel="stylesheet" href=<?php //echo get_stylesheet_directory_uri(); ?>/assets/css/__all_styles_production.min.css> -->
    <?php get_template_part( 'style', 'custom' ); ?>

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="<?php echo get_stylesheet_directory_uri(); ?>/assets/js/main.js"></script>

   
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

    <!-- //////////////////////////////////////////////////////////////////
    ////////////// TABOOLA
    ////////////////////////////////////// -->

    <!-- Taboola Pixel Code -->
    <!-- <script>
        _tfa.push({notify: 'event', name: 'start_checkout', id: 1206534});
    </script>
    <noscript>
        <img src='//trc.taboola.com/1206534/log/3/unip?en=start_checkout'
            width='0' height='0' style='display:none'/>
    </noscript> -->
    <!-- End of Taboola Pixel Code -->

  </head>

  <body <?php body_class(); ?>>
   <div id="page" class="site">

    <!-- HEADER CHECKOUT -->
    <?php if( is_checkout() ): ?>
      <?php if ( is_order_received_page() ): ?>
        <section class="section-list bg-white bg-seta content-checkout-before">
          <div class="container">
            <div class="row">
              <div class="hidden-xs col-sm-6 col-md-6 col-lg-6" >
                <div class="col-xs-3 col-md-2 col-lg-2">
                  <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/imagens/lock-cert.png" alt="" class="img-responsive list-icon">
                </div>
                <div class="col-lg-10 col-md-10 col-xs-9 list-column">
                  <span class="list-titles"><strong>Garantia de satisfação</strong></span>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" style="display:grid; align-items:center;">
                <?php 
                  $custom_logo_id = get_theme_mod( 'custom_logo' );
                  $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
                ?>
                <img src=<?php echo $image[0]; ?> alt="" class="img-responsive list-icon" style="max-width: 120px;">
              </div>
              <div class="clearfix visible-xs-block"></div>
            </div>
          </div>
        </section>

      <?php else: ?>

        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <ul class="list-inline header-options text-center">
                <li>
                  <span class="text-center"><span class="aviso">Aviso:</span> Devido a grande demanda popular na TV, nossas lojas estão com dificuldades em manter o estoque.</span><br> <span style='font-size:0.8em;' class='text-center'>À partir de hoje <span  id='data'></span>, teremos estoque limitado para envio em 24 horas.</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <!-- GRID VANTAGES -->
        <section class="section-list bg-white bg-seta topo-checkout">
          <div class="container">
            <div class="row line-icon-desk">
              <div class="col-4 row">
                <div class="col-3 col-mg-icon">
                  <i class="flaticon-like"></i>
                </div>
                <div class="col-9 list-column">
                  <span class="list-titles">Garantia de satisfação</span>
                </div>
              </div>
              <div class="col-4 row">
                <div class="col-3 col-mg-icon">
                  <i class="flaticon-truck"></i>
                </div>
                <div class="col-9 list-column">
                  <span class="list-titles">Entrega rápida para todo o Brasil</span>
                </div>
              </div>
              <div class="col-4 row">
                <div class="col-3 col-mg-icon">
                  <i class="flaticon-shield"></i>
                </div>
                <div class="col-9 list-column">
                  <span class="list-titles">Compra totalmente segura</span>
                </div>
              </div>
            </div>
            <div class="row line-icon-desk">
              <div class="col-4 row">
                <div class="col-3 col-mg-icon">
                  <i class="flaticon-padlock"></i>
                </div>
                <div class="col-9 list-column">
                  <span class="list-titles">Privacidade protegida</span>
                </div>
              </div>
              <div class="col-4 row">
                <div class="col-3 col-mg-icon">
                  <i class="flaticon-payment"></i>
                </div>
                <div class="col-9 list-column">
                  <span class="list-titles">Cartão de crédito em até <?php echo maxInstallmentsPagarme(); ?>x sem juros</span>
                </div>
              </div>
              <div class="col-4 row">
                <div class="col-3 col-mg-icon">
                  <i class="flaticon-phone-call"></i>
                </div>
                <div class="col-9 list-column">
                  <span class="list-titles">Ligue para nós <br>(62) 3639-2975</span>
                </div>
              </div>
            </div>
            <div class="row line-icon-mobile">
              <div class="col-6 row">
                <div class="col-3 col-mg-icon">
                  <i class="flaticon-like"></i>
                </div>
                <div class="col-9 list-column">
                  <span class="list-titles">Garantia de satisfação</span>
                </div>
              </div>
              <div class="col-6 row">
                <div class="col-3 col-mg-icon">
                  <i class="flaticon-truck"></i>
                </div>
                <div class="col-9 list-column">
                  <span class="list-titles">Entrega rápida para todo o Brasil</span>
                </div>
              </div>
            </div>
            <div class="row line-icon-mobile">
              <div class="col-6 row">
                <div class="col-3 col-mg-icon">
                  <i class="flaticon-shield"></i>
                </div>
                <div class="col-9 list-column">
                  <span class="list-titles">Compra totalmente segura</span>
                </div>
              </div>
              <div class="col-6 row">
                <div class="col-3 col-mg-icon">
                  <i class="flaticon-padlock"></i>
                </div>
                <div class="col-9 list-column">
                  <span class="list-titles">Privacidade protegida</span>
                </div>
              </div>
            </div>
            <div class="row line-icon-mobile">
              <div class="col-6 row">
                <div class="col-3 col-mg-icon">
                  <i class="flaticon-payment"></i>
                </div>
                <div class="col-9 list-column">
                  <span class="list-titles">Cartão de crédito em até <?php echo maxInstallmentsPagarme(); ?>x sem juros</span>
                </div>
              </div>
              <div class="col-6 row">
                <div class="col-3 col-mg-icon">
                  <i class="flaticon-phone-call"></i>
                </div>
                <div class="col-9 list-column">
                  <span class="list-titles">Ligue para nós <br>(62) 3639-2975</span>
                </div>
              </div>
            </div>
            <div class="clearfix visible-xs-block"></div>
          </div>
        </section>
        
        <script type="text/javascript">
          var m_names = new Array("Janeiro", "Fevereiro", "Março", 
          "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", 
          "Outubro", "Novembro", "Dezembro");

          var d = new Date();
          var curr_date = d.getDate();
          var curr_month = d.getMonth();
          var curr_year = d.getFullYear();

          document.getElementById("data").innerHTML = curr_date + " de " + m_names[curr_month] 
          + " de " + curr_year;
        </script>
        <!-- FIM HEADER CHECKOUT -->

      <?php endif; ?>

    <?php else: ?>

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
    <?php endif; ?>
