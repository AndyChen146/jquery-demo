$(function(){
	
	var obj = $(".coupletRandom");
	var x = 0,y=0;
	var xin = true,yin = true;
	var step = 1;

	var flaot = function() {
        var L = 0,T = 0;
        var OW = obj.width();
        var OH = obj.height();
        var DW = $(window).width();
        var DH = $(window).height();
        x = x + step * (xin ? 1 : -1);
        if (x < L) {
           xin = true;
            x = L;
        }
        if (x > DW - OW - 1) {
            xin = false;
            x = DW - OW - 1;
        }
        y = y + step * (yin ? 1 : -1);
        if (y > DH - OH - 10) {
            yin = false;
            y = DH - OH - 10;
        }
        if (y < T) {
            yin = true;
             y = T;
         }
        var left = x;
        var top = y;
        obj.css({
            'top': top,
            'left': left
        });
    };

	var init = setInterval(flaot,30);
	$(".coupletRandom").mouseout(function(){
		init = setInterval(flaot,30);
	});
	$(".coupletRandom").mouseover(function(){
		clearInterval(init);
	});

});