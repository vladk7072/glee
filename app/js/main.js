$(function(){

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

});