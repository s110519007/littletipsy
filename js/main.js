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
});
