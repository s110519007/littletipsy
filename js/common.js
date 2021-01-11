$(document).ready(function () {
    // var h =$(window).height();
    // $(".container").css('height',h);

    $('.nav-link').addClass('nav-light');
    var light=true;
    $('.mode').click(function () { 
        if (light==true) {
            $('.mode').html('淺色模式');
            $('body').addClass('text-dark bg-dark');
            $('a').addClass('text-dark');
            $('.container').addClass('text-dark bg-dark');
            $('.logo').addClass('text-dark bg-dark');
            $('.ham').addClass('ham-dark');
            $('.cover').addClass('text-dark bg-dark');
            $('.button').addClass('text-dark');
            $('.btn').addClass('text-dark');
            $('.head').addClass('bg-dark');;
            $('.nav-link').addClass('nav-dark');
            $('.nav-link').removeClass('nav-light');
            $('.focus').addClass('bg-dark');
            $('.test').addClass('test-dark')
            $('.btn-page').addClass('text-dark');
            light=false;
        } else {
            $('.mode').html('深色模式');
            $('body').removeClass('text-dark bg-dark');
            $('a').removeClass('text-dark');
            $('.container').removeClass('text-dark bg-dark');
            $('.logo').removeClass('text-dark bg-dark');
            $('.ham').removeClass('ham-dark');
            $('.cover').removeClass('text-dark bg-dark');
            $('.button').removeClass('text-dark');
            $('.btn').removeClass('text-dark');
            $('.head').removeClass('bg-dark');
            $('.nav-link').removeClass('nav-dark');
            $('.nav-link').addClass('nav-light');
            $('.focus').removeClass('bg-dark');
            $('.test').removeClass('test-dark');
            $('.btn-page').removeClass('text-dark');
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
        // var h =$(window).height();
        // console.log(h);
        // $(".container").css('height',h);
        if (light==true) {
            $('.focus').removeClass('bg-dark');
        } else {
            $('.focus').addClass('bg-dark');
        }
        $('#index').show();
        $('#test').hide();
        $('#about').hide();
    });

    $('.nav-link:nth-child(1)').focus(function () { 
        $('#index').show();
        $('#test').hide();
        $('#about').hide();
        document.title="微暈勒戒所";
    });
    $('.nav-link:nth-child(2)').focus(function () { 
        $('#index').hide();
        $('#test').show();
        $('#about').hide();
        document.title="微暈測驗";
    });
    $('.nav-link:nth-child(3)').focus(function () { 
        $('#index').hide();
        $('#test').hide();
        $('#about').show();
        document.title="微暈團隊";
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
    // var h =$(window).height();
    // $(".container").css('height',h);
    if (w>1024) {
        //common
        $('.circle').addClass('pc');
        $('.circle').removeClass('pad phone');
        $('.nav-link_wrap').css('display','flex');
        //index
        $('.cover_wrap').addClass('pc-cover');
        $('.cover_wrap').removeClass('pad-cover phone-cover widephone-cover');
        $('.button').addClass('pc-btn');
        $('.button').removeClass('pad-btn phone-btn widephone-btn');
        //about
        $('.profile').addClass('pc-profile');
        $('.profile').removeClass('pad-profile phone-profile');
    }
    else if((w<=1024)&&(w>=768)) {
        //common
        $('.circle').addClass('pad');
        $('.circle').removeClass('pc phone');
        $('.nav-link_wrap').css('display','none');
        //index
        $('.cover_wrap').addClass('pad-cover');
        $('.cover_wrap').removeClass('pc-cover phone-cover widephone-cover');
        $('.button').addClass('pad-btn');
        $('.button').removeClass('pc-btn phone-btn widephone-btn');
        //about
        $('.profile').addClass('pad-profile');
        $('.profile').removeClass('pc-profile phone-profile');
    }
    else if((w<768)&&(w>=500)) {
        //common
        $('.circle').addClass('phone');
        $('.circle').removeClass('pc pad');
        $('.nav-link_wrap').css('display','none');
        //index
        $('.cover_wrap').addClass('widephone-cover');
        $('.cover_wrap').removeClass('pc-cover pad-cover phone-cover');
        $('.button').addClass('widephone-btn');
        $('.button').removeClass('pc-btn pad-btn phone-btn');
        //about
        $('.profile').addClass('phone-profile');
        $('.profile').removeClass('pc-profile pad-profile');
    }
    else{
        //common
        $('.circle').addClass('phone');
        $('.circle').removeClass('pc pad');
        $('.nav-link_wrap').css('display','none');
        //index
        $('.cover_wrap').addClass('phone-cover');
        $('.cover_wrap').removeClass('pc-cover pad-cover widephone-cover');
        $('.button').addClass('phone-btn');
        $('.button').removeClass('pc-btn pad-btn widephone-btn');
        //about
        $('.profile').addClass('phone-profile');
        $('.profile').removeClass('pc-profile pad-profile');
    }
}