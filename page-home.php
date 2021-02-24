<?php get_header(); ?>
<!-- Fim Header -->

<div class="scroll">



<!-- Bloco 1 -->
<section class="section-main bg-white">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-lg-6">
                <h1 class="b1-title-m hidden-md hidden-lg hidden-sm col-xs-12"><?php the_field('s1_titulo') ?></h1>
                <img src="<?php the_field('s1_imagem_1') ?>" class="b1-image col-lg-12 hidden-md hidden-sm hidden-xs" alt="">
                <img src="<?php the_field('s1_imagem_2') ?>" class="b1-image hidden-lg col-md-12 hidden-sm hidden-xs" alt="">
                <img src="<?php the_field('s1_imagem_3') ?>" class="b1-image b1-mobile-large hidden-lg hidden-md col-sm-12 col-xs-12" alt="">
                <img src="<?php the_field('s1_imagem_4') ?>" class="b1-image b1-mobile-small" alt="">
            </div>
            <div class="col-md-6 content-text-bloco-1">
                <h1 class="col-md-12 col-lg-12 col-sm-12 hidden-xs"><?php the_field('s1_titulo') ?></h1>
                <h3 style="padding: 0; text-align: left"><?php the_field('s1_subtitulo') ?></h3>
                <ul class="col-md-12 ul-beneficios">
                    <?php if(have_rows('s1_beneficios')): ?>
                        <?php while(have_rows('s1_beneficios')): the_row(); ?>
                            <li><img src="<?php the_sub_field('icone'); ?>" /> <?php the_sub_field('texto'); ?></li>
                        <?php   endwhile; ?>
                    <?php endif; ?>
                </ul>

                <!-- CTA desktop -->
                <a href="#order" class="btn btn-secondary cta-1 page-scroll btn-buy hidden-sm hidden-xs">
                    <?php the_field('s1_texto_botao'); ?>
                </a>
                <!-- Fim CTA desktop -->

            </div>

            <!-- <div class="col-md-6 col-md-pull-6 col-lg-6 col-lg-pull-6 col-sm-6 col-sm-pull-6 content-img-bloco-1">
                <a href="#order" class="page-scroll btn-buy">
                    <img src=<?php //echo get_stylesheet_directory_uri(); ?>/assets/imagens/frascos/frasco-sem-sombra.png alt="" class="img-responsive img-responsive-topo">
                </a>
            </div> -->

            <!-- CTA desktop Mobile -->
            <a href="#order" class="btn btn-secondary cta-1 cta-1-1 page-scroll btn-buy hidden-md hidden-lg">
                <?php the_field('s1_texto_botao'); ?>
            </a>
            <!-- Fim CTA mobile -->

        </div>
    </div>
</section>
<!-- Fim do Bloco 1 -->

<div class="detalhes detalhe-pixels_0"></div>

<!-- Bloco 2 -->
<?php if( get_field('s2_titulo') ): ?>
    <section class="section-text bg-gray bg-seta">
        <div class="container">
            <div class="row">
                <h2><?php the_field('s2_titulo'); ?></h2>
                <div class="col-md-12 col-lg-12 col-md-offset linhas">
                    <?php the_field('s2_conteudo'); ?>
                </div>

            </div>
        </div>
    </section>
<?php endif; ?>
<!-- Fim do Bloco 2 -->
<div class="detalhes detalhe-pixels_0"></div>

