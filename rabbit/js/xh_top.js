
var btn=$(".top .l p");
var mav_L=$('#mav_l ul');
var mav_L_li=$('#mav_l li');

var maun=$("#maun");
var mav_R=$('#mav_r');
var mav_R_li=$('#mav_r li');

var gwc=$('#gwc');

mav_L_li.on("click",function(e){
	btn.html($(this).html());
	mav_L.hide();
	e.stopPropagation();
})
btn.on("click",function(e){
	mav_L.show();
	mav_R.hide();
	e.stopPropagation();
})

mav_R_li.on("click",function(e){
	mav_R.hide();
	e.stopPropagation();
})
maun.on("click",function(e){
	mav_R.show();
	mav_L.hide();
	e.stopPropagation();
})

$(document).on("click",function(){
	mav_L.hide();
	mav_R.hide();
})


var time1=0;
gwc.on('touchstart',function(e){
	time1=new Date();
	gwc.on("touchmove",function(e){
		var x=e.touches[0].clientX-gwc.width()/2;
		var y=e.touches[0].clientY-gwc.height()/2;
		if(x<=0){x=0}else if(x>=$(window).width()-gwc.width()){x=$(window).width()-gwc.width()}
		if(y<=0){y=0}else if(y>=$(window).height()-gwc.height()){y=$(window).height()-gwc.height()}
		gwc.css("left",x);
		gwc.css("top",y);
		e.preventDefault();
	})
	e.preventDefault();
})
gwc.on('touchend',function(){
	var time2=new Date();
	if(time2-time1<100){
		alert("1");
	}
})


