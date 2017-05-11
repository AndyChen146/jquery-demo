$(function(){
	var Oli = $(".wrap ol li");
	var Uli = $(".wrap ul");
	var ali = $(".wrap ul li");
	var liWidth = $(".wrap ul li").eq(0).width();
	var timeId;
	var _now2 = 0;
	var _now = 0;
	Oli.click(function(){
		var index = $(this).index();
		_now = index;
		_now2 = index;
		$(this).addClass("cur").siblings().removeClass();
		Uli.animate({'left':-liWidth*index}, 500);
	});
	function silder(){
		if(_now == Oli.size()-1){
			ali.eq(0).css({
				'position':'relative',
				'left':Uli.width()
			});
			_now = 0;
		}else{
			_now++;
		}
		_now2++;
		Oli.eq(_now).addClass('cur').siblings().removeClass();
		Uli.animate({'left':-liWidth*_now2}, 500,function(){
			if(_now==0){
				ali.eq(0).css('position','static');
				Uli.css('left',0);
				_now2=0;
			}
		});
	};
	timeId = setInterval(silder,3000);
	$('.wrap').hover(function(){
		clearInterval(timeId);
	},function(){
		timeId = setInterval(silder,3000);
	});
});