<!-- Lista de beneficios 2 - Bloco 3 -->
<?php if( get_field('s3_titulo') ): ?>
    <section class="section-bullets bg-white ">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <h2><?php the_field('s3_titulo'); ?></h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p><?php the_field('s3_resumo'); ?></p>
                </div>
                <div class="col-md-12">
                    <?php if( have_rows('s3_lista_beneficios') ): ?>
                        <ul style="margin-top: 25px;">                            
                            <?php while( have_rows('s3_lista_beneficios') ) : the_row();?>
                                <li>
                                    <strong><?php the_sub_field('titulo'); ?>: </strong>
                                    <?php the_sub_field('texto'); ?>
                                </li>
                            <?php endwhile; ?>
                        </ul>
                    <?php endif; ?>
                </div>
            </div>


            <!-- CTA -->
            <?php if( get_field('s2_texo_botao') ): ?>
            <div class="row">
                <div class="big-text mobile-390">
                    <a href="#order" class="btn btn-secondary cta-2 page-scroll btn-buy">
                        <?php the_field('s2_texo_botao') ?>
                    </a>
                </div>

                <div class="big-text mobile-390-m">
                    <a href="#order" class="btn btn-secondary cta-2 page-scroll btn-buy">
                        <?php the_field('s2_texo_botao') ?>
                    </a>
                </div>
            </div>
            <?php endif; ?>

            <!-- fim do CTA -->

        </div>
    </section>
<?php endif; ?>
<!-- Fim da Lista de beneficios 2 - Bloco 3 -->


<div class="detalhes detalhe-pixels_0" id="comofunciona"></div>


<div class="detalhes detalhe-pixels_0"></div>

<!-- Lista de resultados Bloco 3A -->
<section class="">
    <div class="beneficios">
        <div class="container">         
            <h2 class="text-center title-beneficios">
                <strong><?php the_field('s3a_titulo') ?></strong>
            </h2>
            <div class="benefits-bar content-beneficios">
                <?php if(have_rows('s3a_beneficios')):
                    $count = count(get_field('s3a_beneficios')); ?>
                    <div class="left">
                        <ul>
                            <?php $s=0; while(have_rows('s3a_beneficios')): the_row(); ?>
                                <li>
                                    <img src="<?php the_sub_field('icone')?>" alt="">
                                    <span><?php the_sub_field('texto') ?></span>
                                </li>
                            <?php $s++;
                                if($s >= $count/2) break;
                            endwhile; ?>
                        </ul>
                    </div>
                    <div class="right">
                        <ul>
                            <?php  while(have_rows('s3a_beneficios')):
                                the_row(); ?>

                                <li>
                                    <img src="<?php the_sub_field('icone') ?>" alt="">
                                    <?php the_sub_field('texto') ?>
                                </li>

                            <?php endwhile; ?>
                        </ul>
                    </div>
                <?php endif; ?>
                <img class="image" src="<?php the_field('s3a_imagem') ?>" alt="">
            </div>
        </div>
    </div>
</section>
<!-- Fim Lista de resultados Bloco 3A -->

<!-- ============================== -->
<!-- Lista de resultados -->
<section  id="como-funciona" class="section-benefit bg-gray bg-seta" >
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <h2><?php the_field('s4_titulo') ?></h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <p>
                    <?php the_field('s4_resumo') ?>
                </p>
            </div>
        </div>
        <?php if(have_rows('s4_beneficios')){
            while(have_rows('s4_beneficios')){
                the_row(); ?>

            <div class="row benefit-item">
                <div class="col-md-4 benefit-name">
                    <?php the_sub_field('titulo'); ?>
                </div>
                <div class="col-md-8 benefit-text">
                    <?php the_sub_field('texto'); ?>
                </div>
            </div>

        <?php   }
        } ?>
    </div>
</section>
<!-- Fim da Lista de resultados -->

<div class="detalhes detalhe-pixels_0" id="ingredientes"></div>

<!-- Bloco lista de ingredientes -->
<section class="section-ingredients bg-white bg-seta" >
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <h2><?php the_field('s5_titulo') ?><strong></strong></h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <p><?php the_field('s5_resumo') ?></p>
            </div>
        </div>

        <?php if(have_rows('s5_ingredientes')){
            while(have_rows('s5_ingredientes')){
                the_row(); ?>

                <div class="row igredient-row">
                    <div class="col-sm-4 col-md-3">
                        <img src="<?php the_sub_field('imagem') ?>" alt="" class="img-responsive">
                    </div>
                    <div class="col-sm-8 col-md-9">
                        <h3><?php the_sub_field('titulo') ?></h3>
                        <div id="ac-1" class="ac"></div>
                        <p><?php the_sub_field('texto') ?></p>
                    </div>
                </div>

            <?php }
        } ?>            

    </div>
