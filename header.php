<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

    <?php wp_head(); ?>

    <!-- Global site tag (gtag.js) - Google Ads: 609568653 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-609568653"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-609568653');
    </script>
    
    <!-- Cookies e identificação do usuário -->
    <script type="text/javascript" >
      window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
      ga('create', 'UA-191460005-1', { 'cookieDomain': 'slenzarx.com' } );
      // Plugins
      
      ga('send', 'pageview');
    </script>
                
    <script async src="https://www.google-analytics.com/analytics.js"></script>

    <?php if(is_front_page()) : ?>
      <!-- Page Home - [slenzarx.com/] -->
      <!-- Event snippet for Slenzarxcom / Home / Adicionar ao carrinho conversion page -->
      <script>
        gtag('event', 'conversion', {'send_to': 'AW-609568653/fpM-CMySjPsBEI2P1aIC'});
      </script>
    <?php elseif( is_checkout() ): ?>
      <?php if ( is_order_received_page() ): ?>
        <!-- Page Confirmacao |  [slenzarx.com/finalizar-compra/order-received/0000/?key=wc_order_xxxxxxxxxxxx] -->
        <!-- Event snippet for Pixel AW - LP2 Slenza / Order-Receive -->
        <script>
          gtag('event', 'conversion', {
              'send_to': 'AW-609568653/fN4xCMvI4vgBEI2P1aIC',
              'transaction_id': ''
          });
        </script>
      <?php else: ?>
        <!-- Page Checkout - [slenzarx.com/finalizar-compra/] -->
        <!-- Event snippet for Pixel AW - LP2 Slenza Checkout / Iniciar finalização de compra -->
        <script>
          gtag('event', 'conversion', {'send_to': 'AW-609568653/j8FjCKbowPgBEI2P1aIC'});
        </script>
      <?php endif; ?>
    <?php endif; ?>

  </head>

  <body <?php body_class(); ?>>
    <!-- HEADER CHECKOUT -->
    <?php if( is_checkout() ): ?>
      <?php if ( is_order_received_page() ): ?>
        <section class="section-page-thankyou">
          <div class="container">
            <div class="row">
              <div class="d-none d-sm-block col-6" >
                <div class="col-12 list-column">
                  <span class="list-titles"><i class="flaticon-padlock"></i><strong>Garantia de satisfação</strong></span>
                </div>
              </div>
              <div class="col-12 col-sm-6 img-logo">
                <?php 
                  $custom_logo_id = get_theme_mod( 'custom_logo' );
                  $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
                ?>
                <img src=<?php echo $image[0]; ?> alt="" class="img-responsive d-block" style="max-width: 120px;">
              </div>
              <div class="clearfix visible-xs-block"></div>
            </div>
          </div>
        </section>

      <?php else: ?>

        <div class="container-fluid content-escassez">
          <div class="row">
            <div class="col-12">
              <p class="m-0 text-center p-2">
                <span class="d-block pt-1"><span class="aviso">Aviso:</span> Devido a grande demanda popular na TV, nossas lojas estão com dificuldades em manter o estoque.</span>
                <span class='d-block date-escassez pt-2 pb-1'>À partir de hoje <span id='data'></span>, teremos estoque limitado para envio em 24 horas.</span>
              </p>
            </div>
          </div>
        </div>

        <!-- GRID VANTAGES -->
        <section class="section-checkout-icon py-2">
          <div class="container">
            <div class="row row-cols-lg-4 g-2 g-lg-1">
              <div class="col-6 col-sm-4 offset-lg-2 col-lg">
                <div class="col-12 list-column">
                  <i class="flaticon-like"></i>
                  <span class="list-titles">Garantia de satisfação</span>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg">
                <div class="col-12 list-column">
                  <i class="flaticon-truck"></i>
                  <span class="list-titles">Entrega rápida para todo o Brasil</span>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg">
                <div class="col-12 list-column">
                  <i class="flaticon-verified"></i>
                  <span class="list-titles">Compra totalmente segura</span>
                </div>
              </div>
              <div class="col-6 col-sm-4 offset-lg-2 col-lg">
                <div class="col-12 list-column">
                  <i class="flaticon-credit-card"></i>
                  <span class="list-titles">Cartão de crédito <?php echo (maxInstallmentsPagarme()) ? 'em até '. maxInstallmentsPagarme().'x sem juros' : 'sem juros' ?></span>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg">
                <div class="col-12 list-column">
                  <i class="flaticon-padlock"></i>
                  <span class="list-titles">Privacidade protegida</span>
                </div>
              </div>
              <div class="col-6 col-sm-4 col-lg">
                <div class="col-12 list-column">
                  <i class="flaticon-phone-call"></i>
                  <span class="list-titles">Ligue para nós (62) 3954-5777</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- FIM HEADER CHECKOUT -->

      <?php endif; ?>

    <?php else: ?>
      <header>
        <div class="container">
          <div class="row">
            <div class="topbar col-12">
              <a class="m-0 w-100 d-md-block d-none text-md-center text-lg-end" href="tel:6239545777"><i class="flaticon-call"></i> FALE CONOSCO: (62) 3954-5777</a>
            </div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid p-0">
                <?php $custom_logo_id = get_theme_mod( 'custom_logo' );
                $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
                ?>

                <a id="site-brand" class="navbar-brand" href="<?php echo get_site_url(); ?>">
                  <img class="img-responsive" width="150" src="<?php echo $image[0]; ?>" alt="">
                </a>

                <a class="btn-cta d-md-none d-md-block" href="#order">Peça Agora <i class="flaticon-right-arrow"></i></a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" title="como funciona" href="<?php echo get_site_url(); ?>/#como-funciona">Como funciona</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" title="como funciona" href="<?php echo get_site_url(); ?>/#ingredientes">Ingredientes</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" title="testemunhos" href="<?php echo get_site_url(); ?>/#historias">Histórias de Sucesso</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" title="perguntas frequentes" href="<?php echo get_site_url(); ?>/#faq">Perguntas Frequentes</a>
                    </li>
                    <li class="nav-item d-none d-md-block">
                      <a class="btn-cta d-block" href="/#order">Peça Agora <i class="flaticon-right-arrow"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>          
          </div>
        </div>
      </header>
    <?php endif; ?>
