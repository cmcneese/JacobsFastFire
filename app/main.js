$("#about").click(function () {
//   e.preventDefault();

//   let position = $($(this).attr('href')).offset().top;

  $('html, body').animate({
    scrollTop: $(".main-content").offset().top
  }, 1000);
});
