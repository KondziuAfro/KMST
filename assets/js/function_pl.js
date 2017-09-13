$(document).ready(function(){
  smoothScroll(3000);
  $(window).scroll(function(){
    if ($(document).scrollTop() > 50){
        $('nav').addClass('shrink');
    }else{
      $('nav').removeClass('shrink');
    }
  });
  $('.works_pl').parallax({
    imageSrc: 'assets/img/work.jpg'
  });
  $('.employees_pl').parallax({
    imageSrc: 'assets/img/employees.jpg'
  });
  $('.mob-nav-toggle').click(function(){
    $('.nav-list').toggleClass('none');
    $('.mob-nav-toggle span').toggleClass('is-on');
    $('nav').toggleClass('on');

  });

  function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


});
