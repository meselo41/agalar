$(document).ready(function() {

 $(window).scroll(function() {
 	var sc = $(this).scrollTop();

 	if(sc > 350) {
 		$('.header-top').addClass('scmenu');
 	}
 	else {
 		$('.header-top').removeClass('scmenu');

 	}
 });;

 $('.showmenu').click(function() {
 	$('.headermenu').css({
 		display: 'block'
 	});
 });;
});