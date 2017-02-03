var wallpaper;
$(".DLimg").click(function (event) {
	wallpaper = $(this).parent().find("img").attr("src");
	//	$("#downloadBanner").find("img").attr("src", wallpaper);
	//	$("#wallpaperModal").find("img").attr("src", wallpaper);
	$("#gameModal").css("visibility", "hidden");
	
//	$("main.modal-overlay").attr("style", "visibility:show; padding-top: 73px; padding-bottom: 54px; background-image:url(" + wallpaper + "); background-size: 100% 100%");
	$("#wallpaperModal").attr("style", "visibility:show; padding-top: 73px; padding-bottom: 54px;");
	
	$("#tobedownloaded").attr("src", wallpaper);
});
var toDownload = false;
$("#wallpaperModal").click(function () {
	toDownload = confirm("Would you like to download this image?");
	if(toDownload){
			$.ajax({
		type: "post"
		, url: "userPTupdate.php"
		, data: "pointIncrement=" + 1
		, success: function (data) {
			console.log(data);
		}
	});
	}
	//to download this? 
	//	console.log('hi');	
	//logic for adding point to user's score 
	//not connected to a working db, but basic logic is here as an outline of how it could work

});

$("#wallpaperModal").on("taphold", function () {
		toDownload = confirm("Would you like to download this image?");
	if(toDownload){
	$.ajax({
		type: "post"
		, url: "userPTupdate.php"
		, data: "pointIncrement=" + 1
		, success: function (data) {
			console.log(data);
		}
	});
	
	}
	//to download this? 
	//	console.log('hi');	
	//logic for adding point to user's score 
	//not connected to a working db, but basic logic is here as an outline of how it could work
});