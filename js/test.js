var dx;
$(document).ready(function() {
	var cardnum=document.getElementsByClassName('card').length;
	for (let card = 1; card <= cardnum; card++) {
		$('.card:nth-child('+card+')').addClass('card'+card);
		var page = document.createElement('div');
		page.className = "page";
		$('.progress').append(page);
		$('.page:nth-child('+card+')').click(function () { 
			if (card>=2) {
				for (let num = 2; num <= card; num++) {
					turnNext(num-1);
				}
			}
			for (let num = cardnum; num > card; num--) {
				turnPrev(num);
			}
		});
	}
	$(window).resize(function () { 
		contentResize();
		testContent();
	});
	contentResize();
	testContent();
});
function testContent() {
	var cardnum=document.getElementsByClassName('card').length;
	for (let num = 2; num <= cardnum; num++) {
		TweenMax.to(".card"+num, 0, {
			x: dx,
			ease: Linear.easeNone
		});
	}
	for (let next = 1; next < cardnum; next++) {
		$('.card'+next+' .btn-next').click(function(event) {
			turnNext(next);
		});
	}
	for (let prev = 2; prev <= cardnum; prev++) {
		$('.card'+prev+' .btn-prev').click(function(event) {
			turnPrev(prev);
		});
	}
	$(".btn-done").click(function(event) {
		$(".btn-done").addClass('btn-done_click');
		save();
	});
	$(".btn-redo").click(function(event) {
		$(".btn-done").removeClass('btn-done_click');
		for (let num = cardnum; num > 1; num--) {
			turnPrev(num);
		}
		$(".test").fadeIn();
		$(".test-fin").fadeOut();
	});
	$(".btn-fin").click(function(event) {
		$(".thanks").fadeIn();
		$(".test-fin").fadeOut();
	});
}
function turnNext(n){
	TweenMax.to(".card"+n, 0.5, {
	    x: '-'+dx,
		ease: Linear.easeNone
	});
	TweenMax.to(".card"+(n+1), 0.5, {
	    x: 0,
	    ease: Linear.easeNone
	});
	$('.page:nth-child('+n+')').addClass('page-focus');
}

function turnPrev(n){
	TweenMax.to(".card"+n, 0.5, {
	    x: dx,
	    ease: Linear.easeNone
	});
	TweenMax.to(".card"+(n-1), 0.5, {
	    x: 0,
	    ease: Linear.easeNone
	});
	$('.page:nth-child('+(n-1)+')').removeClass('page-focus');
}

function save() {
	let postURL ="https://script.google.com/macros/s/AKfycbyv4oc1z8-XTXRDvtYR8QMhOHEqVzlCiptHrQGWof52zKFanS2zCpKQ/exec";
	let parameter = new Object();
	parameter.method ="write";
	var a1,a2,a3,a4,a5;
	a1 = $("input[name='Q1']:radio:checked").val();
	a2 = $("input[name='Q2']:radio:checked").val();
	a3 = $("input[name='Q3']:radio:checked").val();
	a4 = $("input[name='Q4']:radio:checked").val();
	a5 = $("input[name='Q5']:radio:checked").val();

	parameter.a1 = a1;
	parameter.a2 = a2;
	parameter.a3 = a3;
	parameter.a4 = a4;
	parameter.a5 = a5;
	parameter.msg = $("textarea[name='msg']").val();
	parameter.sheetUrl = "https://docs.google.com/spreadsheets/d/1kDR7z3OJN1AKVpcqhY8-x-_bJplmgM2EtQB0U1A13MA/edit#gid=0";
	parameter.sheetTag = "工作表1";
	$.post(postURL, parameter, function(data) {
		if (data.result == "success") {
			// alert("成功寫入");
			$(".test").fadeOut();
			$(".test-fin").fadeIn();
			// read();
		}else{
			alert("失敗");
		}
	});
}
//內容rwd
function contentResize() {
    var w =$(window).width();
    if (w>1024) {
		dx = 600;
        $('.test').addClass('pc-test');
		$('.test').removeClass('pad-test phone-test');
		$('.btn-page').addClass('pc-page');
		$('.btn-page').removeClass('pad-page phone-page');
		$('.page').addClass('page-hover');
    }
    else if((w<=1024)&&(w>=768)) {
		dx = '60vh';
        $('.test').addClass('pad-test');
		$('.test').removeClass('pc-test phone-test');
		$('.btn-page').addClass('pad-page');
        $('.btn-page').removeClass('pc-page phone-page');
		$('.page').removeClass('page-hover');
    }
    else{
		dx = '85vw';
        $('.test').addClass('phone-test');
		$('.test').removeClass('pc-test pad-test');
		$('.btn-page').addClass('phone-page');
        $('.btn-page').removeClass('pc-page pad-page');
		$('.page').removeClass('page-hover');
    }
}