$().ready(function(e) {
	/**********************************
	 * head 头部
	 **********************************/
	$('head').append('<link href="css/kefu.css" type="text/css" rel="stylesheet">')
    $("#header").html(
		'<div class="header-first">'+
        	'<div class="container" style="height:80px; line-height:76px; position:relative;">'+
               ' <div class="row">'+
                	'<div class="nav-top" id="nav_top">'+
                    	'<span class="nav-btn">导航</span>'+
                       ' <ul class="toolbar">'+
                            '<li><a href="javascript:void(0)" id="homePage">首页</a></li>'+
                            '<li><a href="http://www.lanyinbin.cn" id="blogPage">个人博客</a></li>'+
                            '<li><a href="javascript:void(0)" id="readPage">好文推荐</a></li+>'+
                            '<li><a href="javascript:void(0)" id="projectDesignerPage">毕业设计</a></li>'+
                            '<li><a href="javascript:void(0)" id="toolsPage">常用工具</a></li>'+
                            '<li><a href="javascript:void(0)" id="openSourcesPage">开源项目</a></li>'+
                        '</ul>'+
                   '</div>'+
                   '<div class="logo img-first mg-xs-t12"><img src="/resources/images/logo.jpg" alt="官网logo" title="官网logo"></div>'+
               '</div>'+
            '</div>'+
        '</div>'
		)

	/**********************************
	 * 尾部
	 **********************************/
    $("#footer").html(
		'<div class="go_top" id="go_top" style="display: none;"></div>'+
        '<div class="footer-first font12 footer-flow">'+
        	'Copyright © 2015-2018 yinbin.lan 版权所有'+
        '</div>'
	)

	/**********************************
	 * 页面跳转后给导航栏添加激活样式
	 **********************************/
	var nc=pageName();
	$('.toolbar li').find("a[href='"+nc+"']").addClass("active");
	/**********************************
	 * 客服qq
	 **********************************/
	$("body").append(
	         '<div id="floatTools" class="rides-cs">'+
            '<div class="floatL"><div class="visible-xs"><span class="color-fff aFloatTools_Show">客服Q展开</span><span class="color-fff aFloatTools_Hide" style="display:none">客服Q收起</span></div>'+
            '<a style="display:block" class="btnOpen hidden-xs aFloatTools_Show" title="查看在线客服" style="top:20px" href="javascript:void(0);">展开</a>'+
            '<a style="display:none" class="btnCtn hidden-xs aFloatTools_Hide"  title="关闭在线客服" style="top:20px" href="javascript:void(0);">收缩</a>'+
            '</div>'+
            '<div id="divFloatToolsView" class="floatR divFloatToolsView" style="display: none;width: 140px;">'+
            '<div class="cn">'+
              '<h3 class="titZx" style="margin:0;">在线客服</h3>'+
              '<ul>'+
                '<li><span>联系我</span> <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=88888888&site=qq&menu=yes"><img border="0" src="images/online.png" alt="点击这里给我发消息" title="点击这里给我发消息"/></a> </li>'+
                '<li style="border:none;"><span>邮箱：lb1306985453@sohu.com</span> </li>'+
             ' </ul>'+
            '</div>'+
            '</div>'+
        '</div>')

	$(function(){

		$(".aFloatTools_Show").click(function(){
			$('.divFloatToolsView').animate({width:'show',opacity:'show'},100,function(){$('.divFloatToolsView').show();});
			$('.aFloatTools_Show').hide();
			$('.aFloatTools_Hide').show();				
		});

		$(".aFloatTools_Hide").click(function(){
			$('.divFloatToolsView').animate({width:'hide', opacity:'hide'},100,function(){$('.divFloatToolsView').hide();});
			$('.aFloatTools_Show').show();
			$('.aFloatTools_Hide').hide();	
		});

		$(".aFloatTools_Hide").click(function(){
			$('.divFloatToolsView').animate({width:'hide', opacity:'hide'},100,function(){$('.divFloatToolsView').hide();});
			$('.aFloatTools_Show').show();
			$('.aFloatTools_Hide').hide();
		});

		$("#openSourcePage").click(function(){
            window.location.href="/mysite/web/openSourcePage";
			return;
		})


	});
	/**********************************
	 * 移动端 首页导航和文档中心-文章导航伸缩功能
	 **********************************/
	var win_w=$(window).width();
	if(win_w<767){
		$("#nav_top ul").css("display","block").hide(); //解决导航第一次点击出现闪屏的现象，可能是因为之前使用了display:none;这个样式，造成初次点击时候，页面同时css和js同时变化，所以有闪屏。
		
		$("#nav_top").on("click",this,function(){
			$("#nav_top ul").slideToggle();
		})
		$("#myScrollspy").on("click",this,function(){
			$("#myScrollspy ul").slideToggle();
		})
	}
	/**********************************
	 * 返回顶部
	 **********************************/
	$(window).scroll(function(){
	    if($(window).scrollTop()>800)
	    $("#go_top").show();  
	    else 
		$("#go_top").hide(); 
	   });

	$("#go_top").click(function(){
		 $('body,html').animate({ scrollTop: 0 }, 500)
	}) 

	$("#testDr a").click(function(){
		$("#testDr a").removeClass("active");
		$(this).addClass("active");
	})

 });
	window.onresize =function(){window.location.reload();}

	//导航栏
	/*跳转添加导航样式 方法1*/
	function pageName()
	{
	 var strUrl=location.href;
	 var arrUrl=strUrl.split("/");
	 var strPage=arrUrl[arrUrl.length-1];
	 return strPage;
	}


