$(document).ready(function() {
	console.log('Ready for domination!');
	$('#main_wrapper').css('height', $(window).height());
	$('#content_wrapper').css('top', $(window).height());
	$('#date_content').html(formatDate(new Date()));
	$('.content_slide').css('height', $(window).height());

	$('#content_wrapper aside ul li').on('click', function() {
		var nav_link = $(this).attr('id').substring(0, $(this).attr('id').indexOf('_'));
		$('html, body').animate({
        scrollTop: $("#id_" + nav_link + "_section").offset().top
    }, 500);
	});

	$(window).scroll(function() {
		var windowTop = $(window).scrollTop();
		if (windowTop > $('#main_wrapper').height()) {
			$('#content_wrapper aside').css('position', 'fixed');
			$('#content_wrapper main').css('margin-left', $('#content_wrapper aside').width() + 100);

			var content_height = $('.content_slide').height();

			if (windowTop < content_height * 1.5) {
				$('#content_wrapper aside ul li#first_link').addClass('active');
				$('#content_wrapper aside ul li#second_link').removeClass('active');
				$('#content_wrapper aside ul li#third_link').removeClass('active');
			} else if (windowTop >= content_height * 1.5 && windowTop < content_height * 2.5) {
				// move from About Me to Experience
				$('#content_wrapper aside ul li#first_link').removeClass('active');
				$('#content_wrapper aside ul li#second_link').addClass('active');
				$('#content_wrapper aside ul li#third_link').removeClass('active');
			} else if (windowTop > content_height * 2.5 && windowTop < content_height * 3) {
				// move from Experience to Projects
				$('#content_wrapper aside ul li#second_link').removeClass('active');
				$('#content_wrapper aside ul li#third_link').addClass('active');
			}


		} else {
			$('#content_wrapper aside').css('position', 'relative');
			$('#content_wrapper aside').css('height', $(window).height());
			$('#content_wrapper main').css('margin-left', 'auto');
		}


	});
});


function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return monthNames[monthIndex] + ' ' + day + ', ' + year;
}