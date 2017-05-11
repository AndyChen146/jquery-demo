$(function(){
	var len = $(".content").text().length;
	var zkname = '<a class="zkname">【展开】</a>';
	var sqname = '<a class="sqname">【收起】</a>';
	var orgText = $(".content").html();
	var m = 300;
	if(len >= m){
		$(".content").text($(".content").text().substring(0,m));
		$(".content").html($(".content").html()+'...'+zkname);
	}

	$(document).on('click','.zkname',function(){
		$(".content").html(orgText+sqname);		
	});

	$(document).on('click','.sqname',function(){
		$(".content").text($(".content").text().substring(0,m));
		$(".content").html($(".content").html()+'...'+zkname);
	});	
});