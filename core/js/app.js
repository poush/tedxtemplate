// jQuery Code


$(window).scroll(function(){
	var height = $(window).scrollTop();
	if(height > 150)
		$('nav').addClass('shrink');
	else
		$('nav').removeClass('shrink');
})