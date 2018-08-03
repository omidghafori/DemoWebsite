$(document).scroll(function() {
  var scrollTop = $(document).scrollTop();
  var offsetTop = $("#filler-top").offset().top;
  var height = $("#filler-top").height();

  if( (offsetTop + height) <= scrollTop){
    $("#header").addClass('sticky');
    $(".header-item").addClass('header-sticky');
  }
  else{
    $("#header").removeClass('sticky');
    $(".header-item").removeClass('header-sticky');
  }
})
