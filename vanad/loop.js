$(document).ready(function(){
	
	$("li").first.addClass("active");
	
	$("#next").click(function(){
		var hetkelKlass = $(".active"); 
		$("li").removeClass("active");
		if (hetkelKlass.is($(":last-child")){ 
			$("li").first().addClass("active");
		} else {
			hetkelKlass.next("li").addClass("active");
		});
	
	$("#prev").click(function () {
		var hetkelKlass = $(".active");
		$("li").removeClass(".active");
		if (hetkelKlass.is(":first-child")) {
			$("li").last().addClass("active");
		} else {
			hetkelKlass.prev("li").addClass("active"); 
       	}
   	})
});