"use strict"

/* TRIGGER OF FOURTH SECTION "SERVICES WE PROVIDE" */

$('.services-trigger-wrapper div').click(function(){
	let $i = $('.services-trigger-wrapper div').index(this);
	let $elements = $('.services-item-wrapper div');
	console.log($elements.length);
	$elements.each(function(){
		if($($elements).index(this)== $i) $(this).addClass('active')
			else $(this).removeClass('active')
	})
})


/* SLIDER */

$(document).ready(function(){
  $('.slider').slick({
  	dots: true,
  	slidesToShow: 2,
  	slidesToScroll: 1,
  	prevArrow: '<i class="fa fa-chevron-left slider-chevron" id="left-direction">',
  	nextArrow: '<i class="fa fa-chevron-right slider-chevron" id="right-direction"></i>',
  });
});