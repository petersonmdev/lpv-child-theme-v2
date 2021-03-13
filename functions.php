<?php

add_action( 'wp_enqueue_scripts', 'lpv_scripts', 999 );
function lpv_scripts() {
    
    wp_enqueue_style( 'style', get_stylesheet_uri() );

    wp_enqueue_style( 'bootstrap', get_stylesheet_directory_uri() . '/assets/css/bootstrap/bootstrap.min.css', true );
    wp_enqueue_style( 'bootstrap-grid', get_stylesheet_directory_uri() . '/assets/css/bootstrap/bootstrap-grid.min.css', true );

    wp_enqueue_style( 'font-roboto-slab', get_stylesheet_directory_uri() . '/assets/fonts/roboto-slab.css', true );
    wp_enqueue_style( 'font-flaticon', get_stylesheet_directory_uri() . '/assets/css/flaticon.css', true );    

    if (is_checkout()) :
        wp_enqueue_style( 'css-main', get_stylesheet_directory_uri() . '/assets/css/checkout.css', true );
        wp_enqueue_script( 'js-checkout', get_stylesheet_directory_uri() . '/assets/js/checkout.js', true );
    else :
        wp_enqueue_style( 'css-main', get_stylesheet_directory_uri() . '/assets/css/main.css', true );
        wp_enqueue_style( 'css-animate', get_stylesheet_directory_uri() . '/assets/css/animate.css', true );
        wp_enqueue_style( 'css-blog', get_stylesheet_directory_uri() . '/assets/css/blog.css', true );
    endif;

    wp_enqueue_script( 'js-bootstrap-bundle-min', get_stylesheet_directory_uri() . '/assets/js/bootstrap.bundle.min.js', true );    

    wp_dequeue_style( 'storefront-style' );
    wp_dequeue_style( 'storefront-woocommerce-style' );
}

function get_excerpt($count){
  $permalink = get_permalink($post->ID);
  $excerpt = get_the_excerpt();
  $excerpt = strip_tags($excerpt);
  $excerpt = substr($excerpt, 0, $count);
  $excerpt = $excerpt.'  [...]';
  return $excerpt;
}

// WORDPRESS DEFAULT SETTINGS
show_admin_bar(false);
add_theme_support('post-thumbnails');
add_theme_support('menus');
add_theme_support('woocommerce', array(
    'thumbnail_image_width' => 300,
    'gallery_thumbnail_image_width' => 200,
    'single_image_width' => 450,
    )
);
add_theme_support('html5', array(
    'search-form',
    'comment-form',
    'comment-list',
    'gallery',
    'caption',
));

show_admin_bar( false );

$wc_query = new WP_Query(array('posts_per_page' => 5, 'post_type' => 'product'));
if ($wc_query->have_posts()){
    while ($wc_query->have_posts()){
        $wc_query->the_post();
        define("ID_PRODUTO", get_the_ID());
    }
    wp_reset_postdata();
}

// Blog Image Sizes
add_image_size( 'blog_thumbnail_category', 230, 130, true );
add_image_size( 'blog_thumbnail', 600, 350, true );

function get_product_regular_price($variation_id) {
    global $woocommerce; 
    $product = new WC_Product_Variation($variation_id);
    return $product->get_regular_price(); 
}

function get_product_min_price($variation_id) {
    global $woocommerce; 
    $product = new WC_Product_Variation($variation_id);
    return $product->get_price(); 
}

function get_product_descricao($variation_id) {
    global $woocommerce; 
    $product = new WC_Product_Variation($variation_id);
    return $product->get_variation_attributes(); 
}

function get_product_ref($variation_id) {
    global $woocommerce; 
    $product = new WC_Product_Variation($variation_id);
    return $product->get_description(); 
}

add_action( 'get_sidebar', 'remove_woocommerce_sidebar', 1, 1 );
function remove_woocommerce_sidebar( $name ){
    if ( is_woocommerce() && empty( $name ) )
        exit();
}

add_action( 'get_header', 'remove_storefront_sidebar' );
function remove_storefront_sidebar() {
    if ( is_shop() ) {
        remove_action( 'storefront_sidebar', 'storefront_get_sidebar', 10 );
    }
}

