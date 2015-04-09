function minHeight() {
	if ( $('.wrapper').height() < $(window).height() ) {
		$('body, .wrapper').height($(window).height());
	}
}
$(document).ready(function() {
	$('.introduction .slider').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'fade',
		fadeSpeed: 0,
		crossfade: false,
		play: 0,
		pause: 1000
	});
	minHeight();
	$('.header .search input').focusin(function() {
		$(this).parents('.search').addClass('active');
	});
	$('.header .search input').focusout(function() {
		$(this).parents('.search').removeClass('active');
	});
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	if ( $('.product').length > 0 ) {
		var prodLeft = Math.ceil(Math.random()*5);
		$('.product').append('<img src="./img/product_left_'+prodLeft+'.png" class="left" alt="">');
		var prodLeft = Math.ceil(Math.random()*5);
		$('.product > div > div').append('<img src="./img/product_top_'+prodLeft+'.png" class="top" alt="">');
	}
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});
$(window).resize(function() {
	minHeight();
});