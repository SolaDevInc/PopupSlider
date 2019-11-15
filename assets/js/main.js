// Put your javascript or jquery here.
// Remember to comment well. Sections, which page it's used on, and what each function does, and in most cases what each line does.

////////////////////
// Gallery-Popup
///////////////////

var $popupGallerySection = '<section class="popup-slider"><button class="close-gallery-popup">X</button><div class="gallery-slider"><button class="btn prev"> < </button><article class="popup-archive"><div class="popup-media"></div></article><article class="popup-figcaption"><div class="popup-gallery-titles figcaption-popup"><span class="photo-date" style="display: block;"></span></div></article><button class="btn next"> > </button></div></section>';

$(".featured-gallery").each(function(){
  $(this).after($popupGallerySection);
});

$(window).on('load scroll', function() {
	var archiveItems = $('.archive-item');
	$(archiveItems).each(function(i) {
		$(this).attr("data-item", ( i + 1 ));
	});
});


$(".archive-item").on('click', function() {	
	$(this).addClass("js-active");
	var $imgDate = $(this).find(".gallery-collection-items").children(".photo-date").html();
	$(".popup-gallery-titles > .photo-date").html($imgDate);
	$(".popup-slider").addClass("js-active");
	$("html, body").addClass("js-noscroll");

	var $imgSrc = $(this).find(".gallery-collection-items").children("img").clone();
	var $videoFrame = $(this).find(".video-iframe").find("iframe").clone();
	if(!$(this).children(".gallery-collection-items").children("div").hasClass("video-iframe")) {
		$(".popup-media").html($imgSrc);
	} else {
		$(".popup-media").html($videoFrame);
	}

	if($(this).prev("li").hasClass("archive-item")) {
		$(".prev").addClass("js-active");
	} else {
		$(".prev").removeClass("js-active");
	}

	if($(this).next("li").hasClass("archive-item")) {
		$(".next").addClass("js-active");
	} else {
		$(".next").removeClass("js-active");
	}
});


$(".prev").on('click', function() {	
	
});

// $(".prev").on('click', function() {	
// 	$(".archive-item.js-active").prev("li").addClass("js-active");
// 	var $archiveimgDate = $(".archive-item.js-active").prev(".archive-item").find(".gallery-collection-items").children(".photo-date").html();
// 	$(".popup-gallery-titles > .photo-date").html($archiveimgDate);

// 	var $archiveImgFrame = $(".archive-item.js-active").prev(".archive-item").find(".gallery-collection-items").children("img").clone();

// 	var $archivevidsFrame = $(this).find(".video-iframe").find("iframe").clone();
// 	if(!$(".archive-item.js-active").prev(".archive-item").children(".gallery-collection-items").children("div").hasClass("video-iframe")) {
// 		$(".popup-media").html($archiveImgFrame);
// 	} else {
// 		$(".popup-media").html($archivevidsFrame);
// 	}

// 	if($(".archive-item.js-active").prev("li").hasClass("archive-item")) {
// 		$(".prev").removeClass("js-active");
// 	} else {
// 		$(".prev").addClass("js-active");
// 	}

// 	$(".archive-item.js-active").removeClass("js-active");

// });

// $(".next").on('click', function() {	
// 	$(".archive-item.js-active").next("li").addClass("js-active");
// 	var $archiveimageDate = $(".archive-item.js-active").next(".archive-item").find(".gallery-collection-items").children(".photo-date").html();
// 	$(".popup-gallery-titles > .photo-date").html($archiveimageDate);

// 	var $archiveImageFrame = $(".archive-item.js-active").next(".archive-item").find(".gallery-collection-items").children("img").clone();

// 	var $archivevideoFrame = $(this).find(".video-iframe").find("iframe").clone();
// 	if(!$(".archive-item.js-active").next(".archive-item").children(".gallery-collection-items").children("div").hasClass("video-iframe")) {
// 		$(".popup-media").html($archiveImageFrame);
// 	} else {
// 		$(".popup-media").html($archivevideoFrame);
// 	}

// 	if($(".archive-item.js-active").next("li").hasClass("archive-item")) {
// 		$(".next").removeClass("js-active");
// 	} else {
// 		$(".next").addClass("js-active");
// 	}

// });

// Close Popup Slider Button
$(".close-gallery-popup").on('click', function() {
  $(".popup-slider").removeClass("js-active");
  $("html, body").removeClass("js-noscroll");
  $(".popup-video-iframe").empty();
  $(".popup-video-iframe").hide();
  $(".popup-gallery-image").hide();
  $(".popup-gallery-image > img").attr("src", '');
  $(".popup-gallery-image > img").attr("srcset", '');
  $(".popup-gallery-titles > .photo-date").empty();
});