// REDIRECIONA CART PARA CHECKOUT
add_filter( 'woocommerce_add_to_cart_redirect', 'bbloomer_redirect_checkout_add_cart' );
function bbloomer_redirect_checkout_add_cart( $url ) {
    $url = get_permalink( get_option( 'woocommerce_checkout_page_id' ) ); 
    return $url;
}

// REMOVER FIELDS DESNECESSARIOS DO ONE PAGE CHECKOUT
add_filter( 'woocommerce_checkout_fields' , 'custom_override_checkout_fields' );
function custom_override_checkout_fields( $fields ) {
     unset($fields['order']['order_comments']);
     unset($fields['billing']['billing_company']);
     unset($fields['account']['terms']);

     return $fields;
}

// REMOVE O ALERTA DE CUPOM
add_action( 'woocommerce_before_checkout_form', 'remove_checkout_coupon_form', 9 );
function remove_checkout_coupon_form(){
    remove_action( 'woocommerce_before_checkout_form', 'woocommerce_checkout_coupon_form', 10 );
}

// REMOVE O AVISO VERDE PRODUTO ADD NO CARRINHO
add_filter( 'wc_add_to_cart_message_html', '__return_null' );


// REDIRECIONA SHOP -> INDEX
add_action( 'template_redirect', 'custom_shop_page_redirect' );
function custom_shop_page_redirect() {
    if( is_shop() ){
        wp_redirect( home_url('/') );
        exit();
    }
}

// REMOVE TODAS AS OPÇÕES DE PRODUTOS, MENOS OPÇÃO VARIAVEL
add_filter( 'product_type_selector', 'remove_product_types' );
function remove_product_types( $types ){
    unset( $types['grouped'] );
    unset( $types['external'] );
    unset( $types['simple'] );
    return $types;
}

// TROCA BOTÃO DE LUGAR
add_action( 'woocommerce_checkout_shipping', 'output_payment_button' );
function output_payment_button() {
    $order_button_text = apply_filters( 'woocommerce_order_button_text', __( 'Place order', 'woocommerce' ) );
    echo '<input type="submit" class="button alt" name="woocommerce_checkout_place_order" id="place_order" value="' . esc_attr( $order_button_text ) . '" data-value="' . esc_attr( $order_button_text ) . '" />';
}

add_filter( 'woocommerce_order_button_html', 'remove_woocommerce_order_button_html' );
function remove_woocommerce_order_button_html() {
    return '';
}

remove_action( 'woocommerce_checkout_order_review', 'woocommerce_checkout_payment', 20 );
add_action( 'woocommerce_checkout_billing', 'woocommerce_checkout_payment', 5 );

// CUSTOM CLASSES FIELDS CHECKOUT
add_filter('woocommerce_billing_fields', 'custom_woocommerce_billing_fields');
function custom_woocommerce_billing_fields( $fields ) {
    $fields['billing_first_name']['class'] = array( 'form-row-wide' );
    $fields['billing_last_name']['class'] = array( 'form-row-wide' );
    $fields['billing_address_1']['class'] = array( 'form-row-wide' );
    $fields['billing_neighborhood']['class'] = array( 'form-row-wide' );
    $fields['billing_number']['class'] = array( 'form-row-wide' );
    $fields['billing_address_2']['class'] = array( 'form-row-wide' );
    $fields['billing_city']['class'] = array( 'form-row-wide' );
    $fields['billing_postcode']['class'] = array( 'form-row-wide' );
    return $fields;
}

// MODIFICAR CLASSE DE FORM PARA OCUPAR A LINHA INTEIRA
add_filter( 'woocommerce_checkout_fields' , 'custom_wc_checkout_fields' );
function custom_wc_checkout_fields( $fields ) {
    $fields['billing']['billing_first_name']['autofocus'] = false;
    $fields['shipping']['shipping_first_name']['autofocus'] = false;
    return $fields;

}

