;(function($){
	
	var Tab = function(tab){	

		var _this_ = this;	
		this.tab = tab;
		//配置默认的参数
		this.config = {
			"triggerType":"mousemove",  //鼠标的触发方式
			"effect":"defalut",  //内容显示区域播放效果
			"invoke":1,	  //第几个开始
			"auto":false  //定义是否循环播放，如果是则写入时间表示隔多少时间自动循环播放
		};
		//判断是否有人工配置参数,有则扩展,没有则取默认的配置参数
		if(this.getConfig()){
			$.extend(this.config,this.getConfig());			
		}
		this.tabitems = this.tab.find("ul.tab-nav li");
		this.contentItems = this.tab.find("div.tab-content div.content-item");
		var config = this.config;
		if(config.triggerType === 'click'){
			this.tabitems.bind(config.triggerType,function(){
				_this_._invoke($(this));
			});
		}else if(config.triggerType === 'mouseover' || config.triggerType != 'click'){
			this.tabitems.mouseover(function(){
				_this_._invoke($(this));
				/*
				var self = $(this);
				this.timer = window.setTimeout(function(){
					_this_._invoke($(this));
				},3000);	

			}).mouseout(function() {
				window.clearTimeout(this.timer);*/
			});
		}
		if(config.auto){
			this.timer = null; //全局定时器
			this.loop = 0; //计数器
			this.autoPlay();
		}

	};

	Tab.prototype = {
		//自动播放函数
		autoPlay:function(){
			var _this = this,
				loop = this.loop,
				tabitems = this.tabitems,  //保存临时的tab列表
				tabLength = tabitems.size(), //tab切换的个数
				config = this.config; 

			this.timer = window.setInterval(function(){
				_this.loop ++;
				if(_this.loop >= tabLength){
					_this.loop = 0;
				}
				//console.log(_this.loop);
				tabitems.eq(_this.loop).trigger(config.triggerType);

			},config.auto);

			

		},
		//事件驱动函数
		_invoke:function(currentTab){
			var _this = this;
			var index = currentTab.index();
			currentTab.addClass('active').siblings().removeClass('active');

			var effect = this.config.effect;
			var conItems = this.contentItems;
			if(effect === 'defalut' || effect != 'fade'){
				conItems.eq(index).addClass('current').siblings().removeClass('current');
			}else if(effect === 'fade'){
				conItems.eq(index).fadeIn().siblings().fadeOut();
			}
		},
		//获取参数配置
		getConfig:function(){
			var config = this.tab.attr('data-config');
			//判断是否存在配置参数,有的话就转成json对象形式,没有返回null
			if(config && config != ""){
				return $.parseJSON(config);
			}else{
				return null;
			}
		}
	};

	window.Tab = Tab;
})(jQuery);