
<div class="blog-flexible">

<?php

   $categories = get_terms('category');
   $total_posts = 0;
   foreach ($categories as $key => $value) {
      $total_posts+= $value->count;
   }

   

if( $total_posts != 0 ):

foreach ($categories as $key => $cat) : ?>

   <section class="blog-category container section-main bg-white">
      <div class="row">
         <!-- //////////////////////////
         // BLOCO PRINCIPAL - LISTAGEM POR CATEGORIAS -->
         <div class="col-md-8">
         <?php $loop = new WP_Query(array('post_type'=>'post', 'posts_per_page'=>1, 'category_name'=>$cat->slug));
            if($loop->have_posts()) : ?>

            <div class="row">
               <div class="col-xs-6 col-sm-8">
                  <h2>
                     <?=$cat->slug?> <span class="hidden-xs"> - </span><span class="latest">Últimos Artigos</span>
                  </h2>
               </div>
               <?php if($cat->count > 1): ?>
                  <div class="col-xs-6 col-sm-4 text-right">
                     <a href="<?php echo home_url() . '/category/' . $cat->slug ?>" class="read-more">ver mais</a>
                  </div>
               <?php endif; ?>
            </div>

            <?php while($loop->have_posts()):$loop->the_post(); ?>
            <div class="feature-post">
               <div class="post-details">
                  <a href="<?php the_permalink(); ?>">                     
                     <?php
                        if(get_the_post_thumbnail()): 
                           the_post_thumbnail( 'large', array('class'=>'img-responsive') );
                        else: 
                           echo '<img src="'.get_stylesheet_directory_uri().'/assets/image/default-image.jpg" class="img-responsive" style="min-width:100%">';
                        endif;
                     ?>
                     <div class="main-feature-excerpt">
                        <h3><?php the_title(); ?></h3>
                        <p class="feature-excerpt"><?php the_excerpt(); ?></p>
                     </div>
                  </a>
               </div>
            </div>
            <?php endwhile; endif; wp_reset_postdata(); ?>

            <?php $loop = new WP_Query(array('post_type'=>'post', 'posts_per_page'=>3, 'category_name'=>$cat->slug, 'offset'=>1));
               if($loop->have_posts()): ?>
            <div class="row older-posts">
               <?php while($loop->have_posts()):$loop->the_post(); ?>
               <div class="other-posts col-sm-4">
                  <a href="<?php the_permalink() ?>">
                     <div class="row older-posts-mobile">
                        <div class="col-xs-6 col-sm-12">
                           <?php
                              if(get_the_post_thumbnail()): 
                                 the_post_thumbnail( 'full', array('class'=>'img-responsive') );
                              else: 
                                 echo '<img src="'.get_stylesheet_directory_uri().'/assets/image/default-image.jpg" class="img-responsive">';
                              endif;
                           ?>
                        </div>
                        <div class="col-xs-6 col-sm-12">
                           <p><?php the_title(); ?></p>
                           <p class="read-more">ler mais</p>
                        </div>
                     </div>
                  </a>
               </div>
               <?php endwhile; ?>
            </div>
            <?php endif; wp_reset_postdata(); ?>            
         </div>
         <!-- // FIM DO BLOCO PRINCIPAL
         //////////////////////////////////// -->

         <!-- ///////////////////////////////////
         // SIDEBAR -->
         <div class="side-posts col-md-4 hidden-xs hidden-sm">
            <?php $loop = new WP_Query(array('post_type'=>'post', 'posts_per_page'=>6, 'category_name'=>$cat->slug, 'offset'=>4, 'orderby'=>'rand'));
            if($loop->have_posts()): ?>

            <h3>Recomendado</h3>

            <?php while($loop->have_posts()):$loop->the_post(); ?>

            <a href="<?php the_permalink(); ?>">
               <div class="row">
                  <div class="col-md-5">
                     <?php
                        if(get_the_post_thumbnail()): 
                           the_post_thumbnail( 'full', array('class'=>'img-responsive') );
                        else: 
                           echo '<img src="'.get_stylesheet_directory_uri().'/assets/image/default-image.jpg" class="img-responsive">';
                        endif;
                     ?>
                  </div>
                  <div class="col-md-7">
                     <h4><?php the_title(); ?></h4>
                     <p class="read-more">ler mais...</p>
                  </div>
               </div>
            </a>

            <?php endwhile; endif; wp_reset_postdata(); ?>

         </div>
      </div>
   </section>

<?php 
endforeach;
else: ?>

<section class="container section-main">
   <div class="row">
      <div id="primary">
         <main id="main" class="page-error">
            <div class="col-md-12">
               <header>
                  <h1 class="page-title page-title-error-blog"><?php esc_html_e( 'Oops! Não existem publicações.', 'storefront' ); ?></h1>
               </header>
               <!-- .page-header -->
               <p style="text-align: center;">
                  <?php esc_html_e( 'Nenhum artigo foi publicado!', 'storefront' ); ?>
               </p>
            </div>
         </main>
      </div>
   </div>
</section>

<?php
endif;
 ?>
   
</div>


<?php //echo $total_posts; //print_r($categories); ?>