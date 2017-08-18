define(function(require, exports, module) {

	//我的账户里点击切换的效果
	exports.sidebarTab = function(){

		//侧边栏点击效果
		$(".barul > li").click(function(){
			$(this).siblings().removeClass("current").find(".barOL").slideUp();
			$(this).addClass("current").find(".barOL").slideDown();
		});

		//侧边栏状态鼠标放上效果
		$('.usericon li a').hover(function() {
	    		$(this).next('p').show();
	    		$(this).next('p').animate({"bottom": "-30px"}, 1000)
	    	}, function() {
	    		$(this).next().hide()
	    		$(this).next('p').css('bottom', '-45px');
	    		$(this).next('p').stop();
	    	});
	}
	//我的账户内容页面的所有效果
	exports.mainContent = function(){

		//我的借款的tab切换

		$('.mybrwhd ul li').click(function(event) {
			$(this).addClass('current').siblings().removeClass('current');
			var index=$(this).index();
			$('.mybrwbd ul>li').eq(index).show().siblings("li").hide();
		});


		//个人充值页面的快捷和网银切换
		$('.recmainTop>ul>li').click(function(){
			$(this).addClass("current").siblings().removeClass('current');
			var index = $(this).index();
			$('.recmainContent ol>li').eq(index).show().siblings().hide();
		})


		//企业充值页面的快捷和网银切换
		$('.rechargeCon>ul>li').click(function(){
			$(this).addClass("current").siblings().removeClass('current');
			var index = $(this).index();
			$('.rechargeCon ol>li').eq(index).show().siblings().hide();
		})



		//充值页面快捷支付的银行下拉列表

		$('.recSelect span').click(function(event){
			event.stopPropagation();
			$('.recSelect ul').toggle();
		})
		$('.recSelect ul li').click(function(event){
			var spanLi = $(this).html()
			$('.recSelect span').html(spanLi);
			$(this).parent("ul").toggle();
		})
		$(window).click(function(event) {
			$('.recSelect ul').hide()
		});

		//企业充值页面网银充值的银行下拉列表
		$('.bankRecharge span').click(function(event){
			event.stopPropagation();
			$('.bankRecharge .inbankRecharge').toggle();
		})
		$('.inbankRecharge ul li').click(function(event){
			var spanLi = $(this).html()
			$('.bankRecharge span').html(spanLi);
			$(this).parents(".inbankRecharge").toggle();
		});
		$(".inbankRecharge i").click(function(event) {
			$('.inbankRecharge').hide();
		});




		//产品投资页面的tab切换
		$(".investmentHd ul li").click(function(){
			$(this).addClass('current').siblings().removeClass('current');
			var index = $(this).index();
			$(".investmentBd ul>li").eq(index).show().siblings().hide();
		})


		//安全中心的点击切换效果开始
		$(".safebtn1").click(function(){
			var $table = $(this).parents('li').find(".logoinPw");
			if ($table.hasClass('none')) {
				$table.removeClass('none').parents('li').siblings().find(".logoinPw").addClass('none')
			} else{
				$table.addClass('none');
			};
		})
		//点击关闭按钮关闭
		$(".logoinPw i").click(function(){
			$('.logoinPw').addClass('none');
		})
		//点击修改
		$('.changeBtn').click(function(){
			var $table = $(this).parents('li').find(".logoinPw");
			$table.parents('li').siblings().find(".logoinPw").addClass('none');
			if ($table.hasClass('none')) {
				$table.removeClass('none');
			} else {
				// 判断是否点击过修改按钮
				if (!$('.changePw').hasClass('none')) {
					$table.addClass('none');
				}
			}
			$table.find('.changePw').removeClass('none').siblings().addClass('none');
			$('.findPw').addClass('none');
		});
		//点击找回
		$('.findBtn').click(function(){
			var $table = $(this).parents('li').find(".logoinPw");
			$table.parents('li').siblings().find(".logoinPw").addClass('none');
			if ($table.hasClass('none')) {
				$table.removeClass('none');
			} else {
				// 判断是否点击过找回按钮
				if (!$('.findPw').hasClass('none')) {
					$table.addClass('none');
				}
			}
			$table.find('.changePw').addClass('none');
			$('.findPw').removeClass('none').siblings().addClass('none');
		});
		//安全中心的点击切换效果结束

	}

	exports.baseSide = function(){

		//底部鼠标放上微信显示隐藏
		$(".weChat").hover(function(){
			$(this).children("img").attr('src','/images/weixin_hover.png');
			$(this).children(".weChatDiv").show();
		},function(){
			$(this).children("img").attr('src','/images/weixin.png');
			$(this).children(".weChatDiv").hide();
		})
		//底部鼠标放上微博显示隐藏
		$(".weibo").hover(function(){
			$(this).children("img").attr('src','/images/weibo_hover.png');
		},function(){
			$(this).children("img").attr('src','/images/weibo.png');
		})


		window.onunload = function(){
			window.scrollTo(0,0);
		};

		//返回顶部
		if($(".topto").length>0){
			 $(window).scroll(function(){
				 if($(window).scrollTop()>100){
				 	$(".topto").show();
				 }else{
				 	$(".topto").hide();
				 }
			 });
			 $(".topto").click(function(){

				 if(!$("html,body").is(":animated")){
					 $("html,body").animate({scrollTop:0});
				 }
			 });
		}
		//二维码显示与隐藏
		$('.baseerwei').hover(function(){
			$('.imgFixed').show()
		},function(){
			$('.imgFixed').hide()
		})







	}
});
