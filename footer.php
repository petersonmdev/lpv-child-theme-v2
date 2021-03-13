  <?php if(is_checkout()): ?> 

    <footer class="pt-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center" style="color: #848484; font-size: 13px;">N1 SUPPLEMENTS COMÉRCIO E DISTRIBUIÇÃO LTDA, CNPJ: 32.017.806/0001-89 | &copy; <?php echo date("Y")." ".get_bloginfo(); ?>. Todos direitos reservados.
          </div>
        </div>
      </div>
    </footer>

  <?php else: ?>

    <footer>
      <div class="container text-center">
        <ul class="list-unstyled row">
          <li class="col-md-2 col-12"><a title="Home" href="<?php echo get_site_url(); ?>">Home</a></li>
          <li class="col-md-2 col-12"><a title="Termos e Condições" href="<?php echo get_site_url(); ?>/termos-condicoes/">Termos &amp; Condições</a></li>
          <li class="col-md-2 col-12"><a title="Política de Privacidade" href="<?php echo get_site_url(); ?>/politica-privacidade/">Política de Privacidade</a></li>
          <li class="col-md-2 col-12"><a title="Garantia" href="<?php echo get_site_url(); ?>/garantia/">Política de Reembolso</a></li>
          <li class="col-md-2 col-12"><a title="Sobre Nós" href="<?php echo get_site_url(); ?>/sobre-nos/">Sobre Nós</a></li>
          <li class="col-md-2 col-12"><a title="Atendimento ao Cliente" href="<?php echo get_site_url(); ?>/contato/">Atendimento ao Cliente</a></li>
        </ul>
    </div>
    <div class="container-fluid">
        <div class="row" style="background: #f6f6f6">
          <div class="col-12 text-center" style="color: #8d8d8d;font-size: 11px; border: 2px solid #ededed; line-height: 24px;">
            Os resultados podem variar de pessoa para pessoa *
          </div>
        </div>
        <div class="row" style="background: #d8d8d8;">
          <div class="col-12 text-center" style="color: #848484; font-size: 13px; padding: 10px 20px;
          line-height: 15px;">N1 SUPPLEMENTS COMÉRCIO E DISTRIBUIÇÃO LTDA, CNPJ: 32.017.806/0001-89 | &copy; <?php echo date("Y")." ".get_bloginfo(); ?>. Todos direitos reservados.
          </div>
        </div>
      </div>
    </footer>
    
  <?php endif; ?>

  <?php wp_footer(); ?>

  </body>
</html>