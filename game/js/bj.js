//补给双排子弹包
	function Bj(w,h){
		var bj = this;
		bj.w = w;
		bj.h = h;
		bj.img = oArr[27]
		bj.delay= 1000;
		bj.dI = 0;
		bj.x = 0 ;
		bj.y = -bj.h;
		var speed = 0
		var vx =0;
		bj.bol = false;
		bj.draw = function(bt,hero){
			bj.dI++;
			if (bj.dI>bj.delay) {
			 	bj.delay = Math.random()*500+1000;
				 bj.x = Math.random()*(canvas.width-bj.w);
				 speed = Math.random()*2+1;
				 vx = Math.random()*2+1
				bj.dI = 0;
			}
			 bj.y +=speed ;
			 bj.x += vx;
			 if (bj.x<0||bj.x>canvas.width-bj.w) {vx *=-1}
			 if ( bj.y>canvas.height||check(bt,hero,bj.x,bj.y)||check(bt,hero,bj.x+bj.w,bj.y)||check(bt,hero,bj.x,bj.y+bj.h)||check(bt,hero,bj.x+bj.w,bj.y+bj.h)){ 
				 	bj.bol = true;
				 	bj.y=-bj.h;speed = 0; bj.x=0;vx = 0
			 }
			ctx.drawImage(bj.img,bj.x,bj.y)
		}
		function check(oB,hero,x,y){
			ctx.beginPath()
			ctx.rect(hero.x,hero.y,hero.w,hero.h);
			ctx.closePath()
			if (ctx.isPointInPath(x,y)) {
				oB.img = oArr[3];
				oB.w = 48;
				
				return true
			}
			return false
		}	
	}
	//炸药包
	function Bom(w,h){
		var bom = this;
		bom.w = w;
		bom.h = h;
		bom.img = oArr[26]
		bom.img1 = oArr[1]
		bom.delay= 1200;
		bom.dI = 0;
		bom.x = 0 ;
		bom.y = -bom.h;
		bom.n = 0;
		var speed = 0
		var vx =0;
		bom.bol = false;
		bom.draw = function(hero){
			bom.dI++;
			if (bom.dI>bom.delay) {
			 	bom.delay = Math.random()*500+1000;
				 bom.x = Math.random()*(canvas.width-bom.w);
				 speed = Math.random()*2+1;
				 vx = Math.random()*2+1
				bom.dI = 0;
			}
			 bom.y +=speed ;
			 bom.x += vx;
			 if (bom.x<0||bom.x>canvas.width-bom.w) {vx *=-1}
			 if ( bom.y>canvas.height||check(hero,bom.x,bom.y)||check(hero,bom.x+bom.w,bom.y)||check(hero,bom.x,bom.y+bom.h)||check(hero,bom.x+bom.w,bom.y+bom.h)){ 
				 	bom.y=-bom.h;speed = 0; bom.x=0;vx = 0
			 }
			ctx.drawImage(bom.img,bom.x,bom.y)
			ctx.drawImage(bom.img1,0,canvas.height-bom.img1.height)
			ctx.font = "30px 黑体";
			ctx.fillText("x"+bom.n,bom.w+5,canvas.height)
		}
		function check(hero,x,y){
			ctx.beginPath()
			ctx.rect(hero.x,hero.y,hero.w,hero.h);
			ctx.closePath()
			if (ctx.isPointInPath(x,y)) {
				bom.n++
				return true
			}
			return false
		}	
	}