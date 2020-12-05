$(function(){

  $('.detalis-slide__thumb').slick({
    asNavFor: '.detalis-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false
  });

  $('.detalis-slide__big').slick({
    asNavFor: '.detalis-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.related__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slider-btn slider-btn__left"><img src="images/icons/related-arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slider-btn slider-btn__right"><img src="images/icons/related-arrow-right.svg" alt=""></button>'
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function(data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.slider-top__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    rateFill: "ffcc00",
    readOnly: true
  });

  $(".star-page").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    rateFill: "ffcc00",
    readOnly: true
  });

  $(".detalis__star").rateYo({
    starWidth: "11px",
    spacing: "10px",
    normalFill: "#d6d6d6",
    rateFill: "ffcc00",
    readOnly: true
  });

  $('.detalis__num').styler();

});