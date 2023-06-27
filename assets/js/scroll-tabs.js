var scrollPos = 0;

$('.nav-pills').on('scroll', function() {
    scrollPos = $(this).scrollLeft();
});

$(window).on('resize', function() {
    scrollPos = $('.nav-pills').scrollLeft();
});

$('.nav-pills .nav-link').on('shown.bs.tab', function (event) {
    var nav = $(this).closest('.nav-pills');
    var item = $(this).closest('.nav-item');
    var left = item.position().left + scrollPos;
    var itemWidth = item.outerWidth(true);
    var containerWidth = nav.innerWidth();

    var newScrollPos = left - (containerWidth / 2) + (itemWidth / 2);
    var maxScrollPos = nav[0].scrollWidth - containerWidth;

    if (newScrollPos < 0) {
        newScrollPos = 0;
    } else if (newScrollPos > maxScrollPos) {
        newScrollPos = maxScrollPos;
    }

    nav.animate({scrollLeft: newScrollPos}, 'slow');
});
