// JavaScript Document
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
}
//obj==对象		iTarget==目标位置	 attr=属性		time=用时
//obj==对象		json		time=用时
function move(obj,json,time){
	var start={};
	var dis={};
	for(var key in json){
		start[key]=parseInt(getStyle(obj,key));
		dis[key]=json[key]-start[key];
	}
	
	var count=Math.round(time/30);
	var n=0;
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;
		
		for(var key in json){
			//办事
			var cur=start[key]+n*dis[key]/count;
			
			if(key=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[key]=cur+'px';
			}	
		}
		
		if(n==count) clearInterval(obj.timer);	
	},30);
}