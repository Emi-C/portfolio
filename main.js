/*onde*/
function animaBG() {
	$('.layer.lay1').animate({'background-position-x': '-200px'}, 2000).animate({'background-position-x': '200px'}, 2000, animaBG);
	$('.layer.lay2').animate({'background-position-x': '200px'}, 4000).animate({'background-position-x': '-200px'}, 4000, animaBG);
	$('.layer.lay3').animate({'background-position-x': '-100px'}, 2000).animate({'background-position-x': '100px'}, 2000, animaBG);
	$('.layer.lay4').animate({'background-position-x': '300px'}, 2500).animate({'background-position-x': '-300px'}, 2500, animaBG);
	$('.layer.lay5').animate({'background-position-x': '-150px'}, 3000).animate({'background-position-x': '150px'}, 3000, animaBG);
	$('.pic').animate({'background-position-y': '0%'}, 4000).animate({'background-position-y': '100%'}, 4000, animaBG);
}
animaBG();


/*nome-bio*/
$(document).ready(function(){
	setTimeout(function(){$(".name").css("opacity",1);}, 1000);
	setTimeout(function(){$(".bio").css("opacity",1);}, 2000);
});
/*nome-bio*/

/*scroller*/
$(".scroller").click(function(){
	scrollata(0);
});

/*scroll AKA hai detto cazzi*/
$(window).on('mousewheel DOMMouseScroll', function(e){if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {scrollata(1);}else{scrollata(0);}});

var now=0;
var tot=3;

$('#tot').html(tot);

function scrollata(ind){

    if (ind==1){
        console.log("up");

		if (now>0){
			$(window).off('mousewheel DOMMouseScroll');
			$(".foot").removeClass("active");

			if (now===1){
				$(".home").addClass("active");
			}

			$("#tit"+now).removeClass("active");
			$("#txt"+now).removeClass("active");
			$("#specs"+now).removeClass("active");
			$("#pic"+now).removeClass("active");
			$("#link"+now).removeClass("active");

			now-=1;

			$("#tit"+now).addClass("active");
			$("#txt"+now).addClass("active");
			$("#specs"+now).addClass("active");
			$("#pic"+now).addClass("active");
			$("#link"+now).addClass("active");

			setTimeout(function(){
				$(window).on('mousewheel DOMMouseScroll', function(e){if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {scrollata(1);}else{scrollata(0);}});
			}, 2000);
		}
    }else{
        console.log("down");

		if (now<=tot){
			$(window).off('mousewheel DOMMouseScroll');
			$(".home").removeClass("active");

			if (now===tot){
				$(".foot").addClass("active");
			}else{
				$(".main").addClass("active");
			}

			$("#tit"+now).removeClass("active");
			$("#txt"+now).removeClass("active");
			$("#specs"+now).removeClass("active");
			$("#pic"+now).removeClass("active");
			$("#link"+now).removeClass("active");

			now+=1;

			$("#tit"+now).addClass("active");
			$("#txt"+now).addClass("active");
			$("#specs"+now).addClass("active");
			$("#pic"+now).addClass("active");
			$("#link"+now).addClass("active");

			setTimeout(function(){
				$(window).on('mousewheel DOMMouseScroll', function(e){if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {scrollata(1);}else{scrollata(0);}});
			}, 2000);
		}
    }

	if (now>0&&now<=tot){
		$("#count").html(now);
	}
}



/*contacts*/
var trg=0;
var picind=0;
var els = $(".piccontact");

var gocont = setInterval(piccont,1500);

function piccont(){
	els.eq(picind).fadeOut(200,function () {
		picind = (picind+1) % els.length;
		els.eq(picind).fadeIn(200);
	});
}

$('.tgcontact').click(function(){
	if (trg==0){
		//attiva contatti
        $('.contacts').addClass('active');
        $('.formview>*').delay(1000).animate({opacity:1});
		trg=1;
		els.fadeOut(200,function () {
			$('.tgclose').delay(300).fadeIn(200);
		});
		clearInterval(gocont);
	}else{
		//leva contatti
        $('.formview>*').animate({opacity:0});
        $('.contacts').delay(500).queue(function(next){
            $(this).removeClass("active");
            next();
        });
		trg=0;
		picind=0;
		$('.tgclose').fadeOut(200,function () {
			els.eq(0).delay(300).fadeIn(200);
		});
		gocont = setInterval(piccont,1500);
	}
})


//form
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}


$("#ava").click(function(){
	var currid=$(".fvg.vis").attr("id");

	if(currid=="f1"){
		if($("#"+currid+" > input").val()==""){
			$("#"+currid+" > label").addClass("error");
			return false;
		}else{
			$("#"+currid+" > label").removeClass("error");
		}
	}
	if(currid=="f2"){
		if($("#"+currid+" > input").val()==""||!validateEmail($("#"+currid+" > input").val())){
			$("#"+currid+" > label").addClass("error");
			return false;
		}else{
			$("#"+currid+" > label").removeClass("error");
		}
	}
	if(currid=="f1"){
		$("#ind").show();
		$(".nomecont").html($("#nome").val());
	}
	if(currid=="f2"){
		$("#ava").hide();
		$("#sub").show();
	}
	$(".fvg.vis").removeClass("vis");
	$("#"+currid).next().addClass("vis");

	var progw=parseInt($('.progbar')[0].style.width, 10);
	progw=progw+39;
	$(".progbar").animate({width: progw+"%"}, 700);

	var span=$(".progbar").next("span").html();
	var span=span.slice(0,1);
	span=parseInt(span)+1;
	$(".progbar").next("span").html(span+"/3");

    $('.nomecont').html($('#nome').val());
});


$("#ind").click(function(){
	var currid=$(".fvg.vis").attr("id");
	if(currid=="f2"){
		$("#ind").hide();
	}
	if(currid=="f3"){
		$("#sub").hide();
		$("#ava").show();
	}
	$(".fvg.vis").removeClass("vis");
	$("#"+currid).prev().addClass("vis");

	var progw=parseInt($('.progbar')[0].style.width, 10);
	progw=progw-39;
	$(".progbar").animate({width: progw+"%"}, 700);

	var span=$(".progbar").next("span").html();
	var span=span.slice(0,1);
	span=parseInt(span)-1;
	$(".progbar").next("span").html(span+"/3");
});


$("#sub:not(.done)").click(function(){
	$.ajax({
		url: "mailer.php",
		method: "post",
    data:{name:$("#nome").val(),mail:$("#mail").val(),msg:$("#txt").val()}
	})
	.done(function() {
		$("#sub").addClass("done");
		$("#sub").html("MESSAGE SENT!");
	})
	.fail(function() {
		$("#sub").addClass("error");
		$("#sub").html("ERROR :( REFRESH, MAYBE? DUNNO!");
	});
});


/*contacts*/

/*LOADER*/
// var n=0;
// var c=0;
// $('img').each(function() {
  // n++;
  // var tmpImg = new Image() ;
  // tmpImg.src = $(this).attr('src');
  // tmpImg.onload = function() {
	  // c++;
  // };
// });



// var interval = setInterval(function() {
	// percent = n/100;
	// loaded = c/percent;

	// // for displaying purposes
	// console.log(loaded);
	// // feed loaded var to the progressbar
	// if (loaded == 100) {
		// clearInterval(interval);
	// }

// }, 5);
