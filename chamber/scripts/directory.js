
let firstP = document.querySelector('#date');

const currentDate= new Date();

const currentYear = currentDate.getFullYear();

firstP.innerHTML =`@${currentYear} - Diego Bellido / Peru / WDD-230 Project`;




const gridButton=document.querySelector("#grid-button");

const listButton=document.querySelector("#list-button");

const article = document.querySelector("article");

gridButton.addEventListener("click",()=>{

    article.classList.add("grid");
    article.classList.remove("list");
})
listButton.addEventListener("click",()=>{

    article.classList.add("list");
    article.classList.remove("grid");
})




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

const url = "https://diegobellido99.github.io/wdd230/chamber/data/members.json";

async function getLinks(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data= await response.json();
            console.log(data);
            displayMembers(data.members);
        }
        else{
            throw Error(await response.text());
        }
    }catch(error){
        console.log(error);
    }

}

function displayMembers(members){
    const article= document.querySelector(".grid");
    members.forEach(member => {

        const section=document.createElement("section");

        const h1 =document.createElement("h1");
        h1.textContent=member.name;

        const h2 =document.createElement("h2");
        h2.textContent = member.address;

        const phone =document.createElement("p");
        phone.textContent = member.phone;

        const web = document.createElement("a");
        web.textContent = member.website;

        const img = document.createElement("img");
        img.src = member.image;

        const level =document.createElement("p");
        level.textContent = member.membership_level;

        const description =document.createElement("p");
        description.textContent = member.description;


        section.appendChild(h1);
        section.appendChild(h2);
        section.appendChild(phone);
        section.appendChild(web);
        section.appendChild(img);
        section.appendChild(level);
        section.appendChild(description);

        article.appendChild(section);
    });
}

getLinks();

