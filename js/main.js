jQuery(document).ready(function($) {  

	// site preloader -- also uncomment the div in the header and the css style for #preloader
	$(window).load(function(){
		$('#preload').fadeOut('slow',function(){
			$(this).remove();
			$('#page').addClass('animation-play');
		});		
	});

});