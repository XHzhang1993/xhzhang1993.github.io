//玩家飞机
function Hero(w,h){
	var hero =this;
	hero.w=w;
	hero.h=h;
	hero.x=canvas.width/2-hero.w/2;
	hero.y=canvas.height*0.8-hero.h;
	hero.imgs = [oArr[34],oArr[35],oArr[30],oArr[31],oArr[32],oArr[33]];
	hero.i=0;//hero.imgsx下标
	hero.delay=5
	hero.dI=0;//判断延时hero.delay
	hero.bol = false;
	hero.bol2 =false;
	hero.draw=function(ctx,foe){
		if(hero.bol==false){
				hero.dI++;
				if (hero.dI>hero.delay) {
					//切换图片0，1，0，1
					hero.i = Number(!hero.i)
					hero.dI  = 0;
				}
			}
		if(hero.bol){
			audio[1].pause();
			audio[0].pause();
			audio[2].pause();
			audio[3].pause();
			audio[4].pause();
			audio[5].pause();
			audio[6].play()
				hero.dI++;
				if (hero.dI>hero.delay) {
				if(hero.i>=hero.imgs.length-1){
						
						hero.bol2=true;
						oEnd.style.display = "block";
						oScoles.innerHTML = fs;
						oStop.style.display = "none";
						
						return;
					}
					hero.i++;	
					hero.dI  = 0;
					
				}
				for (var i = 0; i < foe.arr.length; i++) {
					var fl = foe.arr[i].x;
					var ft = foe.arr[i].y;
					var fr = foe.arr[i].x+foe.w;
					var fb = foe.arr[i].y+foe.h;
					if(hero.x<fr&&hero.y<ft&&hero.x+hero.w>fl&&hero.y+hero.h>ft){
						foe.arr[i].hp = 0;
					}
				
				}
			}
		ctx.drawImage(hero.imgs[hero.i],hero.x,hero.y)
		
	}
}

