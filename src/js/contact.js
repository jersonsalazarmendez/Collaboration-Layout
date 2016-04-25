/*! collaboration-scripts v1.0
Developed by Jean Frank Arias Sánchez
*/
function dropToggle () {
	$('.dropdown-btn').mouseenter(function() {
		$('.dropdown-btn').addClass('active');
		$('.dropdown-menu').fadeIn(50);
	});
	$('.dropdown-menu').mouseleave(function() {
		$('.dropdown-btn').removeClass('active')
		$('.dropdown-menu').fadeOut(50);
	});
}

$(function(){

	var w = $(window).width();
	if(w>=640){
		$('.navigation-menu li:nth-child(2)').addClass('dropdown-btn');
		dropToggle();
	}else{
		$('.navigation-menu li:nth-child(2)').removeClass('dropdown-btn');
	}

	$('.nav-toggle').click(function() {
		$('.navigation-menu').slideToggle(400);
	});

	$('.arrow').click(function() {
		$('html, body').animate({scrollTop : 0},500);
	});

	setTimeout(function() {
		var txt = $('.navigation-menu .active').text();
		$('.nav-toggle').text(txt);
	}, 201);

});
$(window).resize(function() {
	var w = $(window).width();
	if(w>=640){
		$('.navigation-menu').fadeIn(0);
		$('.dropdown-menu').fadeOut(0);
		$('.navigation-menu li:nth-child(2)').addClass('dropdown-btn').removeClass('active');
		dropToggle();
	}else{
		$('.navigation-menu').fadeOut(0);
		$('.dropdown-menu').fadeOut(0);
		$('.navigation-menu li:nth-child(2)').removeClass('dropdown-btn');
	}
});