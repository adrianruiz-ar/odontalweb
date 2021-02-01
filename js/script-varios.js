// Menú Superior

$(window).scroll(function(){
	$('#menuTop').toggleClass('scroll', $(this).scrollTop() > 50);
});

