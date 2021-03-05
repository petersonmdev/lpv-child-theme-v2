jQuery(document).ready(function() {
    var m_names = new Array("Janeiro", "Fevereiro", "Março", 
    "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", 
    "Outubro", "Novembro", "Dezembro");

    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();

    document.getElementById("data").innerHTML = curr_date + " de " + m_names[curr_month] 
    + " de " + curr_year;

    parcelas = jQuery('#pagarme-installments option:last').val();
    jQuery(".precofinal").each( function() {
    var real = parseFloat(jQuery(this).text().replace('R$', '').replace(',', '.')) / parcelas;
    jQuery(this).html(parcelas+'x <span class="d-inline-block">R$ ' + real.toFixed(2).replace('.', ',') +'</span>');
    });

    jQuery("#billing_address_2").attr('maxlength','20');
});

jQuery( document ).ajaxComplete(function(){
    parcelas = jQuery('#pagarme-installments option:last').val();
    jQuery(".amount").each( function() {
      var real = parseFloat(jQuery(this).text().replace('R$', '').replace(',', '.')) / parcelas;
      if (real > 1) {

        jQuery(this).html(parcelas+'x de <span class="d-inline-block">R$ ' + real.toFixed(2).replace('.', ',') +'</span>');
      }
    });
});

jQuery('#place_order').on('click',function(){
    setTimeout(function(){
      //if is any error found. then do this
      jQuery(document).scrollTop(jQuery('.woocommerce-error').offset().top);
    }, 100);
});