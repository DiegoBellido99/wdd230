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