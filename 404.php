<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @package storefront
 */

get_header(); ?>

 <div id="primary">

  <main id="main" class="page-error">

   <div class="container py-5">


     <div>
      <h1 class="page-title" style="font-size: 36px; text-align: center;"><?php esc_html_e( 'Oops! Esta página não existe.', 'storefront' ); ?></h1>
     </div><!-- .page-header -->

     <p style="text-align: center;">
      <?php esc_html_e( 'Nada encontrado neste local. Tente utilizar a busca.', 'storefront' ); ?>
     </p>

   </div><!-- .error-404 -->

  </main><!-- #main -->
 </div><!-- #primary -->

<?php get_footer();