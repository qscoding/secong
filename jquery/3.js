// JavaScript Document
$(document).ready(function(){
	var y=10;
	var x=20;
	$("a.tooltip").mouseover(function(e){
		this.mytitle=this.title;//为了取消自带的提示功能
		this.title="";
		var $div1=$("<div id='tooltip'>"+this.mytitle+"</div>");//id要用单引号
		$("body").append($div1);//如果为p会为每一个都添加一次标题
		//$("#tooltip")
		$("div#tooltip").css({
				"top":(e.pageY+y)+"px",
				"left":(e.pageX+x)+"px"
			}).show("fast");	//当时是忘记用css设置它的位置绝对位置；
		}).mouseout(function(){
			this.title=this.mytitle;
		$("#tooltip").remove();
	}).mousemove(function(e){
		$("div#tooltip").css({
			"top":(e.pageY+y)+"px",
			"left":(e.pageX+x)+"px"
			}).show("fast");
  });
});