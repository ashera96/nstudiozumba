(function ($) {
    "use strict";

    //when dom is ready
    $(document).ready(function () {

        $(".dropdown").hover(function () {

            $(".dropdown-menu", this).fadeIn();
        }, function () {

            $(".dropdown-menu", this).fadeOut('fast');

        });

        /*--------------------------
        scrollUp
        ---------------------------- */
        $.scrollUp({
            scrollText: false,
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });



        /*----------------------------
         owl active
        ------------------------------ */
        $(".footer-gallery").owlCarousel({
            autoPlay: true,
            slideSpeed: 2000,
            pagination: false,
            center: true,
            navigation: false,
            items: 6,
            loop: true,
            transitionStyle: "fade",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3
                    }
			},
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
			},
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
			}
        ]
        });

        /*---------------------------
        client_carousel
        -----------------------------*/
        $('.client_carousel').owlCarousel({
            loop: true,
            autoPlay: true,
            slideSpeed: 2000,
            nav: false,
            items: 5,
            pagination: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3
                    }
			},
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
			},
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
			}
        ]
        })

        /*------------------------------------
        counterUp
         ------------------------------------- */
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });


        $(".product-carousel").owlCarousel({
            autoPlay: true,
            slideSpeed: 2000,
            pagination: false,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            navigation: true,
            items: 4,
            loop: true,
            transitionStyle: "fade",
            responsiveClass: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 2,
                        items: 2
                    }
			},
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '-40px',
                        slidesToShow: 2,
                        items: 2
                    }
			},
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 1,
                        items: 1
                    }
			}
        ]
        });

        /*-------------------
        product carousel
        ---------------------*/
        $(".port-carousel").owlCarousel({
            autoPlay: true,
            slideSpeed: 2000,
            pagination: false,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            navigation: true,
            items: 4,
            loop: true,
            transitionStyle: "fade",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3
                    }
			},
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
			},
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
			}
        ]
        });

        $(".testimonial-carousel").owlCarousel({
            autoPlay: true,
            loop: true,
            slideSpeed: 2000,
            pagination: true,
            navigation: false,
            items: 1,
            transitionStyle: "fadeUp",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        items: 1,
                    }
			},
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        items: 1,
                    }
			},
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        items: 1,
                    }
			}
        ]
        });


        /*---------------------
        portfolio start
        -----------------------*/
        $(window).on("load", function () {
            var $container = $('.portfolio');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.portfolio-nav li').on("click", function () {
                $('.portfolio-nav li.active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        });

        /* magnificPopup*/
        $(document).ready(function () {
            $('.footer-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                image: {
                    verticalFit: true,
                    titleSrc: function (item) {
                        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
                    }
                },
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300, // don't foget to change the duration also in CSS
                    opener: function (element) {
                        return element.find('img');
                    }
                }

            });
        });


        /* magnificPopup*/
        $(document).ready(function () {
            $('.cart-img').magnificPopup({
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                image: {
                    verticalFit: true,
                    titleSrc: function (item) {
                        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
                    }
                },
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300, // don't foget to change the duration also in CSS
                    opener: function (element) {
                        return element.find('img');
                    }
                }

            });
        });

        /* magnificPopup*/
        $(document).ready(function () {
            $('.port-zoom').magnificPopup({
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                image: {
                    verticalFit: true,
                    titleSrc: function (item) {
                        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
                    }
                },
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300, // don't foget to change the duration also in CSS
                    opener: function (element) {
                        return element.find('img');
                    }
                }

            });
        });

        // revolution slider start
        $("#rev_slider_1").show().revolution({
            sliderType: "standard",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000000,
            autoPlay: true,
            spinner: "spinner4",
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "on",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    enable: true,
                    style: 'metis',
                    tmp: '',
                    rtl: false,
                    hide_onleave: true,
                    hide_onmobile: true,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    left: {
                        container: 'slider',
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    },
                    right: {
                        container: 'slider',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    }
                },
            },
            responsiveLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [868, 768, 960, 720],
            lazyType: "none",
            shadow: 0,
            shuffle: "off",
            autoHeight: "off",
        });
        // revolution slider end


        /*----------------------------
        Search Popup / Hide Show Activation
        ------------------------------ */
        if ($('#search-popup').length) {

            //Show Popup
            $('.search-box-btn').on('click', function (e) {
                e.preventDefault();
                $('#search-popup').addClass('popup-visible');
            });

            //Hide Popup
            $('.close-search').on('click', function () {
                $('#search-popup').removeClass('popup-visible');
            });
        }

        /*------------------------------------
        cart-plus-minus-button active
        ------------------------------------- */
        $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
        $(".qtybutton").on("click", function () {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() == "+") {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 0;
                }
            }
            $button.parent().find("input").val(newVal);
        });

        /*----------------------------
         wow js active
        ------------------------------ */
        new WOW().init();


    });
    //dom ready end



})(jQuery);