</section>
<!-- Fim Bloco lista de ingredientes -->


<!-- ///////////////////////////////////////////////////////
/////////  BLOCO 6
//////////////////////////////////// -->
<section id="medical-authority" class="three section-stats bg-gray">
    <div id="authority" style="background: url('<?php the_field('s6_imagem'); ?>') right -100px bottom no-repeat; background-size: auto 90%;padding-bottom: 100px"></div>

    <div class="container">
        <div class="row">
            <h2><?php the_field('s6_titulo') ?></h2>
            
            <div class="col-md-8 col-lg-8 col-md-offset">
                <div class="content-wraper">
                    <div class="content">
                        <img src="<?php the_field('s6_imagem') ?>" alt="" class="img img-responsive visible-sm visible-xs">
                        <?php the_field('s6_texto') ?>
                    </div>
                </div>

                <div class="cta">                    
                    <a href="#order" id="cta-button" class="btn btn-secondary cta-2">
                        <div class="left"><?php the_field('s6_texto_botao') ?></div>
                        <div class="right">
                            <i class="fa fa-chevron-right"></i>
                        </div>                        
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- /////////////   FIM BLOCO 6
///////////////////////////////////////////// -->



<div class="detalhes detalhe-pixels_0"></div>

<!-- Bloco 7 -->
<section class="section-text bg-white bg-seta">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2><?php the_field('s7_titulo') ?></h2>
                
                <?php the_field('s7_texto') ?>
            </div>
        </div>
    </div>
</section>
<!-- Fim Bloco 7 -->

<div class="detalhes detalhe-pixels_0"  id="historias"></div>

<!-- Bloco de testemunhos -->
<?php if(have_rows('s8_testemunhos')) : ?>      
    <section class="section-testimonials test006new bg-gray bg-seta">
        <div class="container">    
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <h2><?php the_field('') ?></h2>
                </div>
            </div>

            <!-- Testemunhos -->
            <div class="row testimonials">                
                <?php while(have_rows('s8_testemunhos')) :
                    the_row(); ?>
                    <div class="testimony col-sm-4">
                        <a href="#testimony-67177" class="fancybox" rel="testimonials">
                            <div class="panel-group">
                                <div class="panel panel-default">
                                    <div class="panel-heading clearfix">
                                        <div class="testimony-title col-xs-12" style="white-space: nowrap;">
                                            <?php the_sub_field('titulo') ?>
                                        </div>
                                    </div>
                                    <div class="panel-body-q">
                                        <div class="testimony-image">
                                            <img class="img-responsive" src="<?php the_sub_field('imagem') ?>" alt=""/>
                                        </div>
                                    </div>
                                    <div class="panel-footer clearfix">
                                        <div class="testimony-rating col-xs-12">
                                            <div class='5-star'>
                                                <span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="glyphicon glyphicon-star"
                                                aria-hidden="true"></span><span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                                            </div>
                                        </div>
                                        <div class="testimony-excerpt col-xs-12">
                                            <p><?php the_sub_field('texto') ?> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                <?php endwhile; ?>
            </div>        
            <!-- Fim Testemunhos -->

            <div class="big-text mobile-440">
                <div class="col-md-10 col-md-offset-1">
                    <h2><?php the_field('s9_titulo') ?></h2>
                </div>

                <!-- CTA do bloco testemunhos mobile -->
                <a href="#order" class="btn btn-secondary cta-2 page-scroll btn-buy">
                    <?php the_field('s9_texto_botao') ?>
                </a>
                <!-- Fim CTA do bloco testemunhos mobile -->
            </div>
            <div class="big-text mobile-440-m">
                <div class="col-md-10 col-md-offset-1">
                    <h2><?php the_field('s9_titulo') ?></h2>
                </div>

                <!-- CTA do bloco testemunhos Desktop -->
                <a href="#order" class="btn btn-secondary cta-2 page-scroll" >
                    <?php the_field('s9_texto_botao') ?> 
                </a>
                <!-- Fim CTA do bloco testemunhos Desktop -->
            </div>
        </div>
    </section>
