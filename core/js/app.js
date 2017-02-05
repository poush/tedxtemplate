// jQuery Code

$(function(){
	var height = $(window).scrollTop();
	if(height > 50)
		$('nav').addClass('shrink');
})

$(window).scroll(function(){
	var height = $(window).scrollTop();

	if(height > 50)
		$('nav').addClass('shrink');
	else
		$('nav').removeClass('shrink');

});
$("#performances-carousel").carousel();

$("a[href^='#']").on('click', function(e){

	e.preventDefault();

	var hash = this.hash;

	$('html,body').animate({
		scrollTop: $(hash).offset().top
	}, 500, function(){
		window.location.hash = hash;
	})

});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
