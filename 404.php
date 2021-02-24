<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @package storefront
 */

get_header(); ?>

 <div id="primary">

  <main id="main" class="page-error">

   <div class="container" style="margin-top: 160px;">


     <header>
      <h1 class="page-title" style="font-size: 36px; text-align: center;"><?php esc_html_e( 'Oops! Esta página não existe.', 'storefront' ); ?></h1>
     </header><!-- .page-header -->

     <p style="text-align: center;">
      <?php esc_html_e( 'Nada encontrado neste local. Tente utilizar a busca.', 'storefront' ); ?>
     </p>

     <?php
     echo '<section aria-label="' . esc_html__( 'Search', 'storefront' ) . '" style="max-width: 60%;margin:0 auto; display: block"';

     if ( storefront_is_woocommerce_activated() ) {
      the_widget( 'WC_Widget_Product_Search' );
     } else {
      get_search_form();
     }

     echo '</section>';

     ?>

   </div><!-- .error-404 -->

  </main><!-- #main -->
 </div><!-- #primary -->

<?php get_footer();