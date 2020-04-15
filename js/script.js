$(function () {

    // Banner Slider
    $('#banner_part').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    // Venobox
    $('.venobox').venobox();

    // Testmonial Slider
    $('.testmoninal_slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: 0,
                    slidesToShow: 1
                }
        },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: 0,
                    slidesToShow: 1
                }
        }
        ]

    });

    // Slide
    $('.team_slider').slick({
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: 0,
                    slidesToShow: 2
                }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: 0,
                    slidesToShow: 1
                }
        },

            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: 0,
                    slidesToShow: 1
                }
        }
        ]
    });


    // Menufix
    var navoff = $("header").offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $("header").addClass("menu_fix");
        } else {
            $("header").removeClass("menu_fix");
        }
    });

    // couter js
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // Slide
    $('.slide_main').slick({
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: 0,
                    slidesToShow: 3
                }
		},
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: 0,
                    slidesToShow: 2
                }
		}
		]
    });


    // Scroll To Top  
    $(".bto").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 2000);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 130) {
            $(".bto").fadeIn();
        } else {
            $(".bto").fadeOut();
        }
    });

    // Wow Js
    new WOW().init();




});