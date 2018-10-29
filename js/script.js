$(document).ready(function () {
    $('.block6-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true
    });

    $('.block9-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    });

    //scroll

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('.block4-item').click(function() {
        $('.block4-item').removeClass('selected');
       $('.transform-block img').removeClass('selected-img')

       if($(this).hasClass('item1')) {
           $(this).addClass('selected');
           $('.item1').addClass('selected-img');
       } else if($(this).hasClass('item2')) {
           $(this).addClass('selected');
           $('.item2').addClass('selected-img');
       } else {
           $(this).addClass('selected');
           $('.item3').addClass('selected-img');
       }
    });

    $(document).on('scroll', function() {
        if($('.header').offset().top > 200) {
            $('.header').addClass('header-down');
        } else {
            $('.header').removeClass('header-down')
        }

        if($('html').scrollTop() < $('#2').offset().top) {
            $('.progress-item').removeClass('nav');
            $('.p1').addClass('nav')
        }

        if($('html').scrollTop() >= $('#2').offset().top) {
            $('.progress-item').removeClass('nav');
            $('.p2').addClass('nav')
        }

        if($('html').scrollTop() >= $('#3').offset().top) {
            $('.progress-item').removeClass('nav');
            $('.p3').addClass('nav')
        }

        if($('html').scrollTop() >= $('#4').offset().top) {
            $('.progress-item').removeClass('nav');
            $('.p4').addClass('nav')
        }

        if($('html').scrollTop() >= $('#5').offset().top) {
            $('.progress-item').removeClass('nav');
            $('.p5').addClass('nav')
        }

        if($('html').scrollTop() >= $('#6').offset().top) {
            $('.progress-item').removeClass('nav');
            $('.p6').addClass('nav')
        }

        var window_height = $('body').height();
        var offset_from_top = $('html').scrollTop();

        var percent = offset_from_top/window_height*100;

        console.log(percent);
        if(percent <= 50) {
            $('.line1 .done').css('display', 'block');
            $('.line1 .done').height(percent*2 + '%');
            $('.line2 .done').css('display', 'none');
        }

        if(percent > 50) {
            $('.line1 .done').css('display', 'none');
            $('.line2 .done').css('display', 'block');
            $('.line2 .done').height((percent - 50 + 3) *2 + '%' );
        }
    })
});