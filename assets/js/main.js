jQuery(".btn-buy").click(function(event){        
	event.preventDefault();
	if ( jQuery(window).width() <= 991 ) {
		jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top -200}, 700);
	} else {
		jQuery('html,body').animate({scrollTop:jQuery(this.hash).offset().top -200}, 700);
	}
});