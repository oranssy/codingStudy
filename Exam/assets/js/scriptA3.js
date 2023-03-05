// header menu
$(function(){
    $('.menu_mainList').mouseenter(function(){
        $(this).find('.menu_sub').stop().slideDown();
    });

    $('.menu_mainList').mouseleave(function(){
        $('.menu_sub').stop().slideUp();
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

// tab_menu
$(function(){
    $('.tab_menuTit li').click(function(){

        var idx = $(this).index();

        $('.tab_menuDesc ul').hide().removeClass('on');
        $('.tab_menuDesc ul').eq(idx).show().addClass('on');

        $('.tab_menuTit li').removeClass('on');
        $(this).addClass('on');
    });
});

// popUp
$(function(){
    $('.notice li:nth-child(1)').click(function(){
        $('.popUp').show();
    });

    $('.popUp_cont button').click(function(){
        $('.popUp').hide();
    });
});