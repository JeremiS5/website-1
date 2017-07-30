
// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#parallax').offset().top + $('#parallax').height();

// on scroll, 
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('#parallax').addClass('past-main');
    } else {
        $('#parallax').removeClass('past-main');
   }

});


// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#parallax').offset().top + $('#parallax').height();

// on scroll, 
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('#footer').addClass('past-main');
    } else {
        $('#footer').removeClass('past-main');
   }

});