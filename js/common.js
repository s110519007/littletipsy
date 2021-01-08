$(document).ready(function () {
    var h =$(window).height();
    console.log(h);
    $(".container").css('height',h);

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
        $('.btn').toggleClass('text-dark');
        if (light==true) {
            $('.mode').html('淺色模式');
            $('.nav-link').addClass('nav-dark');
            $('.nav-link').removeClass('nav-light');
            $('.focus').addClass('bg-dark');
            $('.test').addClass('test-dark');
            light=false;
        } else {
            $('.mode').html('深色模式');
            $('.nav-link').removeClass('nav-dark');
            $('.nav-link').addClass('nav-light');
            $('.focus').removeClass('bg-dark');
            $('.test').removeClass('test-dark');
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
        var h =$(window).height();
        console.log(h);
        $(".container").css('height',h);
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
        document.title="微暈勒戒所";
        var h =$(window).height();
        $(".container").css('height',h);
    });
    $('.nav-link:nth-child(2)').focus(function () { 
        $('#index').fadeOut();
        $('#test').fadeIn();
        $('#about').fadeOut();
        document.title="微暈測驗";
        var h = $('#test').height();
        var dh =155;
        h+=dh;
        $(".container").css('height',h);
        $(window).resize(function () { 
            var h = $('#test').height();
            var dh =155;
            h+=dh;
            $(".container").css('height',h);
        });
    });
    $('.nav-link:nth-child(3)').focus(function () { 
        $('#index').fadeOut();
        $('#test').fadeOut();
        $('#about').fadeIn();
        document.title="微暈團隊";
        var h =$(window).height();
        $(".container").css('height',h);
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
        commonResize();
    });
    commonResize();
});
function clearFocus() {
    $('.nav-link').removeClass('bg-dark');
    $('.nav-link').removeClass('focus');
}
//選單rwd
function commonResize() {
    var w =$(window).width();
    if (w>1024) {
        $('.circle').addClass('pc');
        $('.circle').removeClass('pad phone');
        $('.nav-link_wrap').css('display','flex');
    }
    else if((w<=1027)&&(w>=768)) {
        $('.circle').addClass('pad');
        $('.circle').removeClass('pc phone');
        $('.nav-link_wrap').css('display','none');
    }
    else if((w<768)&&(w>=500)) {
        $('.circle').addClass('phone');
        $('.circle').removeClass('pc pad');
        $('.nav-link_wrap').css('display','none');
    }
    else{
        $('.circle').addClass('phone');
        $('.circle').removeClass('pc pad');
        $('.nav-link_wrap').css('display','none');
    }
}