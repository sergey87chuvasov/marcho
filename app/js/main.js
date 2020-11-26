$(function () {


  $('.top-slider__inner').slick({
   dots: true,
   arrows: false,
   fade: true,
   autoplay: true,
   autoplaySpeed: 2000
  });


 $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    spacing: "1px",
    readOnly: "true"
  });


});