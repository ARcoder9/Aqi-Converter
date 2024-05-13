const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

function check(){
let sv = searchBox.value;
document.querySelector(".value").innerHTML = sv;
let colorDiv = document.getElementById("circle");
let stateUS =  document.getElementById("status");

if(sv === ""){
    alert("Write the AQI value");
}
if(sv>=0 && sv<=50){
    colorDiv.style.backgroundColor = "green";
    stateUS.textContent = "Good";
}
else if(sv>50 && sv<=100){
    colorDiv.style.backgroundColor = "yellow";
    stateUS.textContent = "Moderate"
}
else if(sv>100 && sv<=150){
    colorDiv.style.backgroundColor = "orange";
    stateUS.textContent = "Mild Unhealthy";
}
else if(sv>150 && sv<=200){
    colorDiv.style.backgroundColor = "red";
    stateUS.textContent = "Unhealthy";
}
else if(sv>200 && sv<=300){
    colorDiv.style.backgroundColor = "purple";
    stateUS.textContent = "Very Unhealthy";
}
else if(sv>300){
    colorDiv.style.backgroundColor = "maroon";
    stateUS.textContent = "Hazardous";
}
document.getElementById("aqi").style.display = "block";

}

searchBtn.addEventListener("click" , ()=>{
    check()
})