// if ($('.slider-single').hasClass('slick-current')) {
//     $('.slider-single').removeClass('a');
//     $('.slick-current').removeClass('a');
// } else {
//     $('.slider-single').addClass('a');
//     $('.slick-current').removeClass('a');

// };




$(document).ready(function() {
$(window).load(function () {
        setTimeout(function(){
            $('#preloader').fadeOut('slow', function () {
            });
        },0);
        $('.slider-description-str2').hide();
$('.slider-description-str1').click(function() {
    $('.slider-description-str2').slideToggle({ top: 'toggle' });
});

    $('.slider-main').slick({
        infinite: false,
        slidesToShow: 3,
        centerMode: true,
        dots: false,
        slidesToScroll: 1,
        responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        centerMode: false
      }
    }
  ]
    });

    function scrollbarWidth() {
        var block = $('<div>').css({ 'height': '50px', 'width': '50px' }),
            indicator = $('<div>').css({ 'height': '200px' });

        $('body').append(block.append(indicator));
        var w1 = $('div', block).innerWidth();
        block.css('overflow-y', 'scroll');
        var w2 = $('div', block).innerWidth();
        $(block).remove();
        return (w1 - w2);
    }


    $(window).resize(function() {
        var winwidth = $(window).outerWidth();
        if (winwidth > 991 - scrollbarWidth()) {
            $('.header-menu').css("display", "flex");
            $('.header-menu').css("display", "-webkit-flex");
            $('.hamburger').removeClass('is-active');

        } else if (winwidth < 992 - scrollbarWidth()) {
            $('.header-menu').css("display", "none");
            $('.hamburger').removeClass('is-active');
        }
    });










    $(function() {
        var shrinkHeader = 1;
        $(window).scroll(function() {

            // 
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('header').addClass('shrink');
                $('li').addClass('white');
                $('.brand-text').addClass('brand-text-e');
                $('.hamburger .line').css("background-color", "black");
                $('.header-menu').css("top", "60px");

            } else {
                $('header').removeClass('shrink');
                $('li').removeClass('white');
                $('.brand-text').removeClass('brand-text-e');
                $('.hamburger .line').css("background-color", "#b42416");
                $('.header-menu').css("top", "75px");
            }




        });

        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });









    $(window).ready(function() {
        var winwidth = $(window).outerWidth();
        if (winwidth > 991) {
            $('.header-menu').css("display", "inherit");

        } else if (winwidth < 992) {
            $(".header-menu").hide();
        }
    });






    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
    });
    $('.hamburger').click(function() {
        $('.header-menu').slideToggle({ top: 'toggle' });

    });
  }); 
});

$('a[href^="#"]').click(function() {
    $('html,body').animate({ scrollTop: $(this.hash).offset().top - 60 });
    return false;
    e.preventDefault();
});