function Foe(){
	var foe=this;
	foe.w=0;
	foe.h=0;
	foe.delay=30;
	foe.di=0;
	foe.imgs=[[oArr[8],oArr[4],oArr[5],oArr[6],oArr[7]],[oArr[16],oArr[17],oArr[18],oArr[9],oArr[10],oArr[11],oArr[12],oArr[13],oArr[14],oArr[15]],[oArr[23],oArr[24],oArr[25],oArr[19],oArr[20],oArr[21],oArr[22]]]
	foe.arr=[];
	foe.i=0;
	foe.s=0
	foe.draw=function(ctx){
		
		foe.di++;
		if(foe.di>foe.delay){
			foe.s++;
			if(foe.s>20){foe.s==20}
			var speed=Math.random()*1+1;
			var img=Math.round(Math.random()*5);
			if(img>4 && foe.s>=20){
				audio[4].play();
				img=1; speed=2; foe.w=110; foe.h=164; foe.hp=6;
				var x=Math.random()*(canvas.width-foe.w);
			}else{
				if(img>2){
					audio[4].play();
					img=0; foe.w=32; foe.h=24; foe.hp=2;
					var x=Math.random()*(canvas.width-foe.w);
				}else{
					audio[4].play();
					img=2; foe.w=46; foe.h=60; foe.hp=4;
					var x=Math.random()*(canvas.width-foe.w);
				}
			}
			var obj={x:x , y:-164 , w:foe.w , h:foe.h , hp:foe.hp , speed:speed , delay:5 , di:0 , i:0 , die:false,img:img}
			foe.arr.push(obj)
			foe.di=0;
		}
		for (var i = 0; i < foe.arr.length; i++) {
			foe.arr[i].y+=foe.arr[i].speed
		    if(foe.arr[i].hp<=0){
		    	if(foe.arr[i].img==0){
			    		audio[2].play()
			    }
			    if(foe.arr[i].img==2){
			    		audio[3].play()
			    }
			    if(foe.arr[i].img==1){
			    		audio[5].play()
			    }
		    		foe.arr[i].die=true;
		    }
		    if(foe.arr[i].die||foe.arr[i].y>canvas.height){
				foe.arr[i].i++;
				if(foe.arr[i].i>foe.imgs[foe.arr[i].img].length-1){
					foe.arr.splice(i,1)
					i--;
					continue;
				}
			}   
			ctx.drawImage(foe.imgs[foe.arr[i].img][foe.arr[i].i],foe.arr[i].x,foe.arr[i].y)
		   
		}
		
	}
}
