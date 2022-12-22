$(function () {
  $(document).scroll(function () {
        var $nav = $(".black-gradient");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });

});
