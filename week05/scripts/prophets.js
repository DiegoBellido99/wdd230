const url =" https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");

async function getProphetData (){
    const response =await fetch(url);

    const data=await response.json();

    /*console.table(data.prophets);*/
    DisplayProphet(data.prophets)
}

getProphetData();

const DisplayProphet =(prophets)=>{
    prophets.forEach(prophet => {
        const card= document.createElement("section");
        
        const fullname=document.createElement("h2");
        const date=document.createElement("p");
        const portrait =document.createElement("img");
        
        fullname.innerHTML=`${prophet.name} ${prophet.lastname}`;

        date.innerHTML=`Date of birthday : ${prophet.birthdate}`

        portrait.setAttribute("src",prophet.imageurl);
        portrait.setAttribute("alt",`Portrait of ${prophet.name}`);
        portrait.setAttribute("loading","lazy");
        portrait.setAttribute("width","300");
        portrait.setAttribute("height","450");

        card.appendChild(fullname);
        card.appendChild(date);
        card.appendChild(portrait);

        cards.appendChild(card);

    });

}

DisplayProphet();