

let firstP = document.querySelector('footer p:first-of-type');

const currentDate= new Date();

const currentYear = currentDate.getFullYear();

firstP.innerHTML =`@${currentYear} - Diego Bellido - Peru `;


const lastModified= document.querySelector("#lastModified");

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

lastModified.innerHTML = `Last Modification : ${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;

const ul = document.querySelector("#list");
const button=document.querySelector("#menu");

button.addEventListener("click",()=>{
    ul.classList.toggle("show");
    button.classList.toggle("show");
})

const mode = document.querySelector("#mode");
const main= document.querySelector("main");

mode.addEventListener("click",()=>{
    if(mode.textContent.includes("🕶️")){
        main.style.background = "#000";
        main.style.color="#fff";
        mode.textContent="🔆";
    }
    else{
        main.style.background = "#eee";
        main.style.color="#000";
        mode.textContent="🕶️";

    }

})


const visit = document.querySelector("#visit");

let numberVisits = Number(window.localStorage.getItem("numVisits-ls"))|| 0;

if (numberVisits!==0){
    visit.textContent=`Visit Count ${numberVisits}`;
}
else{
    visit.textContent=`This is your first visit , Welcome!!`;
}

numberVisits++

localStorage.setItem('numVisits-ls',numberVisits);


const weather= document.querySelector("#weather");

const container=document.querySelector("#container-weather");

const p =document.createElement("p");

const url= "https://api.openweathermap.org/data/2.5/weather?lat=-11.91&lon=-77.04&units=imperial&appid=5f5ebe8f821ecc05261398d4caf43542";

async function fetchApi(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        }
        else{
            throw Error(await response.text())
        }
    }
    catch(error){
        console.log(error);
    }
       
}

fetchApi();

function displayWeather(data){

    const icon =`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    
    const img =document.createElement("img");
    img.setAttribute("src",icon);
    p.innerHTML=`${data.main.temp}°F - ${data.weather[0].description}`;
   
    container.appendChild(img);
    container.appendChild(p);
    
}
