$(document).ready(function() {
    "use strict";

    //slider

    $('.portfolio-item-slider').on('init', function (event, slick, currentSlide) {
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

//mini-slider

    $('.mini-portfolio-item-slider').on('init', function (event, slick, currentSlide) {
        var nrCurrentSlide = slick.currentSlide + 1,
            totalSlidesPerPage = nrCurrentSlide + 3;
        $('.controls').html(nrCurrentSlide + " - " + totalSlidesPerPage + " of " + slick.slideCount);
    });

    $('.mini-portfolio-thumb-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.mini-portfolio-item-slider',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        infinite: false
    });

    $('.mini-portfolio-item-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.mini-portfolio-thumb-slider',
        infinite: false
    });

//end mini-slider

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });

    $('.single-item').slick({});

    $('#myCarousel').carousel({
        arrows: true,
        interval: false
    });


    $('#block2Carousel').carousel({
        arrows: true,
        interval: false
    });

    $('#block3Carousel').carousel({
        arrows: true,
        interval: 4000
    });

    $('#homeCarousel').carousel({
        arrows: true,
        interval: false
    });

    $('.image-link').magnificPopup({type: 'image'});

    $(".popup").magnificPopup();


    /*$('.nav-tabs > li > a').hover(function(){
            $('#product-all').show();
        },
        function(){
            $('#product-all').hide();
        });*/



    //hover tab!!!

   /* $('.nav-tabs > li').removeClass('active');
     $(".tab-content > .tab-pane").removeClass('active');

     $('.nav-tabs > li').hover(
        function(){
            $(this).find("a").tab('show');
        },
        function(){
     if(!$($(this).find("a").attr("href")).is(":hover")){
        $(this).removeClass('active');
        $(".tab-content").find($(this).find("a").attr("href")).removeClass('active');}

     });

     $('.tab-content').mouseout( function(){
     $('.tab-content > .tab-pane > div').removeClass("active");
     $('.nav-tabs > li').removeClass("active");
     });*/


    /*$(document).on('click', '#myBtn', function(e){
     e.preventDefault();
     $('div.hide-info1').toggle('normal', function(){

     // код слайдера

     });
     this.text = this.text == 'Свернуть' ? 'Подробнее' : 'Свернуть';
     return false
     });*/

    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find('i.indicator')
            .toggleClass('glyphicon-minus glyphicon-plus');
        $('#accordion', '.panel-heading').css('background-color', 'green');
    }

    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);
});

$(function () {
    $('.menu li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $('.menu li a').removeClass("active");
            $(this).addClass('active');
        }
    });
});



