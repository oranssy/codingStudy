// header menu
$(function(){
    $('.menu_main').mouseenter(function(){
        $('.menu_sub').slideDown(900);
    });

    $('.menu_main').mouseleave(function(){
        $('.menu_sub').stop().slideUp(600);
    });
});

// main slide
setInterval(function(){
    $('.slide_wrap').animate({'margin-top':'-300'}, function(){
        $('.slide_piece:first').appendTo('.slide_wrap');
        $('.slide_wrap').css({'margin-top':'0'});
    });
}, 3000);