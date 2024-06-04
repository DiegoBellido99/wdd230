let firstP = document.querySelector('#date');

const currentDate= new Date();

const currentYear = currentDate.getFullYear();

firstP.innerHTML =`@${currentYear} - Diego Bellido / Peru / WDD-230 Project`;




const lastModified= document.querySelector("#modification");

const change = document.lastModified;

let dateChange = new Date(change);

let day = dateChange.getDate();
let month =dateChange.getMonth() + 1;
let year = dateChange.getFullYear();
let hours = dateChange.getHours();
let minutes =dateChange.getMinutes();
let seconds = dateChange.getSeconds();

if (day < 10){
    day = '0' + day ;
}

if(month < 10){

    month = '0'+ month;
}

if(hours < 10){

    hours = '0'+ hours;
}

if (minutes < 10){

    minutes= '0' + minutes;
}

if (seconds < 10){

    seconds = '0' + seconds;
}

lastModified.innerHTML = `<strong>Last Modification : ${day}/${month}/${year} - ${hours}:${minutes}:${seconds}</strong>`;


const button = document.querySelector("#button");
const menu = document.querySelector("#list");

button.addEventListener("click",()=>{
    menu.classList.toggle("show");
    button.classList.toggle("show");
})


const visits= document.querySelector("#visits");

let number=Number(window.localStorage.getItem("numVisits-ls"))||0;

var lastVisit=localStorage.getItem("lastVisit");
var date = new Date();

var difference= date - new Date(lastVisit);
var daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

/*
if(number!==0 && daysDifference ===0){
    visits.innerHTML=`Back so soon! Awesome!!!! <br>  Number of visits : ${number}`;
}
else if(number!==0 && daysDifference>=1){
    visits.innerHTML=`Number of visits :${number}`;
}
else{
    visits.textContent=`Welcome! Let us know if you have any questions.`;
}

number++

localStorage.setItem("numVisits-ls",number);
localStorage.setItem("lastVisit", new Date());
*/
document.addEventListener("DOMContentLoaded", function() {
    const eventDiv = document.getElementById("event");
    const today = new Date().getDay(); 

    if (today === 1 || today === 2 || today === 3) {
        eventDiv.style.display = "block"; 
    }
});

const close=document.addEventListener("click",()=>{
    const event=document.querySelector("#event");
    event.style.display="none";
})




const url ="https://api.openweathermap.org/data/2.5/weather?lat=-12.04&lon=-77.03&&units=imperial&appid=5f5ebe8f821ecc05261398d4caf43542"

async function getWeather(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        }else{
            throw Error(await response.text());
        }
    }catch(error){
        console.log(error);

    }
}

function displayWeather(data){

    const city =document.querySelector(".city");
    const temperature=document.querySelector(".temperature");
    const humidity =document.querySelector(".humidity");
    const image=document.querySelector("#weather-img");

    const icon =`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    
    city.textContent = data.name;
    temperature.innerHTML=`Temperature : ${data.main.temp} F°`;
    humidity.innerHTML=`Humidity : ${data.main.humidity}%`;

    image.setAttribute("src",icon);

}


getWeather();



const urlForecast = "http://api.openweathermap.org/data/2.5/forecast?lat=-12.04&lon=-77.03&units=imperial&appid=5f5ebe8f821ecc05261398d4caf43542";

async function getForecast() {
    try {
        const response1 = await fetch(urlForecast);
        if (response1.ok) {
            const data1 = await response1.json();
            console.log(data1);
            displayForecast(data1)
        } else {
            throw Error(await response1.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data){
    
    const forecast=document.querySelector("#forecast");

    const tomorrow=document.createElement("div");

    const day=document.createElement("h3");
    const tempTomorrow=document.createElement("p");
    const descriptionTomorrow=document.createElement("p");
    const iconTomorrow=document.createElement("img");
    
    day.textContent=`Tomorrow`;
    tempTomorrow.innerHTML=data.list[3].main.temp;
    descriptionTomorrow.innerHTML=data.list[3].weather[0].description;
    const icon1 =`https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png`;
    iconTomorrow.setAttribute("src",icon1);
 
    tomorrow.appendChild(day);
    tomorrow.appendChild(tempTomorrow);
    tomorrow.appendChild(descriptionTomorrow);
    tomorrow.appendChild(iconTomorrow);



    const tomorrow2=document.createElement("div");
    const day2=document.createElement("h3");
    const tempTomorrow2=document.createElement("p");
    const descriptionTomorrow2=document.createElement("p");
    const iconTomorrow2=document.createElement("img");

    day2.textContent=`Day after tomorrow`
    tempTomorrow2.innerHTML=data.list[10].main.temp;
    descriptionTomorrow2.innerHTML=data.list[10].weather[0].description;
    const icon2 =`https://openweathermap.org/img/wn/${data.list[10].weather[0].icon}.png`;
    iconTomorrow2.setAttribute("src",icon2);

    tomorrow2.appendChild(day2);
    tomorrow2.appendChild(tempTomorrow2);
    tomorrow2.appendChild(descriptionTomorrow2);
    tomorrow2.appendChild(iconTomorrow2);

    forecast.appendChild(tomorrow);
    forecast.appendChild(tomorrow2);

}

getForecast();
