(function($) {
    "use strict";
    $(document).ready(function() {
        /****************************************
              -------*** JS Table ***-------
                     ----------------

         01. PRELOADER JS
         02. COUNTER-UP JS
         03. AOS ANIMATION JS
         04. PARALLAX JS
         05. VANILLA TILT JS
         06. MOBILE MENU JS
         07. About SLIDER JS
         08. SERVICE CLICK AND ACTIVE JS
         09. BTM TO TOP PERCENTAGE JS
         10. SEARCH OPTION SHOW AND HIDE JS
         11. CASE STUDY ISOTOPE JS
         12. PHOTO GALLERY JS
         13. TESTIMONIAL JS

        *****************************************/


        /************************************************
             -------*** 01. PRELOADER JS ***-------
                        ----------------
        *************************************************/
        setTimeout(function() {
            $('.loader-bg').fadeOut();
        }, 30);



        /************************************************
             -------*** 02. COUNTER-UP JS ***-------
                         --------------
        *************************************************/
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });


        /************************************************
             -------*** 03. AOS ANIMATION JS ***-------
                         -----------------
        *************************************************/
        AOS.init();

        /************************************************
             -------*** 04. PARALLAX JS ***-------
                         -------------
        *************************************************/
        $('.ezze-cyber-parallax-area-start').parallax({
            imageSrc: 'assets/images/service/bg.jpg'
        });

        /************************************************
             -------*** 05. VANILLA TILT JS ***-------
                         ----------------
        *************************************************/
        VanillaTilt.init(document.querySelectorAll(".mouse-move"), {
            max: 25,
            speed: 400
        });

        /************************************************
             -------*** 06. MOBILE MENU JS ***-------
                         ----------------
        *************************************************/
        $('#menu').slicknav({
            prependTo: '.responsive-mobile-menu'
        });

        /************************************************
             -------*** 07. About SLIDER JS ***-------
                        -------------------
        *************************************************/
        $('.ezze-photo-gallery').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 4500,
            autoplayHoverPause: true,
            nav: false,
            dots: false,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 5
                },
                1200: {
                    items: 5
                },
                1900: {
                    items: 5
                }
            }
        });

        /************************************************
             -------*** 08. SERVICE CLICK AND ACTIVE JS ***-------
                        -------------------
        *************************************************/
        $('.single-grab-area i').click(function() {
            $('.single-grab-area i').removeClass('active');
            $(this).addClass('active');

            var title, content;
            title = $(this).data('title');
            content = $(this).data('cat');

            $('.ezze-service-output h1').html(title);
            $('.ezze-service-output span').html(content);
        });


        /************************************************
             -------*** 09. BTM TO TOP PERCENTAGE JS ***-------
                        -------------------
        *************************************************/
        $(() => {
            function percentageCount() {
                var height = $('body').innerHeight();
                var currentPosition = window.pageYOffset;

                var percent = (currentPosition * 100 / height) + 11;
                percent = percent;
                return Math.floor(percent);
            }

            $(window).scroll(() => {
                $('.progress').css('background', 'conic-gradient("#000"' + ' ' + percentageCount() + '"%", "red"' + ' ' + percentageCount() + '"%")');
                $('#output-value').html(percentageCount() + '%');
            });
        });

        $('.btm-to-top').click(function(){
            $('body,html').animate({
                scrollTop:0
            }, 1000)
        });


        /************************************************
         -------*** 10. SEARCH OPTION SHOW AND HIDE JS ***-------
         -------------------
         *************************************************/
        $('#search-btn').on('click', function(){
           $('.ezze-search-area-start').toggleClass('open-search');
        });
        $('.search-area-close').on('click', function(){
            $('.ezze-search-area-start').toggleClass('open-search');
        });


        /************************************************
         -------*** 11. CASE STUDY ISOTOPE JS ***-------
         -------------------
         *************************************************/
        var $grid = $('.ezze-case-study-projects').isotope({
            percentPosition: true,
            itemSelector: '.ezze-single-case-study-content',
        });
        // filter items on button click
        $('.filter-button-group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        /************************************************
         -------*** 12. PHOTO GALLERY JS ***-------
         -------------------
         *************************************************/
        $(".gallery").magnificPopup({
            delegate: "a",
            type: "image",
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: "mfp-with-zoom mfp-img-mobile",
            image: {
                verticalFit: true,
                titleSrc: function (item) {
                    return item.el.attr("title") ;
                },
            },
            gallery: { enabled: true },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function (element) {
                    return element.find("img");
                },
            },
        });


        /************************************************
         -------*** 13. TESTIMONIAL JS ***-------
         -------------------
         *************************************************/
        $('.ezze-testimonial-area-slider').owlCarousel({
            animateOut: 'fadeOutLeft',
            animateIn: 'fadeInRight',
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 4500,
            autoplayHoverPause: true,
            nav: false,
            dots: false,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1900: {
                    items: 3
                }
            }
        });




    });
}(jQuery));