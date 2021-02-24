
<?php $page = get_page_by_path( 'home' );
 define('HOMEID', $page->ID); ?>

<?php get_header(); ?>
<!-- Fim Header -->

<div class="scroll">

<!-- Bloco 1 -->
<section class="section-main bg-white">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-lg-6">
                <h1 class="b1-title-m hidden-md hidden-lg hidden-sm col-xs-12"><?php the_field('s1_titulo', HOMEID) ?></h1>
                <img src="<?php the_field('s1_imagem_1', HOMEID) ?>" class="b1-image col-lg-12 hidden-md hidden-sm hidden-xs" alt="">
                <img src="<?php the_field('s1_imagem_2', HOMEID) ?>" class="b1-image hidden-lg col-md-12 hidden-sm hidden-xs" alt="">
                <img src="<?php the_field('s1_imagem_3', HOMEID) ?>" class="b1-image b1-mobile-large hidden-lg hidden-md col-sm-12 col-xs-12" alt="">
                <img src="<?php the_field('s1_imagem_4', HOMEID) ?>" class="b1-image b1-mobile-small" alt="">
            </div>
            <div class="col-md-6 content-text-bloco-1">
                <h1 class="col-md-12 col-lg-12 col-sm-12 hidden-xs"><?php the_field('s1_titulo', HOMEID) ?></h1>
                <h3 style="padding: 0; text-align: left"><?php the_field('s1_subtitulo', HOMEID) ?></h3>
                <ul class="col-md-12 ul-beneficios">
                    <?php if(have_rows('s1_beneficios', HOMEID)): ?>
                        <?php while(have_rows('s1_beneficios', HOMEID)): the_row(); ?>
                            <li><img src="<?php the_sub_field('icone', HOMEID); ?>" /> <?php the_sub_field('texto', HOMEID); ?></li>
                        <?php   endwhile; ?>
                    <?php endif; ?>
                </ul>

                <!-- CTA desktop -->
                <a href="#order" class="btn btn-secondary cta-1 page-scroll btn-buy hidden-sm hidden-xs">
                    <?php the_field('s1_texto_botao', HOMEID); ?>
                </a>
                <!-- Fim CTA desktop -->

            </div>

            <div class="col-md-6 col-md-pull-6 col-lg-6 col-lg-pull-6 col-sm-6 col-sm-pull-6 content-img-bloco-1">
                <a href="#order" class="page-scroll btn-buy"><img src=<?php echo get_stylesheet_directory_uri(); ?>/assets/imagens/frascos/frasco-sem-sombra.png alt="" class="img-responsive img-responsive-topo"></a>
            </div>

            <!-- CTA desktop Mobile -->
            <a href="#order" class="btn btn-secondary cta-1 cta-1-1 page-scroll btn-buy hidden-md hidden-lg">
                <?php the_field('s1_texto_botao', HOMEID); ?>
            </a>
            <!-- Fim CTA mobile -->

        </div>
    </div>
</section>
<!-- Fim do Bloco 1 -->

<div class="detalhes detalhe-pixels_0"></div>

<!-- Lista de resultados Bloco 3A -->
<section class="">
    <div class="beneficios">
        <div class="container">         
            <h2 class="text-center title-beneficios">
                <strong><?php the_field('s3a_titulo', HOMEID) ?></strong>
            </h2>
            <div class="benefits-bar content-beneficios">
                <?php if(have_rows('s3a_beneficios', HOMEID)):
                    $count = count(get_field('s3a_beneficios', HOMEID)); ?>
                    <div class="left">
                        <ul>
                            <?php $s=0; while(have_rows('s3a_beneficios', HOMEID)): the_row(); ?>
                                <li>
                                    <img src="<?php the_sub_field('icone', HOMEID)?>" alt="">
                                    <span><?php the_sub_field('texto', HOMEID) ?></span>
                                </li>
                            <?php $s++;
                                if($s >= $count/2) break;
                            endwhile; ?>
                        </ul>
                    </div>
                    <div class="right">
                        <ul>
                            <?php  while(have_rows('s3a_beneficios', HOMEID)):
                                the_row(); ?>

                                <li>
                                    <img src="<?php the_sub_field('icone', HOMEID) ?>" alt="">
                                    <?php the_sub_field('texto', HOMEID) ?>
                                </li>

                            <?php endwhile; ?>
                        </ul>
                    </div>
                <?php endif; ?>
                <img class="image" src="<?php the_field('s3a_imagem', HOMEID) ?>" alt="">
            </div>
        </div>
    </div>
</section>
<!-- Fim Lista de resultados Bloco 3A -->

<div class="detalhes detalhe-pixels_0"></div>

<!-- Bloco 7 -->
<section class="section-text bg-white bg-seta">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2><?php the_field('s7_titulo', HOMEID) ?></h2>
                
                <?php the_field('s7_texto', HOMEID) ?>
            </div>
        </div>
    </div>
</section>
<!-- Fim Bloco 7 -->

<div class="detalhes detalhe-pixels_0"></div>
    
<!-- Bloco 10 -->
<section class="section-list bg-white bg-seta">
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <h2><?php the_field('s10_titulo', HOMEID) ?></h2>
            </div>
        </div>
        <div class="row">

            <?php if(have_rows('selos', HOMEID)): ?>
            <?php while(have_rows('selos', HOMEID)): the_row(); ?>

                <div class="col-sm-6 col-md-4 col-xs-12">
                    <div class="col-xs-3 col-md-3">
                        <img src="<?php the_sub_field('icone', HOMEID); ?>" alt="" class="img-responsive list-icon">
                    </div>
                    <div class="col-xs-9 col-md-9 list-column">
                        <span class="list-titles"><?php the_sub_field('titulo', HOMEID); ?></span>
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
                <h2><?php the_field('s11_titulo', HOMEID) ?></h2>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 col-md-3">
                <img src=<?php the_field('s11_imagem', HOMEID) ?> alt="" class="img-responsive">
            </div>
            <div class="col-sm-8 col-md-9">
                <?php the_field('s11_texto', HOMEID); ?>
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
                    <h2><?php the_field('s_ofertas_titulo', HOMEID) ?></h2>
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
                            <div class="featured">
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
<?php if( have_rows('s12_duvidas', HOMEID) ): ?>
    <section class="section-faq bg-white " >
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <h2><?php the_field('s12_titulo', HOMEID) ?></h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 col-md-offset-1">

                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                        <?php $i = 1; ?>
                        <?php while ( have_rows('s12_duvidas', HOMEID) ): the_row(); ?>

                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="heading<?php echo $i; ?>">
                                    <h4 class="panel-title">
                                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse<?php echo $i; ?>" aria-expanded="false" aria-controls="collapse<?php echo $i; ?>"><?php the_sub_field('s12_titulo', HOMEID) ?></a>                     
                                    </h4>
                                </div>
                                <div id="collapse<?php echo $i; ?>" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1" aria-expanded="false">
                                    <div class="panel-body">
                                        <p><?php the_sub_field('s12_texto_resposta', HOMEID); ?></p>
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

<?php get_footer();