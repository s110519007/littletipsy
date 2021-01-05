$(document).ready(function () {
    w3.includeHTML();
    var CD_click=true;
    $('.CD').click(function () { 
        if (CD_click==true) {
            CD_click=false;
            $('.CD').toggleClass('CD_show');
            $('.cover').css('transform','skewY(-10deg) scaleX(0)');
        } else {
            CD_click=true;
            $('.CD').toggleClass('CD_show');
            $('.cover').css('transform','skewY(0deg) scaleX(1)');
        }
    }); 
    $('.nav-link').addClass('nav-light');
    var light=true;
    $('.mode').click(function () { 
        $('body').toggleClass('text-dark bg-dark');
        $('a').toggleClass('text-dark');
        $('.container').toggleClass('text-dark bg-dark');
        $('.logo').toggleClass('text-dark bg-dark');
        $('.ham').toggleClass('ham-dark');
        $('.cover').toggleClass('text-dark bg-dark');
        $('.button').toggleClass('text-dark');
        if (light==true) {
            $('.mode').html('淺色模式');
            $('.nav-link').addClass('nav-dark');
            $('.nav-link').removeClass('nav-light');
            $('.focus').addClass('bg-dark');
            light=false;
        } else {
            $('.mode').html('深色模式');
            $('.nav-link').removeClass('nav-dark');
            $('.nav-link').addClass('nav-light');
            $('.focus').removeClass('bg-dark');
            light=true;
        }
    });
    $('.nav-link:nth-child(1)').addClass('focus');
    $('.nav-link').focus(function () { 
        clearFocus();
        $(this).addClass('focus');
        if (light==true) {
            $('.focus').removeClass('bg-dark');
        } else {
            $('.focus').addClass('bg-dark');
        }
    });
    $('.logo').click(function () { 
        clearFocus();
        $('.nav-link:nth-child(1)').addClass('focus');
        if (light==true) {
            $('.focus').removeClass('bg-dark');
        } else {
            $('.focus').addClass('bg-dark');
        }
        $('#index').fadeIn();
        $('#test').fadeOut();
        $('#about').fadeOut();
    });

    $('.nav-link:nth-child(1)').focus(function () { 
        $('#index').fadeIn();
        $('#test').fadeOut();
        $('#about').fadeOut();
    });
    $('.nav-link:nth-child(2)').focus(function () { 
        $('#index').fadeOut();
        $('#test').fadeIn();
        $('#about').fadeOut();
    });
    $('.nav-link:nth-child(3)').focus(function () { 
        $('#index').fadeOut();
        $('#test').fadeOut();
        $('#about').fadeIn();
    });
    //選單開合
    var ham=false;
    $('.ham').click(function () { 
        if (ham==false) {
            $('.ham').removeClass('ham_close');
            $('.ham').addClass('ham_open');
            $('.nav-link_wrap').fadeIn();
            $('.nav-cover').fadeIn();
            ham=true;
        } else {
            $('.ham').removeClass('ham_open');
            $('.ham').addClass('ham_close');
            $('.nav-link_wrap').fadeOut();
            $('.nav-cover').fadeOut();
            ham=false;
        }
    });
    $(window).resize(function () { 
        contentResize();
    });
    contentResize();
});
function clearFocus() {
    $('.nav-link').removeClass('bg-dark');
    $('.nav-link').removeClass('focus');
}
//內容rwd
function contentResize() {
    var w =$(window).width();
    var h =$(window).height();
    $(".container").css('height',h);
    if (w>1024) {
        $('.circle').addClass('pc');
        $('.circle').removeClass('pad phone');
        $('.cover_wrap').addClass('pc-cover');
        $('.cover_wrap').removeClass('pad-cover phone-cover widephone-cover');
        $('.button').addClass('pc-btn');
        $('.button').removeClass('pad-btn phone-btn widephone-btn');
        $('.nav-link_wrap').css('display','flex');
    }
    else if((w<=1027)&&(w>=768)) {
        $('.circle').addClass('pad');
        $('.circle').removeClass('pc phone');
        $('.cover_wrap').addClass('pad-cover');
        $('.cover_wrap').removeClass('pc-cover phone-cover widephone-cover');
        $('.button').addClass('pad-btn');
        $('.button').removeClass('pc-btn phone-btn widephone-btn');
        $('.nav-link_wrap').css('display','none');
    }
    else if((w<768)&&(w>=500)) {
        $('.circle').addClass('phone');
        $('.circle').removeClass('pc pad');
        $('.cover_wrap').addClass('widephone-cover');
        $('.cover_wrap').removeClass('pc-cover pad-cover phone-cover');
        $('.button').addClass('widephone-btn');
        $('.button').removeClass('pc-btn pad-btn phone-btn');
        $('.nav-link_wrap').css('display','none');
    }
    else{
        $('.circle').addClass('phone');
        $('.circle').removeClass('pc pad');
        $('.cover_wrap').addClass('phone-cover');
        $('.cover_wrap').removeClass('pc-cover pad-cover widephone-cover');
        $('.button').addClass('phone-btn');
        $('.button').removeClass('pc-btn pad-btn widephone-btn');
        $('.nav-link_wrap').css('display','none');
    }
}