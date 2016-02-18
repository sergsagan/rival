$(document).ready(function(){
    "use strict";
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:true
    });
    $('.btn-next').on('click',function(){ $('#slick').slick('slickNext'); });
    $('.btn-prev').on('click',function(){ $('#slick').slick('slickPrev'); });


    $('.portfolio-item-slider').on('init', function(event, slick, currentSlide){
        var nrCurrentSlide = slick.currentSlide + 1,
            totalSlidesPerPage = nrCurrentSlide + 3;
        $('.controls').html(nrCurrentSlide + " - " + totalSlidesPerPage + " of " + slick.slideCount);
    });

    $('.portfolio-thumb-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.portfolio-item-slider',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        infinite: false
    });

    $('.portfolio-item-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.portfolio-thumb-slider',
        infinite: false
    });

    $('#myCarousel').carousel({
        arrows: true
    })
});





