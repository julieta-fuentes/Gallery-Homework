function upDate(previewPic){
  	let backgroundUrl = previewPic.src;
   	document.getElementById("image").style.backgroundImage = "url('" + backgroundUrl + "')";
   	document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo(){
	document.getElementById("image").style.backgroundImage = "url('')";
   	document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

function addTabfocus(){
	console.log("It works!");
	images_array = document.querySelectorAll("img");
	for (let index = 0; index < images_array.length; index++) {
		images_array[index].setAttribute("tabindex","0")
	}
}