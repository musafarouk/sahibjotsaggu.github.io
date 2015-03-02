$(document).ready(function() {
    /*$("footer").css("top", $(window).height() + $(".tile2_wrapper #greeting").height() + $(".tile2_wrapper #about_me").height() + $(".projects_wrapper").height() + "px");*/
    $(".tile2_wrapper .projects_wrapper #projects_list div").css("height", $("#projects_list").width()*(9/16));
	var get_col_width = $(".projects_wrapper .projects_list ul li").width();
    $(".projects_wrapper .projects_list ul li").css("height", get_col_width);
    $(".down_arrow").click(function() {
        $("html, body").animate({
            scrollTop : $(".tile2_wrapper").offset().top
        }, "easeOutBounce");
        return false;
    });
    $(window).resize(function() {
		var get_col_width = $(".projects_wrapper .projects_list ul li").width();
        $(".projects_wrapper .projects_list ul li").css("height", get_col_width);
        $(".tile2_wrapper .projects_wrapper #projects_list div").css("height", $("#projects_list").width()*(9/16));
    })
});