<?php endif; ?>
<!-- Fim Bloco de testemunhos -->

<div class="detalhes detalhe-pixels_0"></div>
    
<!-- Bloco 10 -->
<section class="section-list bg-white bg-seta">
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <h2><?php the_field('s10_titulo') ?></h2>
            </div>
        </div>
        <div class="row">

            <?php if(have_rows('selos')): ?>
            <?php while(have_rows('selos')): the_row(); ?>

                <div class="col-sm-6 col-md-4 col-xs-12">
                    <div class="col-xs-3 col-md-3">
                        <img src="<?php the_sub_field('icone'); ?>" alt="" class="img-responsive list-icon">
                    </div>
                    <div class="col-xs-9 col-md-9 list-column">
                        <span class="list-titles"><?php the_sub_field('titulo'); ?></span>
                    </div>
                </div>

            <?php endwhile; ?>
            <?php endif; ?>

        </div>
    </div>
</section>
<!-- Fim Bloco 10 -->

<div class="detalhes detalhe-pixels_0"></div>

<!-- Bloco de Garantia -->
<section class="section-guarantee bg-gray">
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <h2><?php the_field('s11_titulo') ?></h2>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 col-md-3">
                <img src=<?php the_field('s11_imagem') ?> alt="" class="img-responsive">
            </div>
            <div class="col-sm-8 col-md-9">
                <?php the_field('s11_texto'); ?>
            </div>
        </div>
    </div>
</section>
<!-- Fim Bloco de Garantia -->

<div class="section-order-pattern" id="order-inner"></div>



<!-- Bloco de Ofertas -->
<?php
    ///////////ID DO PRODUTO
    $_product = wc_get_product(ID_PRODUTO); 
    $product_variations = $_product->get_available_variations();

    // FAZ A CONTAGEM DE VARIAÇÃOES DO PRODUTO
    $count = 0;                
    foreach ($product_variations as $key => $value) {
        $count++;
    }
?>
<section class="section-order offers <?php echo $count == 4 ? 'offers' : '' ?>" >
    <div id="order" class="anchor-home"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <h2><?php the_field('s_ofertas_titulo') ?></h2>
                </div>
            </div>
            <div <?php echo $count == 4 ? 'id="dynamic-offers-reverse-mobile"' : ''; ?> class="row">

                <?php
                // LOOP PREÇO VARIANTE
                $i = 1;
                foreach ($product_variations as $variation): ?>

                    <!-- PEGA VALORES DE VARIANTES -->
                    <?php
                        $regular_price = get_product_regular_price($variation['variation_id']);
                        $min_price = get_product_min_price($variation['variation_id']);
                        $descri_prod = get_product_descricao($variation['variation_id']);
                        $frascos = get_product_ref($variation['variation_id']);
                        $economia = $regular_price - $min_price;
                        $link_comprar =  get_site_url() . '/?add-to-cart=' . ID_PRODUTO . "&variation_id=" . $variation['variation_id'];

                        $is_popular = get_post_meta( $variation['variation_id'], '_variation_popular_status', true );
                        $product_destak_title = get_post_meta( $variation['variation_id'], '_variation_popular_title', true );
                        
                    ?>

                    <!-- CHECA SE LOOP ESTÁ NO MAIS POPULAR -->
                    <?php if ($is_popular == 'enabled'): ?>
                        <div id="combo-block" class="<?= $count == 3 ? 'col-md-4' : 'col-md-3'; ?> text-center">
                            <div class="popular">
                                <?= $product_destak_title ?>
                            </div>
                            <div class="featured" style="padding-top: 25px;">
                            <?php else: ?>
                                <div class="<?= $count == 3 ? 'col-md-4' : 'col-md-3 offers-common'; ?> text-center">
                                    <div class="no">
                                    <?php endif; ?>
                                    <div class="product-image">
                                        <img src="<?php echo $variation['image']['url']; ?>">                    
                                     </div>

                                    <div class="title">
                                        <h3 class="product-title"><?php echo $frascos ?></h3>
                                        <p>
                                            <span class="product-short-desc"></span>
                                        </p>
                                    </div>
                                    
                                    <div class="buy-now">
                                        <p class="product woocommerce add_to_cart_inline ">
                                            <del>
                                                <span class="retail">Preço era: </span>
                                                <span class="amount">
                                                    R$ <?php echo number_format($regular_price, 2, ',', ' '); ?>
                                                </span>
                                            </del>
                                            <ins>
                                                <span class="amount" style="white-space: nowrap; letter-spacing: 0px;">
                                                <?php
                                                    $card_parcels = maxInstallmentsPagarme();
                                                    $valor = $min_price / $card_parcels;
                                                ?>
                                                <?= $card_parcels ?>x R$ <?php echo  number_format( $valor, 2, ',', ' ' ) ?>
                                                </span>
                                            </ins>
                                            <span class="save">Você economiza:
                                                <span class="woocommerce-Price-amount amount">
                                                    <span class="woocommerce-Price-currencySymbol">
                                                        R$ <?php echo number_format($economia, 2, ',', ' '); ?>
                                                    </span>
                                                </span>
                                            </span>
                                        </p>
                                        <?php  $purchase_status = get_field('enable_disable_purchase', 'option'); ?>
                                        <?php if( $purchase_status[0] == 'enable'): ?>
                                            <a href="<?= $link_comprar ?>">
                                        <?php else: ?>
                                            <a onclick="alert('Infelizmente, estamos sem estoque!')">
                                        <?php endif; ?>
                                        <button  id="form-cad-deliveri" type="submit" class="btn btn-secondary btn-buy add_to_cart_button product_type_simple">
                                            <strong>COMPRAR JÁ</strong>
                                        </button>
                                        </a>
                                    </div>
                    <div class="shipping">ENVIO IMEDIATO</div>
                </div>
            </div>            
            <?php
                if(is_page('home') && $i == 4){
                    break;
                }
                
                $i++; endforeach;
            ?>

        </div>
    </div>
