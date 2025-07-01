function upDate(previewPic){
  	let backgroundUrl = previewPic.src;
   	document.getElementById("image").style.backgroundImage = "url('" + backgroundUrl + "')";
   	document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo(){
	document.getElementById("image").style.backgroundImage = "url('')";
   	document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
