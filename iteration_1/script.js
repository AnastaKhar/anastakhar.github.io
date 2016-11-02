$(document).ready(function() {

	//append new element
	for (i = 0; i < 100; i++){
	$("body").append( "<div class='element' style='background-color: hsl(" + i * 3.6 + ", 100%, 50%);'></div>" );
} //space after the "element" and before " added" to display it legible







	//mouse interation
	$('.element').mouseover(function() {
		$(this).css('background-color','black');
	});
	$('.element').mouseout(function() {
		$(this).css('background-color','#ff3151');
		});
});