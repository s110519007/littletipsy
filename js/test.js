// TweenMax.to("#icon1", 1, {
//     rotation: 360,
//     x: 250,
//	   y: 250,
//     opacity: 1,
//     ease: Linear.easeNone
// });

$(document).ready(function() {
	var cardnum=document.getElementsByClassName('card').length;
	console.log(cardnum);
	for (let num = 2; num <= cardnum; num++) {
		TweenMax.to(".card"+num, 0, {
			x: 600,
			ease: Linear.easeNone
		});
	}
	TweenMax.to(".progress-bar", 0, {
	    width: 100,
	    ease: Linear.easeNone
	});


	$('.card1 .btn-next').click(function(event) {
		turnNext(1);
		$('.progress-bar').css({
			background: 'linear-gradient(to right, #f9d4f4 60%,#dbffff)'
		});
	});
	$('.card2 .btn-next').click(function(event) {
		turnNext(2);
		$('.progress-bar').css({
			background: 'linear-gradient(to right, #f9d4f4 70%,#dbffff)'
		});
	});
	$('.card2 .btn-prev').click(function(event) {
		turnPrev(2);
		$('.progress-bar').css({
			background: 'linear-gradient(to right, #f9d4f4 50%,#dbffff)'
		});
	});
	$('.card3 .btn-prev').click(function(event) {
		turnPrev(3);
		$('.progress-bar').css({
			background: 'linear-gradient(to right, #f9d4f4 60%,#dbffff)'
		});
	});
	$(".btn-fin").click(function(event) {
		save();
	});
});

function turnNext(n){
	TweenMax.to(".progress-bar", 0, {
	    width: 100*(n+1),
	    ease: Linear.easeNone
	});
	TweenMax.to(".card"+n, 0.5, {
	    x: -600,
	    ease: Linear.easeNone
	});
	TweenMax.to(".card"+(n+1), 0.5, {
	    x: 0,
	    ease: Linear.easeNone
	});
}

function turnPrev(n){
	TweenMax.to(".progress-bar", 0, {
	    width: 100*(n-1),
	    ease: Linear.easeNone
	});
	TweenMax.to(".card"+n, 0.5, {
	    x: 600,
	    ease: Linear.easeNone
	});
	TweenMax.to(".card"+(n-1), 0.5, {
	    x: 0,
	    ease: Linear.easeNone
	});
}

function save() {
	let postURL ="https://script.google.com/macros/s/AKfycbzYOCiISQj6XIXCfGZq-FvXlrvnSXh1IwE8osbgmZ8LZy6d5Gw/exec";
	let parameter = new Object();
	parameter.method ="write";
	// var s1 = [];
	// var s2 = [];
	// var s3, s4;
	// var oc;
	// $("input[name ='type']:checkbox:checked").each(function() {
	// 	s1.push($(this).val());
	// });
	// s1 = s1.join();
	// $("input[name ='add']:checkbox:checked").each(function() {
	// 	s2.push($(this).val());
	// });
	// s2 = s2.join();

	// oc = $("input[name ='other']:checkbox:checked")
	// if (oc) {
	// 	s2 = s2 + $("input[type ='text']").val();
	// }
	
	// s3 = $("input[name ='sweet']:radio:checked").val();
	// s4 = $("input[name ='ice']:radio:checked").val();

	// parameter.type = s1;
	// parameter.add = s2;
	// parameter.sweet = s3;
	// parameter.ice = s4;
	// parameter.email = $("input[type ='email']").val();
	var A1,A2,A3;
	A1 = $("input[name ='Q1']:radio:checked").val();
	A2 = $("input[name ='Q2']:radio:checked").val();
	A3 = $("input[name ='Q3']:radio:checked").val();

	parameter.A1 = A1;
	parameter.A2 = A2;
	parameter.A3 = A3;
	parameter.msg = $(".message").val();
	parameter.sheetUrl = "https://docs.google.com/spreadsheets/d/1kDR7z3OJN1AKVpcqhY8-x-_bJplmgM2EtQB0U1A13MA/edit#gid=0";
	parameter.sheetTag = "工作表1";
	$.post(postURL, parameter, function(data) {
		if (data.result == "success") {
			alert("成功寫入");
			read();
		}else{
			alert("失敗");
		}
	});
}