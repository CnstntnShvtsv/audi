$(document).ready(function () {
    $('.slider-01').slick({
        lazyLoad: 'progressive',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        fade: true
    });

    $('.slider-02').slick({
        lazyLoad: 'progressive',
        autoplay: true,
        autoplaySpeed: 10000,
    });

    $('.slider-03').slick({
        lazyLoad: 'progressive',
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});