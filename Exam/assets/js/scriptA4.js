// header menu
$(function(){
    $('.menu_main').mouseenter(function(){
        $('.menu_sub, .menu_bg').stop().slideDown();
    });

    $('.menu_main').mouseleave(function(){
        $('.menu_sub, .menu_bg').stop().slideUp();
    });
});

// main slide
$(function(){
    $('.slide_piece:gt(0)').hide();
});

setInterval(function(){
    $('.slide_piece:first').fadeOut(1500).next().fadeIn(1500);
    $('.slide_piece:first').appendTo('.slide_wrap');
}, 3000);

// popUp
$(function(){
    $('#notice li:nth-child(1)').click(function(){
        $('.popUp').show();
    });

    $('.popUp_cont button').click(function(){
        $('.popUp').hide();
    });
});