<?php


/*****************************************************
******************************************************
****************** CUSTOM FOR INDIVIDUAL THEMES
*****************************************************
**************************************************/

$primary_color = get_field('cor_primaria', 'option');
$secondary_color = get_field('cor_secundaria', 'option');
$therdiary_color = get_field('cor_envio_imediato', 'option');
$cta = get_field('cta', 'option');
$cta_borda = get_field('cta_borda', 'option');
$cta_hover = get_field('cta_hover', 'option');
$save_color = get_field('voce_economiza', 'option');
$imediate_shipping = get_field('cor_envio_imediato', 'option');
?>

<style>
	
	/*
  	Flaticon icon font: Flaticon
  	Creation date: 13/02/2019 10:58
  	*/
	@font-face {
	  font-family: "Flaticon";
	  src: url("<?php echo get_stylesheet_directory_uri() ?>/assets/fonts/Flaticon.eot");
	  src: url("<?php echo get_stylesheet_directory_uri() ?>/assets/fonts/Flaticon.eot?#iefix") format("embedded-opentype"),
	       url("<?php echo get_stylesheet_directory_uri() ?>/assets/fonts/Flaticon.woff2") format("woff2"),
	       url("<?php echo get_stylesheet_directory_uri() ?>/assets/fonts/Flaticon.woff") format("woff"),
	       url("<?php echo get_stylesheet_directory_uri() ?>/assets/fonts/Flaticon.ttf") format("truetype"),
	       url("<?php echo get_stylesheet_directory_uri() ?>/assets/fonts/Flaticon.svg#Flaticon") format("svg");
	  font-weight: normal;
	  font-style: normal;
	}

	@media screen and (-webkit-min-device-pixel-ratio:0) {
	  @font-face {
	    font-family: "Flaticon";
	    src: url("<?php echo get_stylesheet_directory_uri() ?>/assets/fonts/Flaticon.svg#Flaticon") format("svg");
	  }
	}

	[class^="flaticon-"]::before, [class*=" flaticon-"]::before,
	[class^="flaticon-"]::after, [class*=" flaticon-"]::after {   
	  font-family: Flaticon;
	  font-size: 38px;
	  font-style: normal;
	  margin-left: 0px;
	  color:  <?=$primary_color?>;
	  float: right;
	}


	@media only screen and (max-width: 768px){
		[class^="flaticon-"]::before, [class*=" flaticon-"]::before,
		[class^="flaticon-"]::after, [class*=" flaticon-"]::after { 
		  font-size: 26px;
		  margin-right: 10px;
		}
	}

	.flaticon-like::before { content: "\f100"; }
	.flaticon-truck::before { content: "\f101"; }
	.flaticon-shield::before { content: "\f102"; }
	.flaticon-padlock::before { content: "\f103"; }
	.flaticon-payment::before { content: "\f104"; }
	.flaticon-phone-call::before { content: "\f105"; }

	.col-mg-icon{
		display: flex;
	    align-items: center;
	    justify-content: flex-end;
	}




	h1, h2, h3, h4, h5, h6{
		color:  <?=$primary_color?>;
	}

	h1::after, h2::after{
		border-bottom: 2px solid <?=$primary_color?> !important;
	}
	p a{ color:  <?=$primary_color?>; text-decoration: none !important; box-shadow: inset 0 -1px 0 <?=$primary_color?> !important; }
	p a:hover{ color:  <?=$secondary_color?> !important; text-decoration: none !important;  box-shadow: inset 0 0 0 <?=$secondary_color?>, 0 3px 0 <?=$secondary_color?>  !important; }

	.btn-secondary {
	    color: #fff;
	    background-color: <?=$cta?>;
	    border-bottom: 3px solid <?=$cta_borda?> !important;
	    text-transform: uppercase;
	}
	.btn-secondary:hover {
	    color: #fff;
	    background-color: <?=$cta_hover?>;
	    border-bottom: 3px solid <?=$cta_borda?> !important;
	}


	section a{ color: <?=$primary_color?> !important; }
	section .btn{ color: #fff !important; }

	nav a:hover{ color: <?=$primary_color?> !important; }
	nav .order-nav a:hover{ color: #fff !important; }


	#page > header > div.topbar{ position: relative; }
	#page > header > div.topbar::before{ content: ""; position: absolute; top: 0; width: 100%; height: 6px; background: <?=$primary_color?>; }
	#page > header > div.topbar::after{ content: ""; position: absolute; top: 6px; width: 100%; height: 4px; background: <?=$secondary_color?>; }
	#page > header.scrolled div.topbar::before{ display: none !important }
	#page > header.scrolled div.topbar::after{ display: none !important }


	.benefit-name{ color: <?=$primary_color?> !important; }
	.section-order-pattern{ display: none !important }
	.section-order{ position: relative; background: <?=$primary_color?>; }
	.section-order h2::after{ border-bottom: 2px solid white !important; }
	.section-order .featured ins .precofinal{ color:  <?=$primary_color?> !important; }
	.section-order .save{ color:  <?=$save_color?> !important; }
	.section-order::before{ content: ""; position: absolute; top: 10px; width: 100%; height: 20px; background: <?=$secondary_color?>;  }

	.accordion-toggle{ color:  <?=$primary_color?> !important; }
	.accordion-toggle::before{ color:  <?=$primary_color?> !important; }
	.ref-title{ color:  <?=$primary_color?> !important; }
	.anchor-ref{ background: <?=$primary_color?> !important; }
	.section-order .shipping{ color: <?=$imediate_shipping?>  }

	#menu-footer-portugues a:hover{ color:  <?=$primary_color?> !important; }


	div.wpcf7 label{
		width: 100% !important
	}


	.detalhes {
	    position: absolute;
	    left: 0;
	    right: 0;
	    margin-left: auto;
	    margin-right: auto;
	    background: <?=$primary_color?>;
	    display: block;
	    border: 1px solid green;
	    width: 45px !important; height: 45px !important;
	    border-top: 4px solid <?=$secondary_color?>;
	    -webkit-clip-path: polygon(52% 50%, 0 0, 100% 0);
		clip-path: polygon(52% 50%, 0 0, 100% 0);
	}

	.big-text::before{
		border-bottom: 2px solid <?=$primary_color?>;
	}

	.testimonials .testimony-title {
    color: <?=$primary_color?> !important;
	}
	.navbar-default .navbar-nav>li>a:focus, .navbar-default .navbar-nav>li>a:hover{
		color: <?=$primary_color?> !important;
		border: 0 !important;
		outline: 0 !important;
	}

	#combo-block-2 ins span.amount{
		color: <?=$primary_color?> !important;
	}

	.section-bullets ul li:before{
		color: <?=$primary_color?> !important;
	}


</style>