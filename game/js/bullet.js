function Bullet(w,h){
	var oB=this;
	oB.w=w;
	oB.h=h;
	oB.img=oArr[2];
	oB.delay=10;
	oB.di=0;//延时
	oB.obs=[];
	oB.speed=5;
	oB.n =5000;
	oB.draw=function(hero,foe,bj){
		oB.di++;
		if(oB.di>oB.delay){
			var obj={x:hero.x+hero.w/2-oB.w/2,y:hero.y-oB.h-5}
			oB.obs.push(obj)
			oB.di=0;
		}
		for (var i = 0; i < oB.obs.length; i++) {
				oB.obs[i].y -= oB.speed
				if (oB.obs[i].y<-oB.h||check(foe.arr,oB.obs[i].x,oB.obs[i].y)) {
					oB.obs.splice(i,1);
					i--;
					continue;
				}
				if (!bj.bol) {
					ctx.drawImage(oB.img,oB.obs[i].x,oB.obs[i].y)
				}else{
					oB.speed=8
					oB.n--
					if(oB.n<=0){bj.bol = false;oB.img = oArr[2];oB.n = 5000,oB.w=6;oB.speed=5 }
					if (check(foe.arr,oB.obs[i].x+42,oB.obs[i].y)) {
						oB.obs.splice(i,1);
						i--
						continue;
					}
					ctx.drawImage(oB.img,0,0,6,oB.h,oB.obs[i].x,oB.obs[i].y+35,6,oB.h);
					ctx.drawImage(oB.img,42,0,6,oB.h,oB.obs[i].x+42,oB.obs[i].y+35,6,oB.h)
				}
				
			}		
	}
	function check(arr,x,y){
		for (var i = 0; i < arr.length; i++) {
			ctx.beginPath()
			ctx.rect(arr[i].x,arr[i].y,arr[i].w,arr[i].h)
			ctx.closePath()
			if(ctx.isPointInPath(x,y)){
				arr[i].hp--;
				fs+=100;
				oScole.innerHTML = fs;
				if((arr[i].img==2 ||arr[i].img==1) && arr[i].hp>0){
					arr[i].i=Number(arr[i].i!=1?1:2);
				}
				return true;
			}
			
		}
		
	}
	
}
