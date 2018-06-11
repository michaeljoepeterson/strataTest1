
function displayModal(event){

	const imageNumber = $(this).attr("data-id");

	$("#myModal").css("display", "block");
	$("#img01").attr("src", modalData1[imageNumber].source);
	$("#captionText1").text(modalData1[imageNumber].contentText)

}

function closeModal(){
	$("#myModal").click(function(event){
		$(this).css("display","none");
		//console.log("clicked");
	});
}
	
function intializePage(){
	$('.galleryImage').click(displayModal);
	$('.carousel-img').click(displayModal);
	closeModal();
}

$(intializePage);