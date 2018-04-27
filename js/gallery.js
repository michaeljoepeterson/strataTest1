$(document).ready(function() {
	/*
	var modalData = {images:[
	{
		source: "images/photo1.jpg",
		contentText: "Image 1"
	},
	{
		source: "images/photo2.jpg",
		contentText: "Image 2"
	},
	{
		source: "images/photo3.jpg",
		contentText: "Image 3"
	},
	{
		source: "images/design1.jpg",
		contentText: "design 1"		
	},
	{
		source: "images/design2.jpg",
		contentText: "design 2"		
	},
	{
		source: "images/design3.jpg",
		contentText: "design 3"		
	}
	

	]};
	*/
	var modalData1 = [
	{
		source: "images/photo1.jpg",
		contentText: "Image 1"
	},
	{
		source: "images/photo2.jpg",
		contentText: "Image 2"
	},
	{
		source: "images/photo3.jpg",
		contentText: "Image 3"
	},
	{
		source: "images/design1.jpg",
		contentText: "design 1"		
	},
	{
		source: "images/design2.jpg",
		contentText: "design 2"		
	},
	{
		source: "images/design3.jpg",
		contentText: "design 3"		
	}
	

	];
	function displayModal(event){

	var imageNumber = $(this).attr("data-id");

	//var modal = document.getElementById('myModal');
	var modal = $("#myModal")[0];
	//var img = document.getElementsByClassName('galleryImage')[0];



	//var modalImg = document.getElementById('img01');
	let modalImg = $("#img01")[0];
	//var captionText = document.getElementById('captionText1');
	//console.log(modalData.images)

	modal.style.display = "block";
	modalImg.src = modalData1[imageNumber].source;
	//uncomment to write things about images
	captionText1.innerHTML = modalData1[imageNumber].contentText;
	}


	//var span = document.getElementsByClassName('close')[0];
	let span = $(".close")[0];
	//var modal = document.getElementById('myModal');
	let modal = $("#myModal")[0];
	span.onclick = function() { 
	    modal.style.display = "none";
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