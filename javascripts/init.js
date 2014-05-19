$(document).ready(function($) {
	$(".scroll").click(function(event){		
		event.preventDefault();
		var hash = $(this).attr("href");
		$('html,body').animate({scrollTop: $(this.hash).offset().top}, 'slow', 'easeOutQuint',
		  function()
		  {
		    //setTimeout(function() {
			    window.location.hash = hash;
		    //}, 100);
          });
	});
});

$(document).ready(function($) {
	$(window).on("resize", function(){
		var windowHeight = $(window).height();
		
		if (windowHeight < 855) {
			$("body").addClass("smallviewport");
		} else {
			$("body").removeClass("smallviewport");
		}
	});
	
	$(window).trigger("resize");
});

$(window).load(function(){
	var y = $("#mainmenu").offset().top;
		
	$(window).on("scroll", function(){
		var windowScroll = $(window).scrollTop();
		if (windowScroll > y) {
			$("#mainmenu").addClass("fixed");
		} else {
			$("#mainmenu").removeClass("fixed");
		}
	});
	

	$(window).trigger("scroll");

});
