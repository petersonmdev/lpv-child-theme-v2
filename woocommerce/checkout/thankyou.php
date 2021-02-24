<?php
/**
 * Thankyou page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/thankyou.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @package 	WooCommerce/Templates
 * @version     3.2.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div class="woocommerce-order" class="container">

	<?php if ( $order ) : ?>

		<?php if ( $order->has_status( 'failed' ) ) : ?>
<?php 
			$items = $order->get_items();
			$items = array_pop(array_reverse($items));
			$link_comprar =  get_site_url() . '/?add-to-cart=' . $items['product_id'] . "&variation_id=" . $items['variation_id'];
			?>
			<div class="modal in" tabindex="-1" role="dialog">
				<div class="modal-dialog" role="document">
					<div class="modal-content">

						<div class="modal-body">
							<p class="woocommerce-notice woocommerce-notice--error woocommerce-thankyou-order-failed" style="color:red; text-align: center"><?php _e( 'Unfortunately your order cannot be processed as the originating bank/merchant has declined your transaction. Please attempt your purchase again.', 'woocommerce' ); ?></p>
							<div class="container"  style="margin:auto; max-width: 400px;" >
							<div style="margin: 0 auto; width: 210px;">
								<a style="margin: auto;" href="<?php echo $link_comprar ?>" class="text-center btn btn-secondary cta-1 page-scroll btn-buy">Tentar novamente</a>
							</div>
								<p style="text-align: center;">Você será redirecionado automaticamente em <span id="count">10</span> segundos...</p>

								<script type="text/javascript">

									window.onload = function(){

										(function(){
											var counter = 10;

											setInterval(function() {
												counter--;
												if (counter >= 0) {
													span = document.getElementById("count");
													span.innerHTML = counter;
												}
												    // Display 'counter' wherever you want to display it.
												    if (counter === 0) {
												    //    alert('this is where it happens');
												    clearInterval(counter);
												}

											}, 1000);

										})();

									}

								</script>

								<meta http-equiv="refresh" content="10;url=<?php echo $link_comprar ?>" />
							</div>
						</div>

					</div>
				</div>
			</div>
<div class="modal-backdrop fade in"></div>

		<?php elseif ( $order->has_status( 'processing' ) ) : ?>

			<script>
			  jQuery(document).ready(function($) {

			      <?php if(have_rows('google_analytcs', 'option')): ?>
			      	<?php while(have_rows('google_analytcs', 'option')): ?>
			      		<?php the_row(); ?>

			      		var r = document.createElement("script");
				        r.type = "text/javascript";
				        r.innerHTML = "gtag(\"event\", \"conversion\", { \"send_to\": \"<?php echo get_sub_field('tag_thankyou', 'option') ?>\", \"transaction_id\": \"\" });";
				        $("head").append(r);

			      	<?php endwhile; ?>
			      <?php endif; ?>
			  });
			</script>

			<p class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received"><?php echo apply_filters( 'woocommerce_thankyou_order_received_text', __( 'Thank you. Your order has been received.', 'woocommerce' ), $order ); ?></p>

			<ul class="woocommerce-order-overview woocommerce-thankyou-order-details order_details">

				<li class="woocommerce-order-overview__order order">
					<?php _e( 'Order number:', 'woocommerce' ); ?>
					<strong><?php echo $order->get_order_number(); ?></strong>
				</li>

				<li class="woocommerce-order-overview__date date">
					<?php _e( 'Date:', 'woocommerce' ); ?>
					<strong><?php echo wc_format_datetime( $order->get_date_created() ); ?></strong>
				</li>

				<?php if ( is_user_logged_in() && $order->get_user_id() === get_current_user_id() && $order->get_billing_email() ) : ?>
					<li class="woocommerce-order-overview__email email">
						<?php _e( 'Email:', 'woocommerce' ); ?>
						<strong><?php echo $order->get_billing_email(); ?></strong>
					</li>
				<?php endif; ?>

				<li class="woocommerce-order-overview__total total">
					<?php _e( 'Total:', 'woocommerce' ); ?>
					<strong><?php echo $order->get_formatted_order_total(); ?></strong>
				</li>

				<?php if ( $order->get_payment_method_title() ) : ?>
					<li class="woocommerce-order-overview__payment-method method">
						<?php _e( 'Payment method:', 'woocommerce' ); ?>
						<strong><?php echo wp_kses_post( $order->get_payment_method_title() ); ?></strong>
					</li>
				<?php endif; ?>

			</ul>
			<?php else : ?>
				<div class="container">
    <img style="max-width: 200px;" src="<?php echo get_template_directory_uri(); ?>/assets/junk/images/loading.gif ?>" class="center">
    </div>
			<script type="text/javascript">
				window.location.reload();

			</script>

			?>
		<?php endif; ?>

		<?php do_action( 'woocommerce_thankyou_' . $order->get_payment_method(), $order->get_id() ); ?>
		<?php do_action( 'woocommerce_thankyou', $order->get_id() ); ?>


		
	<?php else : ?>

		<p class="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received"><?php echo apply_filters( 'woocommerce_thankyou_order_received_text', __( 'Thank you. Your order has been received.', 'woocommerce' ), null ); ?></p>

	<?php endif; ?>

	<p><a href="<?php echo get_site_url(); ?>"><button class="button btn-cart btn btn-md Green">Voltar</button></a></p>

</div>
