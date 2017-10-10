

$(function(){

	$(".tab .anniu_box .anniu").click(function(){
		$(".tab .content_box ul").hide();

		var num = $(".tab .anniu_box .anniu").index($(this))
		$(".tab .content_box ul").eq(num).show();

		$(".tab .anniu_box .anniu").css({
			"background":"rgba(0,0,0,0)"
		})
		$(this).css({
			"background":"#4eb2d6"
		})
	})
		$(".backtop").backTop();
	//$(".backtop") 返回按钮父容器  
})
