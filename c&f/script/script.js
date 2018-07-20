"use strict"

/*PROMO-SLIDER*/

function proceed($element){
  var $items = $('.promo-slider-item');
  var $dots = $('.promo-slider-dot');
  var i;
  
  if($element){
    i = $dots.index($($element));
    console.log(i)
  }else{
    i = $items.index($('.active-item'));
    if (i < $items.length - 1) i ++ 
      else i = 0 
  }

  $items.each(function(){
    $(this).removeClass('active-item')
  });

  $dots.each(function(){
    $(this).removeClass('active-dot')
  });

  $($items[i]).addClass('active-item');
  $($dots[i]).addClass('active-dot');
}

$('.promo-slider-dot').click(function(){//change by click
  proceed($(this));
});

setInterval(function(){//autoplay
  proceed(false);
}, 6000);


/* HEADER SLIDER */

$(document).ready(function(){
  $('.slider').slick({
  	dots: true,
  	autoplay: true,
  	autoplaySpeed: 5000,
  	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1
  });
});


/* CAROUSELS */

$(document).ready(function(){

/* CAROUSEL SECTION FEATURES "PRODUTOS EM DESTAQUE" */

  $(".owl-carousel-1").owlCarousel({
  	nav: true,
  	navContainer: '.carousel',
    responsiveBaseElement: '.carousel-wrapper',
    responsiveRefreshRate: 200,
    responsiveClass: true,
    responsive:{
      0: {
        items: 3,
      },
      425: {/* <-- here it means "@media screen and (max-width: 320px)" */
        items: 6,
      },
    },
  	loop: true,
  	autoplay: true,
  	autoplayHoverPause: true,
    autoplayTimeout: 10000,
  });


/* CAROUSEL SECTION "GALERIA DO INSTAGRAM" */

  $(".owl-carousel-2").owlCarousel({
    responsiveBaseElement: '.inst-gal-carousel',
     responsive:{
      0: {
        items: 3,
      },
      320: {
        items: 5,
      },
    },

    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
  });

/* CAROUSEL SECTION "QUEM USA" */

  $(".owl-carousel-3").owlCarousel({
    responsiveBaseElement: '.clients-carousel',
     responsive:{
      0: {
        items: 3,
      },
      320: {
        items: 4,
      },
    },

    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 7000,
  });

});