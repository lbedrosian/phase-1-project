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

fetch('http://api.weatherapi.com/v1/current.json?key=4a4e252153aa48d184e233657210811&q=London&aqi=no')
.then(Response=>Response.json())
.then(data=> {
    console.log(data.location)
    document.querySelector("#weatherApi").innerText = data.object
})



//.then(function (Response) {
//    return Response.json();
//})
//.then(function (data) {
//    for(var i=0; i<data.length; i++) {
//        document.getElementById("data").innerHTML +=
//        data[i].id + "=>" + data[i].firstname + " " + data[i].lastname + "<br /";
//    }
//})
//.catch(function (err) {
 //   console.log(err);
//});



//var output = document.getElementById(`output`);
//output.innerHTML = data;