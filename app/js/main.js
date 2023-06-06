$(function () {
    var count = 0;
    $('.request-popup__button').on('click',function() {
        count++,
        $('.request-popup__button').toggleClass('request-popup__button--active', count % 2 ==0); 
    });
    $('.popup__link').magnificPopup({
        type:'inline',
        closeBtnInside: false,
    });
    $('.main-top__btn-link').magnificPopup({
        type:'inline',
    });
    $('.header__link').magnificPopup({
        type:'inline',
    });
    $('.services__slider-link').magnificPopup({
        type:'inline',
    });
    $('.services__slider-inner').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>'
      });
})

