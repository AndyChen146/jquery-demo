;(function($) {

	function SubType($ele,options){
		this.$ele = $ele;
		this.opts = $.extend({}, $.fn.popWin.defaults, options);
		
	}

	$.fn.popWin = function(options){
		var superType = new SubType(this,options);	
		superType.createPopWin();
		return this;
	};

	var popWinDom,titleAreaDom,descAreaDom,btnAreaDom;
	SubType.prototype = {
		createPopWin : function(){
			var _this = this;
			this.$ele.css({
				position:'fixed',
				top:0,
				left:0,
				right:0,
				bottom:0,
				backgroundColor:'rgba(0,0,0,0.4)',
				overflow:'hidden'
			});

			popWinDom = $('<div><div></div><div></div><div></div></div>').css({
				width:this.opts.width,
				height:this.opts.height,
				position:'absolute',
				top:'30%',
				left:'50%',
				marginLeft:'-'+(this.opts.width.split('px')[0]/2)+'px'
			}).attr('class',this.opts.winCssName);

			titleAreaDom = popWinDom.find('div:eq(0)').text(this.opts.title).attr('class',this.opts.titleCssName);

			descAreaDom = popWinDom.find('div.eq(1)').text(this.opts.desc).attr('class',this.opts.descCssName);

			btnAreaDom = popWinDom.find('div.eq(2)').attr('class',this.opts.btnAreaCssName);

			this.opts.btnArr.map(function(item,index){
				btnAreaDom.append($('<button></button>').text(item).attr({'data-index':index,'class':_this.opts.btnCssName}).on('click',function(){
					_this.opts.callback($(this).attr('data-index'));
				}));
			});
			this.$ele.append(popWinDom);

		}
	};
	
	$.fn.popWin.defaults = {
		width:600,
		height:300,
		title:'标题',
		desc:'描述',
		winCssName:'pop-win',
		titleCssName:'pop-title',
		descCssName:'pop-desc',
		btnAreaCssName:'pop-btn-box',
		btnCssName:'pop-btn',
		btnArr:'确定',
		callback:function(){

		}
	};	

})(jQuery);	



