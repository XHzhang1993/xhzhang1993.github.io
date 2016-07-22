var btn=document.querySelector('.top .l p');
var li=document.querySelectorAll('li');
var ul=document.querySelector('ul');
for (var i = 0; i < li.length; i++) {
	li[i].addEventListener("click",function(e){
		btn.innerHTML=this.innerHTML;
		ul.style.display='none';
		e.stopPropagation();
	})
}
btn.addEventListener("click",function(e){
		ul.style.display='block';
		e.stopPropagation();
	})
document.addEventListener("click",function(){
		ul.style.display='none';
	})