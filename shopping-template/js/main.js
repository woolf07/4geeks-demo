/*
// DEV: Esteban Ch. Lobo || 16-12-19
*/    	
$(function(){

	var elca,
	parentDiv,
	childDiv,
	$_slider = $('.owl-carousel');

	var appObj = {
		init: function(){
			console.log('init');
			this.sliderProd();
		},
		listItems: function(){
			//
		},
		sliderProd: function(){
			$_slider.owlCarousel({
				loop: true,
				lazyLoad: true,
				margin: 10,
				nav:false,
				rtl:false,
				merge:true,
				stagePadding: 50,
				responsiveClass: true,
				responsive: {
				  0: {
				    items: 1,
				    nav: true
				  },
				  600: {
				    items: 3,
				    nav: false
				  },
				  1000: {
				    items: 5,
				    nav: true,
				    loop: false,
				    margin: 20
				  }
				}
			});
		} 
	}
	
	appObj.init();

});