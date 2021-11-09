// My JSON File
fetch('http://api.weatherapi.com/v1/current.json?key=4a4e252153aa48d184e233657210811&q=London&aqi=no')
.then(function (Response) {
    return Response.json();
})
.then(function (data) {
    for(var i=0; i<data.length; i++) {
        document.getElementById("data").innerHTML +=
        data[i].id + "=>" + data[i].firstname + " " + data[i].lastname + "<br /";
    }
})
.catch(function (err) {
    console.log(err);
});

//.then(Response=>Response.json())
//.then(data=>console.log(data))

//var output = document.getElementById(`output`);
//output.innerHTML = data;