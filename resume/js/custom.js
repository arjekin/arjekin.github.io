$(document).ready(function(){
    
    $('.main').onepage_scroll({
        sectionContainer: '.page',
        responsiveFallback: 600,
        loop: true
    });
    
    $('.custom-portfolio-carousel').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    
});

$(window).on('load', function(){});