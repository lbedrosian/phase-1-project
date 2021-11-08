var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 2500;	// Time Between Switch 
// Image List
images[0] = "images/IMG_0998.jpeg";
images[1] = "images/IMG_0999.jpeg";
images[2] = "images/IMG_1006.jpeg";
images[3] = "images/IMG_1013.jpeg";
images[4] = "images/IMG_1016.jpeg";
images[5] = "images/IMG_1020.jpeg";
images[6] = "images/IMG_1024.jpeg";
// Change Image
function changeImg(){
	document.slide.src = images[i];
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}
	setTimeout("changeImg()", time);
}
window.onload=changeImg;

var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})