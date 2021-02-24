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
		<div class="row row-size">
			<div class="col-md-7">
 				<h2 class="text-center title-review-order">SEU PEDIDO ESTÁ QUASE FINALIZADO!</h2>
				<h2 class="text-center title-review-order">Informe seus dados de pagamento.</h2>
				<div class="row">
					<div class="col-sm-3">
						<?php foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ): ?>
							<img src="<?php echo get_the_post_thumbnail_url($cart_item['product_id']); ?>" alt="" class="img-responsive list-icon img-checkout">
						<?php endforeach; ?>
					</div>
					<div class="col-sm-9" >
						<?php do_action( 'woocommerce_checkout_before_order_review' ); ?>
						<div id="order_review" class="woocommerce-checkout-review-order">
							<?php do_action( 'woocommerce_checkout_order_review' ); ?>
						</div>
						<?php do_action( 'woocommerce_checkout_after_order_review' ); ?>
					</div>
					<!-- GARANTIA ESTENDIDA BOTÃO -->
					<!-- <div id="message_fields">
						<p class="form-row add_gift_box form-row-wide" id="add_gift_box_field" data-priority="">
							<label class="checkbox">
								<input type="checkbox" class="input-checkbox" name="add_gift_box" id="add_gift_box" value="1" checked>
								<span id="extra-cost-label"></span>
							</label>
						</p>
					</div> -->
				</div>
			</div>
			<div class="col-sm-12 col-md-5">
				<?php if ( $checkout->get_checkout_fields() ) : ?>
					<?php do_action( 'woocommerce_checkout_before_customer_details' ); ?>
					<div class="col2-set" id="customer_details">
						<?php do_action( 'woocommerce_checkout_billing' ); ?>
						<?php do_action( 'woocommerce_checkout_shipping' ); ?>
					</div>
					<div class="encryption">
						<i class="fa fa-lock" aria-hidden="true"></i>
						<span>Criptografia de segurança SSL 256 bits</span>
					</div>
					<?php do_action( 'woocommerce_checkout_after_customer_details' ); ?>
				<?php endif; ?>
			</div>
		</div>
	</form>
</div>

<?php do_action( 'woocommerce_after_checkout_form', $checkout ); ?>