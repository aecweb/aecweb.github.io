jQuery(document).ready(function($) {
    $('.footer, .product_single-sidebar, .be-an-agent, .blog-item, .sidebar-cats, .pagination').persiaNumber();
	$('.products-sort label').on('click',function(){
			$(this).next().prop("checked", true);
			$('form#sortby').submit()
		});
	//Contact US
	if($(".contact-form").length) {
		$(this).find("#nonce").val(ajax_data.nonce);
	}
	$("#contact-form-submit").on('click',function(e){
		e.preventDefault();
		var formdata=$(".contact-form").serialize();
		$.ajax({
			type: 'post',
			url: ajax_data.ajaxurl,
			data: formdata,
			success: function(data, textStatus, jqXHR){
				var statusCode = jqXHR.status;
				if(statusCode==200){
						$(".statusdiv").html('<p class="ajax-success">پیام شما با موفقیت ارسال شد. بزودی با شما تماس خواهیم گرفت</p>');
				}
			}
		});
	});
    $("#header").sticky({topSpacing:0});
	$("#lightgallery").lightGallery(); 
    $('.slider_containers').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1500,
        fade: true,
        cssEase: 'linear',
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    $('.carousel').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $("#backToTop").on('click', function(e){
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });
    $("#hamburger-menu").click(function(e) {
        e.preventDefault();
        if($(".navItems").hasClass("open")) {
            $(".navItems").removeClass("open");
            $(".mainHeaderMobile .overlay").removeClass('active');
        }else {
            $(".navItems").addClass("open");
            $(".mainHeaderMobile .overlay").addClass('active');
        }
    });
    $(".mainHeaderMobile .overlay").click(function(e) {
        e.preventDefault();
        if($(".navItems").hasClass("open")) {
            $(".navItems").removeClass("open");
        }
        $(this).removeClass('active');
    });
    $("#search").click(function(e) {
        e.preventDefault();
        if($("#searchForm").hasClass("open")) {
            $("#searchTerm").blur();
            $("#searchForm").removeClass("open");
            $("#searchTerm").removeClass("open");
        }else {
            $("#searchTerm").focus();
            $("#searchForm").addClass("open");
            $("#searchTerm").addClass("open");
        }
    });
});

















