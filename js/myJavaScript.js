
// SlideShow
let i = 0; 			
let images = [];	
let time = 2500;	 

images[0] = "images/IMG_0998.jpeg";
images[1] = "images/IMG_0999.jpeg";
images[2] = "images/IMG_1006.jpeg";
images[3] = "images/IMG_1013.jpeg";
images[4] = "images/IMG_1016.jpeg";
images[5] = "images/IMG_1020.jpeg";
images[6] = "images/IMG_1024.jpeg";

function changeImg(){
	document.slide.src = images[i];
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
	setTimeout("changeImg()", time);
}

function loadData() {
    changeImg();
    // Weather API
    fetch('http://api.weatherapi.com/v1/current.json?key=4a4e252153aa48d184e233657210811&q=26260&aqi=no')
    .then(Response=>Response.json())
    .then(data=> {
        console.log(data.location)
        document.querySelector("#weatherApi1").innerText = data.location.name
        document.querySelector("#weatherApi2").innerText = data.location.region
        document.querySelector("#weatherApi3").innerText = data.location.country
        document.querySelector("#weatherApi4").innerText = data.location.localtime
        document.querySelector("#weatherApi5").innerText = data.current.temp_f
        document.querySelector("#weatherApi6").innerText = data.current.wind_mph
        document.querySelector("#weatherApi7").innerText = data.current.humidity
        document.querySelector("#weatherApi8").innerText = data.current.cloud
        document.querySelector("#weatherApi9").innerText = data.current.feelslike_f
    })
}


window.onload=loadData;

let clicks = 0;

function addLike() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

function myFunction() {
    let node = document.getElementById("clickMe")
    node.innerHTML = "If You are reading this, then I thank you for taking the time to read all that I had to say, Stay well and Safe.";
}

