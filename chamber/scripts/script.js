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


if(number!==0 && daysDifference ===0){
    visits.innerHTML=`Back so soon! Awesome!!!! <br>  Number of visits : ${number}`;
}
else if(number!==0 && daysDifference>=1){
    visits.textContent=`Number of visits :${number}`;
}
else{
    visits.textContent=`Welcome! Let us know if you have any questions.`;
}

number++

localStorage.setItem("numVisits-ls",number);
localStorage.setItem("lastVisit", new Date());





