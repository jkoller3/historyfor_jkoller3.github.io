var incrementScoreVar = 0;
var wallpaper;
$(".DLimg").click(function (event) {
	wallpaper = $(this).parent().find("img").attr("src");
	$("#gameModal").css("visibility", "hidden"); //hide modal to show new modal
	$("#wallpaperModal").attr("style", "visibility:show; padding-top: 73px; padding-bottom: 54px;");
	$("#tobedownloaded").attr("src", wallpaper);
	incrementScoreVar++; //<- just for readibility.
	alert("Tap and hold on the image to download the wallpaper!");
});


//on load, the z-index of the image will be below the overlay. the confirm dialog will bring the image up to be available to a contextmenu in a taphold event 

$("#tobedownloaded").click(function (e) {
			var imageZshift = 'position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:1;';
			$("#tobedownloaded").attr("style", imageZshift);
			$("#closeIMG").attr("style", "z-index:1;");

//				$.ajax({
//			type: "post"
//			, url: "userPTupdate.php"
//			, data: "pointIncrement=" + 1
//			, success: function (data) {
//				console.log(data);
//			}
//		});
//		}
		
});


$(".modal-close").click(function(){
	window.close();
});

var carouselpage; 
$("#closeIMG").click(function(){
	$("#wallpaperModal").css("visibility", "hidden");
	$("#gameModal").attr("style", "visibility:show; padding-top: 73px; padding-bottom: 54px;");
});

$(document).ready(function(){
	
});
	
}