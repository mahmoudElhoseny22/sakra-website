
$(window).ready(function(){
	$(".loading .spinner").fadeOut(1000,
		function(){
			$(this).parent().fadeOut(1000)
		});
});
