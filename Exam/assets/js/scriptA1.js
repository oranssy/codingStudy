// header menu
$(function(){
    $('.menu_main').mouseenter(function(){
        $('.menu_sub').slideDown(800);
    });

    $('.menu_main').mouseleave(function(){
        $('.menu_sub').stop().slideUp(500);
    });
});

// main slide
setInterval(function(){
    $('.slide_wrap').animate({'margin-top':'-300'}, function(){
        $('.slide_piece:first').appendTo('.slide_wrap');
        $('.slide_wrap').css({'margin-top':'0'});
    });
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
