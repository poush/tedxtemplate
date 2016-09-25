// jQuery Code


$(window).scroll(function(){
	var height = $(window).scrollTop();

	if(height > 50)
		$('nav').addClass('shrink');
	else
		$('nav').removeClass('shrink');

})

$("nav ul li a[href^='#']").on('click', function(e){

	e.preventDefault();

	var hash = this.hash;

	$('html,body').animate({
		scrollTop: $(hash).offset().top
	}, 1500, function(){
		window.location.hash = hash;
	})

})