var wallpaper;
$(".DLimg").click(function (event) {
	wallpaper = $(this).parent().find("img").attr("src");
	$("#gameModal").css("visibility", "hidden");
	$("#wallpaperModal").attr("style", "visibility:show; padding-top: 73px; padding-bottom: 54px;");
	
	$("#tobedownloaded").attr("src", wallpaper);
});


//on load, the z-index of the image will be below the overlay. the confirm dialog will bring the image up to be available to a contextmenu in a taphold event 
var toDownload = false;
$("#wallpaperModal").click(function () {
	toDownload = confirm("Would you like to download this image?");
	if(toDownload){
		alert("Please tap and hold to save the wallpaper.");
		var imageZshift = 'position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:1;'
		$("#tobedownloaded").attr("style", imageZshift);
			$.ajax({
		type: "post"
		, url: "userPTupdate.php"
		, data: "pointIncrement=" + 1
		, success: function (data) {
			console.log(data);
		}
	});
	}
});

