$(document).ready(function () {
    $('#index').show();
    $('#test').hide();
    $('#about').hide();
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
    $(window).resize(function () { 
        contentResize();
    });
    contentResize();
});
//內容rwd
function contentResize() {
    var w =$(window).width();
    var h =$(window).height();
    console.log(h);
    $(".container").css('height',h);
    if (w>1024) {
        $('.cover_wrap').addClass('pc-cover');
        $('.cover_wrap').removeClass('pad-cover phone-cover widephone-cover');
        $('.button').addClass('pc-btn');
        $('.button').removeClass('pad-btn phone-btn widephone-btn');
    }
    else if((w<=1027)&&(w>=768)) {
        $('.cover_wrap').addClass('pad-cover');
        $('.cover_wrap').removeClass('pc-cover phone-cover widephone-cover');
        $('.button').addClass('pad-btn');
        $('.button').removeClass('pc-btn phone-btn widephone-btn');
    }
    else if((w<768)&&(w>=500)) {
        $('.cover_wrap').addClass('widephone-cover');
        $('.cover_wrap').removeClass('pc-cover pad-cover phone-cover');
        $('.button').addClass('widephone-btn');
        $('.button').removeClass('pc-btn pad-btn phone-btn');
    }
    else{
        $('.cover_wrap').addClass('phone-cover');
        $('.cover_wrap').removeClass('pc-cover pad-cover widephone-cover');
        $('.button').addClass('phone-btn');
        $('.button').removeClass('pc-btn pad-btn widephone-btn');
    }
}
