$(function() {
    adjustContainerSize();

    $('.hyperlink.to-mainMenuItem').on('mouseenter', function() {
        $(this).addClass('hyperlink-to-mainMenuItem-showonhover');
        updateHover();
    });

    $('.hyperlink.to-mainMenuItem').on('mouseleave', function(){
        $('.hyperlink-to-mainMenuItem-showonhover').removeClass('hyperlink-to-mainMenuItem-showonhover');
        updateHover();
    });

    $('.mainMenuHoveredItemContent').on('mouseenter', function(){
        $(this).addClass('mainMenuHoveredItemContent-showonhover');
        updateHover();
    });

    $('.mainMenuHoveredItemContent').on('mouseleave', function(){
        $(this).removeClass('mainMenuHoveredItemContent-showonhover');
        updateHover();
    });
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

function updateHover() {
    if ($('.hyperlink.to-mainMenuItem').hasClass('hyperlink-to-mainMenuItem-showonhover') || $('.mainMenuHoveredItemContent').hasClass('mainMenuHoveredItemContent-showonhover')) {
        $('.mainMenuHoveredItemContent').show();
    }
    else {
        $('.mainMenuHoveredItemContent').hide();
    }
};
