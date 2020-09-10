var galleryThumbs = new Swiper('.gallery-thumbs', {
    lazy: true,
    spaceBetween: 4,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 7, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        600: {
            slidesPerView: 4,
            spaceBetween: 4,
        },
        800: {
            slidesPerView: 5,
            spaceBetween: 6,
        },
        1000: {
            slidesPerView: 6,
            spaceBetween: 8,
        },
        1200: {
            slidesPerView: 7,
            spaceBetween: 10,
        },
    }
});
var galleryTop = new Swiper('.gallery-top', {
    lazy: true,
    spaceBetween: 10,
    loop: true,
    loopedSlides: 7, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    }
    // autoplay: {
    //     delay: 5000, // автоплей каждые 5с.
    //     disableOnInteraction: false,
    // },
});