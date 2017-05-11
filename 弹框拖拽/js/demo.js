$(function(){
	$("#btn").click(function(){
		$(".main").show();
		var srollHeight = $(window).scrollTop();
		var srollWidth = $(window).scrollLeft();
		var offsetHeight = ($(window).height()-$(".main").height())/2;
		var offsetWidth = ($(window).width()-$(".main").width())/2;
		$(".main").css({
			'position':'absolute',
			'top':offsetHeight+srollHeight,
			'left':offsetWidth+srollWidth
		});
		$('body').append("<div class='mask'></div>");
		$('.mask').css({
			'width':$(window).width(),
			'height':$(window).height()
		});		
	});
	$(".buttons").click(function(){
		$(".main").hide();
		$(".mask").remove();
	});

	var mouseOffsetX = 0;  //拖动的X轴距离
	var mouseOffsetY = 0;  //拖动的Y轴距离
	var isDraging = false;  //是否可拖动的标记
	$(".top").mousedown(function(e){		
		mouseOffsetX = e.pageX - $(".main").offset().left;
		mouseOffsetY = e.pageY - $(".main").offset().top;
		isDraging = true;
	}).mouseup(function(e) {
		isDraging = false;
	});
	$(document).mousemove(function(e){
		var moveX = 0;
		var moveY = 0;
		if(isDraging === true){
			moveX = e.pageX - mouseOffsetX;
			moveY = e.pageY - mouseOffsetY;
			var maxX = $(window).outerWidth(false) - $(".main").outerWidth(false);
			var maxY = $(window).outerHeight(false) - $(".main").outerHeight(false);
			moveX = Math.min(maxX,Math.max(0,moveX));
			moveY = Math.min(maxY,Math.max(0,moveY));
			$(".main").css({
				'left':moveX,
				'top':moveY
			});
		}
	})
})