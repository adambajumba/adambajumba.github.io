$(document).ready(function(){

	//Code to center the content div
	$box = $('.content');
	$ht = $box.height()+175;
	$win_ht = $(window).height();

	if ($win_ht>$ht) {
		$box.css({
			'left' : '50%',
			'top' : '50%',
			'margin-left' : -$box.width()/2 + 'px',
			'margin-top' : -$ht/2 + 'px'
		});
	}else{
		$box.css({
			'left' : '50%',
			'margin-left' : -$box.width()/2 + 'px',
			'margin-top' : '60px',
			'margin-bottom' : '60px'
		});
	}






	//code for the background slider
	$.backstretch([
      "img/pic-one.jpg",
      "img/pic-two.jpg",
      "img/pic-three.jpg"

    ], {
        fade: 750,
        duration: 2500
    });




	//show and hide loading icon
	function submit_icons(hide, show){
			$('#mc_submit i').removeClass(hide);
			$('#mc_submit i').addClass(show);
	}


	//Hide ToolTip
	function hide_tooltip(){

		var tooltip = $(".tooltip");
		 tooltip.animate({
            opacity : 0
        }, 300, function(){
        	tooltip.remove();
        });

	}

});
