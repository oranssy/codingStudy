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
setInterval(function(){
    $('.slide_wrap').animate({'margin-left':'-100%'}, function(){
        $('.slide_piece:first').appendTo('.slide_wrap');
        $('.slide_wrap').css({'margin-left':'0'});
    });
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