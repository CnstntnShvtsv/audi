// Ленивая загрузка изображений
$(function() {
    $('.lazy').lazy();
});

// Плавная прокрутка экрана:
var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500); // длительность прокрутки 0.5s
    return false;
});

// Развернуть информацию
$('.expand-btn').click(function () {
    $('.limiter').toggleClass('show');
    $(this).toggleClass('active');

    if (!$(this).data('status')) {
        $(this).html('Свернуть');
        $(this).data('status', true);
    } else {
        $(this).html('Развернуть');
        $(this).data('status', false);
    }
});

// Сделать предзаказ
$('.order-btn').click(function () {
    $('.form-wrapper').fadeIn();
    $('body').css('overflow', 'hidden');
});

// закрыть на крестик
$('.pre-order-form .close-btn').click(function () {
    $('.form-wrapper').fadeOut();
    $('body').css('overflow', 'auto');
});

// Navbar
$('.nav-link').click(function () {
    $('.nav-link').removeClass('active');
    $(this).toggleClass('active');
});

// Для прокрутки navbar'а
var x, y, top, left, down;

$('.navbar-nav').mousedown(function (e) {
    e.preventDefault();
    down = true;
    x = e.pageX;
    y = e.pageY;
    top = $(this).scrollTop();
    left = $(this).scrollLeft();
});

$('body').mousemove(function (e) {
    if (down) {
        var newX = e.pageX;
        var newY = e.pageY;

        $('.navbar-nav').scrollTop(top - newY + y);
        $('.navbar-nav').scrollLeft(left - newX + x);
    }
});

$('body').mouseup(function (e) {
    down = false;
});

// Pop-up common features 
$('#cf-item-01_btn').click(function () {
    $('.wrapper').fadeIn();
    $('.cf-item-info').removeClass('show');
    $('#cf-item-01').toggleClass('show');

    $('.item').removeClass('active');
    $(this).toggleClass('active');
    $('body').css('overflow', 'hidden');
});

$('#cf-item-02_btn').click(function () {
    $('.wrapper').fadeIn();
    $('.cf-item-info').removeClass('show');
    $('#cf-item-02').toggleClass('show');

    $('.item').removeClass('active');
    $(this).toggleClass('active');
    $('body').css('overflow', 'hidden');
});

$('#cf-item-03_btn').click(function () {
    $('.wrapper').fadeIn();
    $('.cf-item-info').removeClass('show');
    $('#cf-item-03').toggleClass('show');

    $('.item').removeClass('active');
    $(this).toggleClass('active');
    $('body').css('overflow', 'hidden');
});

$('#cf-item-04_btn').click(function () {
    $('.wrapper').fadeIn();
    $('.cf-item-info').removeClass('show');
    $('#cf-item-04').toggleClass('show');

    $('.item').removeClass('active');
    $(this).toggleClass('active');
    $('body').css('overflow', 'hidden');
});

// закрыть на крестик
$('.cf-item-info .close-btn').click(function () {
    $('.wrapper').fadeOut();
    $('.cf-item-info').removeClass('show');
    $('.item').removeClass('active');
    $('body').css('overflow', 'auto');
});

// Show more info
$('.digital-panel .btn-info').click(function () {
    $('.digital-panel .hidden-info').toggleClass('show');
    $(this).toggleClass('active');
});

$('.driving-pleasure .btn-info').click(function () {
    $('.driving-pleasure .hidden-info').toggleClass('show');
    $(this).toggleClass('active');
});

$('.functionality .btn-info').click(function () {
    $('.functionality .hidden-info').toggleClass('show');
    $(this).toggleClass('active');
});