</section>

<!-- Fim Bloco de Ofertas -->

<div class="detalhes detalhe-pixels_0" id="faq"></div>

<!-- SEÇÃO PERGUNTAS FREQUENTES  -->
<?php if( have_rows('s12_duvidas') ): ?>
    <section class="section-faq bg-white " >
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <h2><?php the_field('s12_titulo') ?></h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 col-md-offset-1">

                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                        <?php $i = 1; ?>
                        <?php while ( have_rows('s12_duvidas') ): the_row(); ?>

                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="heading<?php echo $i; ?>">
                                    <h4 class="panel-title">
                                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse<?php echo $i; ?>" aria-expanded="false" aria-controls="collapse<?php echo $i; ?>"><?php the_sub_field('s12_titulo') ?></a>                     
                                    </h4>
                                </div>
                                <div id="collapse<?php echo $i; ?>" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1" aria-expanded="false">
                                    <div class="panel-body">
                                        <p><?php the_sub_field('s12_texto_resposta'); ?></p>
                                    </div>
                                </div>
                            </div>

                        <?php $i++; endwhile; ?>

                    </div>
                </div>
            </div>

        </div>
    </section>
<?php endif; ?>
<!-- FIM SEÇÃO PERGUNTAS FREQUENTES  -->

<!-- Bloco referencias -->
<section class="section-references bg-gray ">
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 references-box">
                <div class="ref-title"><?php the_field('s13_titulo') ?></div>
                <ul>
                    <?php if( have_rows('s13_referencias') ):
                        $i = 1;
                        while( have_rows('s13_referencias') ): the_row(); ?>
                            <li>
                                <div id="a-1" class="anchor-bottom"></div>
                                <span class="anchor-ref"><?php echo $i; ?></span>
                                <p><?php the_sub_field('texto') ?></p>
                            </li>
                        <?php $i++; endwhile; ?>
                    <?php endif; ?>
                </ul>
            </div>
        </div>
    </div>
</section>
<!-- Fim do Bloco referencias -->

<?php get_footer();
