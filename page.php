<?php

get_header(); ?>

    <main class="pt-5 pb-5 main-jsprata">
        <div class="container">
            <?php if(have_posts()){
                while (have_posts()){
                    the_post(); ?>

                    <?php the_content(); ?>

            <?php   }
            } ?>
        </div>
    </main>

<?php get_footer(); ?>