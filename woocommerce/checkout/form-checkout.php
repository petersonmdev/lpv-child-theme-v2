<?php
/**
 * Checkout Form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-checkout.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

do_action( 'woocommerce_before_checkout_form', $checkout );

// If checkout registration is disabled and not logged in, the user cannot checkout.
if ( ! $checkout->is_registration_enabled() && $checkout->is_registration_required() && ! is_user_logged_in() ) {
	echo esc_html( apply_filters( 'woocommerce_checkout_must_be_logged_in_message', __( 'You must be logged in to checkout.', 'woocommerce' ) ) );
	return;
}

?>
<div class="container">
	<form name="checkout" method="post" class="checkout woocommerce-checkout" action="<?php echo esc_url( wc_get_checkout_url() ); ?>" enctype="multipart/form-data">
		<div class="row">
			<div class="col-md-7 col-12">
				<div class="content-sumary-product p-md-4 p-2 mb-3">
					<h2 class="text-center title-review-order m-0 py-1">SEU PEDIDO ESTÁ QUASE FINALIZADO!</h2>
					<h2 class="text-center subtitle-review-order m-0 pb-3">Informe seus dados de pagamento.</h2>
					<div class="row">
						<div class="col-md-3 col-12 content-img-sumary">
							<?php foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ):
								$product = get_product( $cart_item['product_id'] );
								if( $product->is_type( 'variable' ) ) :
									$image_id = $cart_item['data']->{'image_id'};
									$thumbnail = wp_get_attachment_image( $image_id, '', '', ['class'=> 'img-responsive mx-auto', 'alt'=>'some'] );
									echo $thumbnail;
								else : ?>
									<img src="<?php echo get_the_post_thumbnail_url($cart_item['product_id']); ?>" alt="" class="img-responsive list-icon img-checkout">
								<?php endif;
							endforeach; ?>
						</div>
						<div class="col-md-9 col-12 content-table-sumary">
							<?php do_action( 'woocommerce_checkout_before_order_review' ); ?>
							<div id="order_review" class="py-3 woocommerce-checkout-review-order">
								<?php do_action( 'woocommerce_checkout_order_review' ); ?>
							</div>
							<?php do_action( 'woocommerce_checkout_after_order_review' ); ?>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-5">
				<div class="content-form-checkout">
					<?php if ( $checkout->get_checkout_fields() ) : ?>
						<?php do_action( 'woocommerce_checkout_before_customer_details' ); ?>
						<div class="col2-set" id="customer_details">
							<?php do_action( 'woocommerce_checkout_billing' ); ?>
							<?php do_action( 'woocommerce_checkout_shipping' ); ?>
						</div>
						<?php do_action( 'woocommerce_checkout_after_customer_details' ); ?>
					<?php endif; ?>
				</div>
				<div class="encryption text-center pt-2">
					<i class="flaticon-padlock"></i>
					<span>Criptografia de segurança SSL 256 bits</span>
				</div>
			</div>
		</div>
	</form>
</div>

<?php do_action( 'woocommerce_after_checkout_form', $checkout ); ?>