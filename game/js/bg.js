function Bg(w,h){
	var bg=this;
	bg.w=w;
	bg.h=h;
	bg.y=0;
	bg.speed=2;
	bg.draw=function(){
		bg.y+=bg.speed;
		if(bg.y>=canvas.height){bg.y=0}
		ctx.drawImage(oArr[0],0,0,bg.w,bg.h,0,bg.y, canvas.width, canvas.height)
		ctx.drawImage(oArr[0],0,0,bg.w,bg.h,0,bg.y-canvas.height, canvas.width, canvas.height)
	}
}
