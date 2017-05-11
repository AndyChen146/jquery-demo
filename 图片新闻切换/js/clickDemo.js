$(function(){
	var oLi = $(".wrap ol li");
	var uLi = $(".wrap ul");
	var ali = $(".wrap ul li");
	var len = ali.length;
	var liWidth = ali.eq(0).width();
	var str = 0;
	var index = 0;

	$(".btn-right").click(function(){
		oLi.removeClass("cur");
		if(str == len-1){
			$(ali[str]).fadeOut(500);
			str = 0;
			$(ali[str]).fadeIn(500);
			$(oLi[str]).addClass("cur");
            index = str;
		}else{
			$(ali[str]).fadeOut(500);
            str ++;
	        $(ali[str]).fadeIn(500);
	        $(oLi[str]).addClass("cur");
	        index = str;
		}
	});

	$(".btn-left").click(function(){
		oLi.removeClass("cur");
		if(str == 0){
			$(ali[str]).fadeOut(500);
			str = len-1;
			$(ali[str]).fadeIn(500);
			$(oLi[str]).addClass("cur");
            index = str;
		}else{
			$(ali[str]).fadeOut(500);
            str --;
	        $(ali[str]).fadeIn(500);
	        $(oLi[str]).addClass("cur");
	        index = str;
		}
	});
});