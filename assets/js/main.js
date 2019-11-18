// Put your javascript or jquery here.
// Remember to comment well. Sections, which page it's used on, and what each function does, and in most cases what each line does.

////////////////////
// Gallery-Popup
///////////////////

var $popupGallerySection = '<section class="popup-slider"><button class="close-gallery-popup">X</button><div class="gallery-slider"><button class="btn prev"> < </button><article class="popup-archive"><div class="popup-media"></div></article><article class="popup-figcaption"><div class="popup-gallery-titles figcaption-popup"><span class="photo-date" style="display: block;"></span></div></article><button class="btn next"> > </button></div></section>';

$(".featured-gallery").each(function(){
  $(this).after($popupGallerySection);
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

 
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Next/previous controls
$(".next")
	.click(function() {
		// plusSlides();
		plusSlides(1);
		slideContent();
	});

$(".prev")
	.click(function() {
		// plusSlides();
		plusSlides(-1);
		slideContent();
	});

// Show slide with index n
function showSlides(n) {
	var i;
  var slides = document.getElementsByClassName("archive-item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
		 slides[i].className = slides[i].className.replace(" js-active", "");
	}
	
	slides[slideIndex-1].className += " js-active";

}

// Take All the the content from the current slide

function slideContent() {
	var $archiveimageDate = $(".archive-item.js-active").find(".gallery-collection-items").children(".photo-date").html();
	$(".popup-gallery-titles > .photo-date").html($archiveimageDate);

	var $archiveImageFrame = $(".archive-item.js-active").find(".gallery-collection-items").children("img").clone();

	var $archivevideoFrame = $(".archive-item.js-active").find(".video-iframe").find("iframe").clone();
	if(!$(".archive-item.js-active").find(".gallery-collection-items").children("div").hasClass("video-iframe")) {
		$(".popup-media").html($archiveImageFrame);
	} else {
		$(".popup-media").html($archivevideoFrame);
	}

	if($(".archive-item.js-active").prev("li").hasClass("archive-item")) {
		$(".prev").addClass("js-active");
	} else {
		$(".prev").removeClass("js-active");
	}

	if($(".archive-item.js-active").next("li").hasClass("archive-item")) {
		$(".next").addClass("js-active");
	} else {
		$(".next").removeClass("js-active");
	}
}

// Close Popup Slider Button
$(".close-gallery-popup").on('click', function() {
  $(".popup-slider").removeClass("js-active");
  $("html, body").removeClass("js-noscroll");
	$(".popup-media").empty();
	$(".archive-item").removeClass("js-active");
  $(".popup-gallery-titles > .photo-date").empty();
	$(".next").removeClass("js-active");
	$(".prev").removeClass("js-active");
});
