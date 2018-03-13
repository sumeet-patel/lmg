$(function() {
    adjustContainerSize();
});

$( window ).resize(function() {
    adjustContainerSize();
});

function adjustContainerSize() {
    var $window = $(window);
    var width = $window.outerWidth();
    var height = $window.outerHeight();

    var $container = $('.container');

    var scaleX = width / 1920;
    var scaleY = height / 1920;

    var scale = scaleX > scaleY ? scaleX : scaleY;

    console.log("$('.container').css({'transform', 'scale('" + scale + "'), translate-origin: 'top left'})");

    $('.container').css({'transform': 'scale(' + scale + ')', 'transform-origin': 'top left'});
}