// TROCAR NOME BOTÃO FINALIZAR COMPRA
add_filter( 'woocommerce_order_button_text', 'woo_custom_order_button_text' ); 
function woo_custom_order_button_text() {
    return __( 'FINALIZAR PEDIDO', 'woocommerce' ); 
}

add_filter( 'woocommerce_cart_item_name', 'cart_variation_description', 20, 3);
function cart_variation_description( $name, $cart_item, $cart_item_key ) {
    // Get the corresponding WC_Product
    $product_item = $cart_item['data'];
    if(!empty($product_item) && $product_item->is_type( 'variation' ) ) {
        // WC 3+ compatibility
        $descrition = version_compare( WC_VERSION, '3.0', '<' ) ? $product_item->get_variation_description() : $product_item->get_description();
        $result = __( '', 'woocommerce' ) . mb_strtolower($descrition);
        return  $result;
    } else
        return $name;
}

// TIRAR PERSISTENCIA CART ITEMS
add_filter( 'woocommerce_persistent_cart_enabled', '__return_false' );
add_filter('get_user_metadata', 'wc_remove_persistent_cart', 10, 3); 
add_filter('update_user_metadata', 'wc_remove_persistent_cart', 10, 3); 
add_filter('add_user_metadata', 'wc_remove_persistent_cart', 10, 3);
function wc_remove_persistent_cart($value, $id, $key) { 
    if ($key == '_woocommerce_persistent_cart') { 
        return false; 
    } 
    return $value; 
}

// MUDAR DE ENTREGA PARA FRETE
add_filter( 'woocommerce_shipping_package_name' , 'woocommerce_replace_text_shipping_to_delivery', 10, 3);
function woocommerce_replace_text_shipping_to_delivery($package_name, $i, $package){
    return sprintf( _nx( 'Frete', 'Frete %d', ( $i + 1 ), 'shipping packages', 'slenza' ), ( $i + 1 ) );
}

// PERMITIR SOMENTE UM PRODUTO NO CART
add_filter( 'woocommerce_add_cart_item_data', 'woo_custom_add_to_cart' );
function woo_custom_add_to_cart( $cart_item_data ) {
    global $woocommerce;
    $woocommerce->cart->empty_cart();
    // Do nothing with the data and return
    return $cart_item_data;
}

// EM TEORIA ERA PRA CHECAR O STATUS DA ORDEM E SOMENTE IR PARA A PAGINA SEGUINTE CASO O STATUS MUDE PARA 
// FAILED OU PROCESSING, MAS NÃO ESTÁ FUNCIONANDO MUITO BEM
// add_action( 'woocommerce_checkout_order_processed', 'is_express_delivery',  1, 1  );
// function is_express_delivery( $order_id ){
//    $order = new WC_Order( $order_id );
//    if($order->has_status('pending')){
//     sleep(5);
//    }
//    else {

//    return;
//     }
// }

// DEFINE THE woocommerce_review_order_before_payment callback
add_action( 'woocommerce_review_order_before_submit', 'action_woocommerce_review_order_before_payment', 10, 0 );
function action_woocommerce_review_order_before_payment(  ) {
    ?>
    <script>
        /** */
        /** atualiza para sem juros no select de parcelas */            
        jQuery("#pagarme-installments option").each(function(){
            var str = jQuery(this).text();
            var find = '(';
            var indexOfFirst = str.indexOf(find);
            res = str.substring(indexOfFirst, -1);
            //alert( res );
            jQuery(this).html(res+' (sem juros)');
        });
        
        var parcelas = jQuery('#pagarme-installments option:last').val(); // pega a maior parcela           
        jQuery('#pagarme-installments option:last').prop('selected',true); // marca a maior parcela como default
        jQuery('#pagarme-installments option:first').prop('hidden',true); // Esconder o opção zerada
        
        jQuery("label[for='pagarme-card-holder-name']").html("Nome impresso no cartão"); // muda o label  do campo nome do cartão
        jQuery("#billing_address_2_field > label").html("Complemento"); // muda o label do campo endereço 2 p/ Complemento

        jQuery('#pagarme-installments').change(function(event) {
            var active = jQuery(this, 'option:selected').val();              
            jQuery( document ).ajaxComplete(function(){
            jQuery("#pagarme-installments option").each(function(){
                if (jQuery(this).val() == active) {
                    jQuery(this).prop('selected', true);
                }    
            });
            });
        });
    </script>
    <?php
};

