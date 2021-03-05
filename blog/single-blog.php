<?php 

   $post_terms = get_the_terms( get_the_ID(), 'category');
   $all_terms = get_terms('category');

?>

<div class="blog-flexible">
   <section class="blog-category container section-main bg-white">
      <div class="row">

         <div class="col-md-8">
            <div class="row">
               <div class="col-xs-12 col-sm-12">
                  <h2 class="title-breadcrumb">
                     <a href="<?= home_url('/blog'); ?>">Blog</a> <i class="fa fa-angle-right"></i> <a href="<?= home_url('/category/' . $post_terms[0]->slug); ?>"><?= $post_terms[0]->name ?></a> <span class="hidden-xs"> <i class="fa fa-angle-right"></i> </span><span class="latest"><?= the_title(); ?></span>
                  </h2>
               </div>
            </div>

            <article> 
            <?php if(have_posts()): while(have_posts()): the_post(); ?>
               <?php
                  if(get_the_post_thumbnail()): 
                     the_post_thumbnail( 'full', array('class'=>'img-responsive') );
                  else: 
                     echo '<img src="'.get_stylesheet_directory_uri().'/assets/image/default-image.jpg" class="img-responsive">';
                  endif;
               ?>
                        
               <div>
                  <h1 class="entry-title title-post" style="display: block;"><?php the_title(); ?></h1>
                  <hr>
               </div>
               <div class="entry-content">
                  <?php the_content(); ?>
               </div>
            <?php endwhile; endif; ?>
            </article>

            <div class="row older-posts">
               <div>
                  <?php $loop = new WP_Query(array('post_type'=>'post', 'posts_per_page'=>3, 'category_name'=>$post_terms[0]->slug, 'offset'=>1));
                  if($loop->have_posts()): ?>
                     <h4 class="col-md-12">Talvez você se interesse...</h4>
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
                  <?php endwhile; endif; wp_reset_postdata(); ?>
               </div>
            </div>
         </div>

         <div class="side-posts col-md-4 hidden-xs hidden-sm">
            <h3>Categorias</h3>
            <ul class="link-count">
               <?php
                  foreach ($all_terms as $key => $term) { ?>
                     <li><span><a href="<?php echo home_url('/category/') . $term->slug ?>"><?php echo $term->name ?></a></span></li>
                  <?php }
                ?>
            </ul>

            <h3>Recomendado</h3>

            <?php $loop = new WP_Query(array('post_type'=>'post', 'posts_per_page'=>6, 'category_name'=>$post_terms[0]->slug, 'offset'=>4, 'orderby'=>'rand'));
            if($loop->have_posts()):while($loop->have_posts()):$loop->the_post(); ?>

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
</div>



