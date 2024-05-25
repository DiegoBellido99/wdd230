const baseUrl = "https://diegobellido99.github.io/wdd230/";

const linksUrl ="https://diegobellido99.github.io/wdd230/data/links.json";


async function getLinks(){
    try{
        const response = await fetch(linksUrl);
        if(response.ok){
            const data =  await response.json();
            console.log(data);
            displayLinks(data.weeks);
        }
        else{
            throw Error(await response.text());
        }
        
    }catch(error){
        console.log(error);
    }
}

function displayLinks(weeks){
    const ul =document.querySelector("#activities");
    weeks.forEach(week => {
        const weekli =document.createElement("li");

        weekli.textContent=week.week;
        const contenedor =document.createElement("ul");
        
        week.links.forEach(direcciones=>{
            const li =document.createElement("li");
            const a = document.createElement("a");

            a.href=direcciones.url;
            a.textContent=direcciones.title;

            li.appendChild(a);
            contenedor.appendChild(li);
        })

        ul.appendChild(weekli);
        ul.appendChild(contenedor);
    });
}

getLinks();

