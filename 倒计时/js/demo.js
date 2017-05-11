$(function(){
	var date = new Date();
	var d = date.getDate();
	var y = date.getFullYear();
	var m = date.getMonth()+1;
	var h = date.getHours();
	var f = date.getMinutes();
	var s = date.getSeconds();
	
	var time = $(".date").html(y+'年'+m+'月'+d+'号');

	

	setInterval(function(){
		var date = new Date();
		var d = date.getDate();
		var y = date.getFullYear();
		var m = date.getMonth()+1;
		var h = date.getHours();
		var f = date.getMinutes();
		var s = date.getSeconds();
		if(m<10){
			m = '0'+m;			
		}
		if(d<10){
			d = '0'+d;
		}
		if(h<10){
			h = '0'+h;
		}
		if(f<10){
			f = '0'+f;
		}
		if(s<10){
			s = '0'+s;
		}
		var time = $(".time").html(y+'年'+m+'月'+d+'号 '+h+':'+f+':'+s);
	},1000);
	
});

$(function(){
	var s = 60;

	setInterval(function(){
		if(s==0){
			s=0;
		}else{
			s--;
		}
		
		var time = $(".time1").html(s+'秒');
	},1000)
	
});

$(function(){
	
	setInterval(function(){
		var endDate = new Date('2017/11/11 00:00:00');
		var newDate = new Date();
		var t = endDate.getTime() - newDate.getTime();
		if(t>=0){
			var m = Math.floor(t/1000/60/60/24/30);
			var d = Math.floor(t/1000/60/60/24);
			
			var h = Math.floor(t/1000/60/60%24);
			var f = Math.floor(t/1000/60%60);
			var s = Math.floor(t/1000%60);
		}
		$(".time2").html(d+'天'+h+'时'+f+'分'+s+'秒');
	},1000)
	

});