
function displayModal(event){
	event.stopImmediatePropagation();
	const imageNumber = $(this).attr("data-id");

	$("#myModal").css("display", "block");
	$("#img01").attr("src", modalData1[imageNumber].source);
	$("#captionText1").text(modalData1[imageNumber].contentText);

}

function closeModal(){
	$("#myModal").click(function(event){
		$(this).css("display","none");
		//console.log("clicked");
	});
}

function generateCarouselString(dataObject,index){
	const compileString = `<div class="carousel-item">
      <img class="d-block w-100 carousel-img" src="${dataObject.source}" alt="First ${index}" data-id="${index}">
    </div>`;
    return compileString;
}

function renderCarousel(dataArray){
	for (i = 0; i < dataArray.length; i++){
		const carouselString = generateCarouselString(dataArray[i],i);

		$(".jsCarouselInner").append(carouselString);	
		if (i === 0){
			$(".carousel-item").addClass("active");
		}	
	}
}

function generateImageListString(dataObject,index){
	const compileString = `<div class="col-xs-12 col-md-4">
		 <img src="${dataObject.source}" class="galleryImage" alt="Image ${index}" data-id="${index}">
	</div>`;
	return compileString;
}

function renderImageList(dataArray){
	for(i = 0; i < dataArray.length; i++){
		const imageListString = generateImageListString(dataArray[i],i)
		$(".jsImageList").append(imageListString);
	}
}

function picturesClicked(){
	$("#album1Tab").click(function(){
		$(".jsNavTabs").each(function(){
			$(this).find("li").removeClass("active");
		})
		event.stopImmediatePropagation();
		$(this).addClass("active");
	});
	//then render new content
}

function designClicked(){
	$("#album2Tab").click(function(){
		$(".jsNavTabs").each(function(){
			$(this).find("li").removeClass("active");
		})
		event.stopImmediatePropagation();
		$(this).addClass("active");
	});
	//then render new content
}
	
function intializePage(){
	$('.jsImageList').on("click",".galleryImage",(displayModal));
	$('.jsCarouselInner').on("click", ".carousel-img",(displayModal));
	closeModal();
	//need to write ftns to create the insides of carousel/in grid view
	//first item in carousel needs active class
	renderCarousel(modalData1);
	renderImageList(modalData1);
	designClicked();
	picturesClicked();
	
}

$(intializePage);