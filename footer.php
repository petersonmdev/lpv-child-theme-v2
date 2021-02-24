<?php
if(is_checkout()):
?> 

<footer class="content-info" role="contentinfo">
  <div class="content-info"></div>
  <div class="row">
		<div class="col-md-12" style="color: #848484; font-size: 13px;">N1 SUPPLEMENTS COMÉRCIO E DISTRIBUIÇÃO LTDA, CNPJ: 15.301.011/0001-89 | &copy; <?php echo date("Y")." ".get_bloginfo(); ?>. Todos direitos reservados.
    </div>
  </div>
</footer>


<script type="text/javascript">
  jQuery(document).ready(function($){
    jQuery("#billing_address_2").attr('maxlength','20');
  });
</script>

<?php if ( is_order_received_page()): ?>

<!-- parcelamento pagina thank you -->
<script type="text/javascript">  
  jQuery( document ).ready(function(){
    parcelas = jQuery('#pagarme-installments option:last').val(); //$('.woocommerce-message span').text().slice(-3);
    parcelas = parseFloat(parcelas.charAt(0));
    if (parcelas != 1) {
    jQuery(".amount").each( function() {
       var real = parseFloat(jQuery(this).text().replace('R$', '').replace(',', '.') / parcelas) ;
        if (real > 1) {
          jQuery(this).html(parcelas + 'x de R$ ' + real.toFixed(2).replace('.', ','));
        }
      })
    };
  });

</script>


<?php else: ?>

<!-- scroll para erro formulario pagarme -->
<script type="text/javascript">

  jQuery('#place_order').on('click',function(){
    setTimeout(function(){
      //if is any error found. then do this
      jQuery(document).scrollTop(jQuery('.woocommerce-error').offset().top);
    }, 100);
  });

</script>

<script type="text/javascript">
  jQuery( document ).ajaxComplete(function(){
    parcelas = jQuery('#pagarme-installments option:last').val();
    jQuery(".amount").each( function() {
      var real = parseFloat(jQuery(this).text().replace('R$', '').replace(',', '.')) / parcelas;
      if (real > 1) {

        jQuery(this).html(parcelas+'x de &nbsp;&nbsp;&nbsp; R$ ' + real.toFixed(2).replace('.', ','));
      }
    });
  });
</script>

<?php endif; ?>

<!-- mudar nome de entrega para frente -->

 <?php else:
?>

<footer class="content-info" style="padding-bottom: 0;" role="contentinfo">
  <div class="sampleClass"></div>
  <div class="container text-center" style="padding: 15px 0 20px">
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <ul id="menu-footer-portugues" class="list-inline">
      		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-8042 current_page_item menu-item-8548 active"><a title="Home" class="page-scroll" href="<?php echo get_site_url(); ?>">Home</a></li>
      		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8549"><a title="Termos e Condições" class="page-scroll" href="<?php echo get_site_url(); ?>/termos-condicoes/">Termos &amp; Condições</a></li>
      		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8550"><a title="Política de Privacidade" class="page-scroll" href="<?php echo get_site_url(); ?>/politica-privacidade/">Política de Privacidade</a></li>
      		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8551"><a title="Garantia" class="page-scroll" href="<?php echo get_site_url(); ?>/garantia/">Política de Reembolso</a></li>
      		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8552"><a title="Sobre Nós" class="page-scroll" href="<?php echo get_site_url(); ?>/sobre-nos/">Sobre Nós</a></li>
      		<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8553"><a title="Atendimento ao Cliente" class="page-scroll" href="<?php echo get_site_url(); ?>/contato/">Atendimento ao Cliente</a></li>
      	</ul>
      </div>
    </div>
  </div>
  <div class="row" style="background: #f6f6f6">
    <div class="col-12 text-center" style="color: #8d8d8d;font-size: 11px; border: 2px solid #ededed; line-height: 24px;">
      Os resultados podem variar de pessoa para pessoa *
    </div>
  </div>
  <div class="row" style="background: #d8d8d8;">
    <div class="col-12 text-center" style="color: #848484; font-size: 13px; padding: 10px 20px;
    line-height: 15px;">N1 SUPPLEMENTS COMÉRCIO E DISTRIBUIÇÃO LTDA, CNPJ: 15.301.011/0001-89 | &copy; <?php echo date("Y")." ".get_bloginfo(); ?>. Todos direitos reservados.
    </div>
  </div>
</footer>
<script type="text/javascript">
  jQuery( document ).ready(function(){
    parcelas = jQuery('#pagarme-installments option:last').val();
    jQuery(".precofinal").each( function() {
       var real = parseFloat(jQuery(this).text().replace('R$', '').replace(',', '.')) / parcelas;
       jQuery(this).html(parcelas+'x R$ ' + real.toFixed(2).replace('.', ','));
      });
  });
</script>

<?php endif; ?>

<?php do_action( 'storefront_after_footer' ); ?>

<?php wp_footer(); ?>

</body>
</html>