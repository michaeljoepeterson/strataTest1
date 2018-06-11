$(document).ready(function() {

	function displayModal(event){

	const imageNumber = $(this).attr("data-id");

	$("#myModal").css("display", "block");
	//modal.style.display = "block";
	$("#img01").attr("src", modalData1[imageNumber].source);
	$("#captionText1").text(modalData1[imageNumber].contentText)

	}


	$('.galleryImage').click(displayModal);
	$('.carousel-img').click(displayModal);
	//cick anywhere to close
	/*
	modal.addEventListener('click',function(){
	this.style.display="none";
	})
	*/
	
	$("#myModal").click(function(event){
		$(this).css("display","none");
		//console.log("clicked");
	});

});