// RETORNA O NUMERO MAXIMO DE PARCELAS DO PAGARME
function maxInstallmentsPagarme(){
    $data = new WC_Pagarme_Credit_Card_Gateway();
    return $data->max_installment;
}

// ADD VARIATION SETTINGS
add_action( 'woocommerce_product_after_variable_attributes', 'variation_settings_fields', 10, 3 );
function variation_settings_fields( $loop, $variation_data, $variation ) {
    // Select Field
    woocommerce_wp_select( 
        array( 
            'id'          => '_variation_popular_status[' . $variation->ID . ']', 
            'label'       => __( 'Habilitar como Destaque?', 'woocommerce' ), 
            'placeholder' => '',
            'desc_tip'    => 'true',
            'description' => __( 'Define se a variação sera marcada como Destaque', 'woocommerce' ),
            'value'       => get_post_meta( $variation->ID, '_variation_popular_status', true ),
            'options' => array(
                'disabled'   => __( 'Desabilitado', 'woocommerce' ),
                'enabled'   => __( 'Habilitado', 'woocommerce' )
            )
        )
    );
    // Text Field
    woocommerce_wp_text_input( 
        array( 
            'id'          => '_variation_popular_title[' . $variation->ID . ']', 
            'label'       => __( 'Titulo do produto em destaque', 'woocommerce' ), 
            'placeholder' => 'Ex: Mais Popular, Em Destaque, etc..',
            'desc_tip'    => 'true',
            'description' => __( 'Titulo visivel ex: Mais popular, Em destaque, etc..', 'woocommerce' ),
            'value'       => get_post_meta( $variation->ID, '_variation_popular_title', true )
        )
    );
}

// SAVE VARIATION SETTINGS
add_action( 'woocommerce_save_product_variation', 'save_variation_settings_fields', 10, 2 );
function save_variation_settings_fields( $post_id ) {
    // Select Field
    $select = $_POST['_variation_popular_status'][ $post_id ];
    if( ! empty( $select ) ) {
        update_post_meta( $post_id, '_variation_popular_status', esc_attr( $select ) );
    }
    // Text Field
    $text_field = $_POST['_variation_popular_title'][ $post_id ];
    if( ! empty( $text_field ) ) {
        update_post_meta( $post_id, '_variation_popular_title', esc_attr( $text_field ) );
    }
}


// ADD NEW VARIATION SETTINGS
add_filter( 'woocommerce_available_variation', 'load_variation_settings_fields' );
function load_variation_settings_fields( $variations ) {    
    // duplicate the line for each field
    $variations['variation_popular_status'] = get_post_meta( $variations[ 'variation_id' ], '_variation_popular_status', true );
    $variations['variation_popular_title'] = get_post_meta( $variations[ 'variation_id' ], '_variation_popular_title', true );    
    return $variations;
}

// REMOVE EMOJIS E AUTO EMBEDS DO WORDPRESS
add_action( 'init', 'disable_emojis' );
function disable_emojis() {
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_action( 'admin_print_styles', 'print_emoji_styles' ); 
    remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' ); 
    remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
    add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
    add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );
}

function disable_emojis_tinymce( $plugins ) {
    if ( is_array( $plugins ) ) {
        return array_diff( $plugins, array( 'wpemoji' ) );
    } else {
        return array();
    }
}

function disable_emojis_remove_dns_prefetch( $urls, $relation_type ) {
    if ( 'dns-prefetch' == $relation_type ) {
        /** This filter is documented in wp-includes/formatting.php */
        $emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );
        $urls = array_diff( $urls, array( $emoji_svg_url ) );
    }
    return $urls;
}

add_action( 'wp_footer', 'my_deregister_scripts' );
function my_deregister_scripts(){
    wp_dequeue_script( 'wp-embed' );
}