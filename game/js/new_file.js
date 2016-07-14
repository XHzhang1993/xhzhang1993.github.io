	 var div=document.querySelector('.lod')
	 var img=document.querySelector('.img')
	 var name=''
	  var oButton=document.querySelectorAll('button')[0];
	 var oBegin = document.getElementById("begin");
	 var oBtn1 = document.getElementById("btn1");
	 var oStop = document.getElementById("stop");
	 var oScole = document.getElementById("scole");
	 var oBtn2 = document.getElementById("btn2");
	 var oScoles = document.getElementById("scoles");
	 var oCont = document.getElementById("cont");
	 var oP1 = document.getElementById("p1");
	 var oEnd = document.getElementById("end");
	 var oP2 = document.getElementById("p2");
	 var oL = document.getElementById("ol");
	 var oText = document.getElementById("text");
	 var oCool = document.getElementById("cool");
	 var oPhb = document.getElementById("phb");
	 var ol = document.getElementById("ol");
	 
	 var audio = document.querySelectorAll('audio');//所有音乐
	 var canvas=document.querySelector('canvas')
	 canvas.width=document.documentElement.clientWidth;
	 canvas.height=document.documentElement.clientHeight;
	 var ctx=canvas.getContext('2d');
	 var id = null;
	 var fs = 0;
	 //图片路径
	 var Aimg=['background_2.png','bomb.png','bullet1.png','bullet2.png','enemy1_blowup_1.png',
		'enemy1_blowup_2.png','enemy1_blowup_3.png','enemy1_blowup_4.png','enemy1_fly_1.png',
		'enemy2_blowup_1.png','enemy2_blowup_2.png','enemy2_blowup_3.png','enemy2_blowup_4.png',
		'enemy2_blowup_5.png','enemy2_blowup_6.png','enemy2_blowup_7.png','enemy2_fly_1.png',
		'enemy2_fly_2.png','enemy2_hit_1.png','enemy3_blowup_1.png','enemy3_blowup_2.png',
		'enemy3_blowup_3.png','enemy3_blowup_4.png','enemy3_fly_1.png','enemy3_hit_1.png',
		'enemy3_hit_2.png','enemy4_fly_1.png','enemy5_fly_1.png','game_pause.png','game_pause_hl.png',
		'hero_blowup_1.png','hero_blowup_2.png','hero_blowup_3.png','hero_blowup_4.png',
		'hero_fly_1.png','hero_fly_2.png','loading0.png','loading1.png','loading2.png','loading3.png']
	 
	 var lodimg=['loading01.png','loading02.png']
	 //图片对象
	 var oArr=[];
	var cookie=[];
   	load(lodimg,function(){
 		l()
	 	   load(Aimg,function(){
				setInterval(function(){div.style.display="none"},1000)
				oBtn1.onclick=function(){
//					localStorage.clear()
					if(oText.value==""){alert("请输入名字");return;}
					name=oText.value;
					begin.style.display = "none";
					oStop.style.display = "block";
					p1.style.display = "block";
					
					start()
					
					//获取数据
					if(localStorage.length>0){
						for(var key in localStorage){
							if(parseInt(localStorage[key])){
								var s=key
								console.log(s)
								cookie.push({Key:s,value: localStorage[key]})
							}
						
						}
					 }				
					}
				//提交分数
				oCool.onclick=function(){
					var index=0;
					for (var i = 0; i < cookie.length; i++) {
						index=i
						if(name==cookie[i].Key){
							if(cookie[i].value<fs){
								cookie[i].value=fs;
								localStorage.setItem(cookie[i].Key,cookie[i].value);	
								
							}	
						break;
						}
					}
					if(index==cookie.length-1){
						localStorage.setItem(name,fs);
							
					}
					cookie=[];
					if(localStorage.length>0){
						for(var key in localStorage){
							if(parseInt(localStorage[key])){
								var s=key
								console.log(s)
								cookie.push({Key:s,value: localStorage[key]})
							}
						
						}
					 }
					px(cookie)
					oPhb.click()
				}
				//排名
				oPhb.onclick=function(){
					oButton.style.display = "block";
					ol.style.display="block";
					px(cookie)
					ol.innerHTML=""
					for (var i = 0; i < cookie.length; i++) {
						if(i>9){return}
						var li=document.createElement('li')
						li.innerHTML='<p>'+cookie[i].Key+':'+cookie[i].value+'</p>'
						ol.appendChild(li)
					}			
				}
				
				
				
				oButton.addEventListener("click",function(){oL.style.display = "none";this.style.display = "none"})
				
				})
	 	    oStop.addEventListener("click",function(){
				cancelAnimationFrame(id);
				oCont.style.display = "block";
			})
	 	    
   	})
   	
   	//数组排序
   	function px(arr) {
			for (var i = 0; i < arr.length; i++) {
				for (var j = i+1; j < arr.length; j++) {
					if (parseInt(arr[i].value)<parseInt(arr[j].value)) {
						var num = arr[i];
						arr[i]=arr[j];
						arr[j]=num;					
					}
				}
			}
			return arr;
		}

   	
   	
   	oBtn2.addEventListener("click",function(){
		start();
		oEnd.style.display = "none";
		fs = 0;
		oScole.innerHTML = fs;
		oStop.style.display = "block";
	})
   	
   	//loading动画
   	 var io=0,j=0;
	 function l(){
			j++;
			if(j>5){
				if(io==0){io=1}else{io=0}
	         	img.style.background='url(images/'+lodimg[io]+')'
	         	j=0;
			}
	 	requestAnimationFrame(l)
	 }

	
	//创建第二个画布
	var canvas2 = document.createElement('canvas');
	canvas2.width = document.documentElement.clientWidth;
	canvas2.height = document.documentElement.clientHeight;
	canvas2.style.display="none"
	document.body.appendChild(canvas2)
		var ctx2 = canvas2.getContext("2d");
	
	
	
	
	 //图片加载函数
	function load(arr,fn){
		var index=0;
		oArr=[]
		for (var i = 0; i < arr.length; i++) {
			var img=new Image();
			img.src="images/"+Aimg[i]
			oArr.push(img)
			img.onload=function(){
				index++;
				if(index==arr.length){
					fn && fn()
				}
			} 
		}
	}
	 
	 
	//开始函数
	function start(){
		audio[1].play();
		audio[1].loop="loop"
		audio[1].volume = 0.4;
		audio[0].play();
		audio[0].loop="loop"
		audio[0].volume = 0.3;
		var bg=new Bg(320,568)
		var hero=new Hero(66,82);
		var bullet=new Bullet(6,14)
		var foe=new Foe(34,24)
		var bj = new Bj(38,58);
		var bom = new Bom(39,68)
		step()
		
		oCont.addEventListener("click",function(){
				step();
				this.style.display = "none";
		})
		
		
		function step(){
			ctx2.clearRect(0,0,canvas.width,canvas.height)
			if(hero.bol2){
					return
				}
			bg.draw();
			bullet.draw(hero,foe,bj)
			foe.draw(ctx)
			hero.draw(ctx,foe);
			bj.draw(bullet,hero)
			bom.draw(hero)
			ctx2.globalCompositeOperation="source-over";
				foe.draw(ctx2);
				ctx2.globalCompositeOperation="source-in";
				hero.draw(ctx2,foe);
				var data = ctx2.getImageData(hero.x,hero.y,hero.w,hero.h).data;
				for (var i = 3; i < data.length; i+=4) {
					if (data[i]>0) {
//					  console.log("sile")
						hero.bol = true;
					break;
						}
				}	
			id = requestAnimationFrame(step);
		}
		//拖拽飞机
		var dx=0,dy=0,x=0,y=0;
		canvas.addEventListener("touchstart",function(e){
			dx=e.touches[0].clientX-hero.x;
			dy=e.touches[0].clientY-hero.y;
			
			if (bom.n>0) {
				if (check(e.touches[0].clientX,e.touches[0].clientY)) {
					for (var i = 0; i < foe.arr.length; i++) {
						foe.arr[i].hp=0
					}
					
				}
			}
			function check(x,y){
			ctx.beginPath()
			ctx.rect(0,canvas.height-bom.h,bom.w,bom.h);
			ctx.closePath()
			if (ctx.isPointInPath(x,y)) {
				bom.n--
				return true
			}
			}
			e.preventDefault()
		})
		canvas.addEventListener("touchmove",function(e){
			x=e.touches[0].clientX-dx;
			y=e.touches[0].clientY-dy;
			if(x<=0){x=0}else if(x>=canvas.width-hero.w){x=canvas.width-hero.w}
			if(y<=0){y=0}else if(y>=canvas.height-hero.h){y=canvas.height-hero.h}
			hero.x=x;
			hero.y=y;
		})
	}
	
	
