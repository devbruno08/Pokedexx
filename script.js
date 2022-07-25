let page = 0;

async function getCharacters(page){
let url = `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=100`;

const resp = await fetch(url);

    const data = await resp.json();

    data.results.forEach(async function(item){
        const respItem = await fetch(item.url);
    
        const dataItem = await respItem.json();

        // console.log(dataItem);

        //console.log(dataItem)
    
        const respSpecies = await fetch(dataItem.species.url)
    
        const dataSpecies = await respSpecies.json();
        
        //console.log(dataSpecies);

        let type1 = dataItem.types[0].type.name
        let type2 = ""

        try{
            type2 = dataItem.types[1].type.name
            
        }catch(a){
            type2 = ""
        }
        
        const languages = dataSpecies.flavor_text_entries;
        // console.log(languages[0].language.name)

        let description = "";

        for(let i = 0; i <= 150; i++){
            if(languages[i].language.name == "en"){
                description = languages[i].flavor_text
                break;
            };
        };

        const descriptionPoke = description.replace("", "").replace("POKéMON", "Pokémon").replace("POKéMON", "Pokémon").replace("POKéMON", "Pokémon");



        // console.log(tamanho);

        function colorChange(a){
            if(a.toLowerCase() == "water"){
                return `<a class="type" style="background-color:blue; color:white">${a}</a>`;
            } else if(a.toLowerCase() == "bug"){
                return `<a class="type" style="background-color:green; color:white">${a}</a>`;
            } else if(a.toLowerCase() == "fairy"){
                return `<a class="type" style="background-color:magenta; color:white">${a}</a>`;
            }else if(a.toLowerCase() == "fire"){
                return `<a class="type" style="background-color:orange; color:white">${a}</a>`;    
            }else if(a.toLowerCase() == "ghost"){
                return `<a class="type" style="background-color: slategray; color:white">${a}</a>`;
            }else if(a.toLowerCase() == "ground"){
            return `<a class="type" style="background-color:brown; color:white">${a}</a>`;
            }else if(a.toLowerCase() == "normal"){
            return `<a class="type" style="background-color:gray; color:white">${a}</a>`;
            }else if(a.toLowerCase() == "psychic"){
                return `<a class="type" style="background-color:fuchsia; color:white">${a}</a>`;
            }else if(a.toLowerCase() == "steel"){
                return `<a class="type" style="background-color:aqua; color:white">${a}</a>`;
            }else if(a.toLowerCase() == "dark"){
                return `<a class="type" style="background-color:black; color: white">${a}</a>`;
            }else if(a.toLowerCase() == "electric"){
                return `<a class="type" style="background-color:yellow; color:white">${a}</a>`;
            }else if(a.toLowerCase() == "fighting"){
                return `<a class="type" style="background-color:goldenrod; color:white">${a}</a>`;
            }else if(a.toLowerCase() == "flying"){
                return `<a class="type" style="background-color:royalblue; color:white">${a}</a>`;
            }else if(a.toLowerCase() == "grass"){
                return `<a class="type" style="background-color:seagreen; color:white">${a}</a>`;
            }else if(a.toLowerCase() == "ice"){
                return `<a class="type" style="background-color:cornflowerblue; color: white">${a}</a>`;
            }else if(a.toLowerCase() == "poison"){
                return `<a class="type" style="background-color:indigo; color:white">${a}</a>`;
            }else if(a.toLowerCase() == "rock"){
                return `<a class="type" style="background-color:chocolate; color:white">${a}</a>`;
            }else if(a.toLowerCase() == "dragon"){
                return `<a class="type" style="background-color:midnightblue; color:white">${a}</a>`;
            };

        };

        document.querySelector("#character-list").insertAdjacentHTML("beforeend", `

        <div class="poke">
        <figure class="pokeBall" onclick="modalCreate()">
            <img class="pokeImg" src="./assets/image/pngwing.com.png">
        </figure>
            <h2 class="name" onclick="modalCreate()"> #${dataItem.id} ${dataItem.name}</h2>
        

        <section class="modal">
              <div class="modalCard">
                    <figure>
                        <img class="image" src="${dataItem.sprites.other["official-artwork"].front_default}" alt="Pokemons">
                    </figure> 
                    <section class="inf">
                        <h2 class "pokeName"> ${dataItem.name}</h2>
                        <p class="id">ID: #${dataItem.id}</p>
                        ${colorChange(type1)} ${colorChange(type2)}
                        <p class="description"> ${descriptionPoke}</p> 
                        <button onclick="modalClose()" class="btn">x</button>
                    </section>
            </div>
        </section>
        </div>
        `);
    });
};

getCharacters();
// openModal();

function modalCreate(){

    const getModal = document.querySelectorAll('.pokeBall')
    
    for(let i of getModal){
    i.addEventListener("click", function(){
        i.parentElement.querySelector(".modal").style.display = "block"
        i.parentElement.querySelector(".modal").style.position = "fixed"
    });
    };

};   


function modalClose(){
const getBtn = document.querySelectorAll('.btn')

for(let n of getBtn){
n.addEventListener("click", function(){
    n.parentElement.parentElement.parentElement.style.position = "relative"
    n.parentElement.parentElement.style.display = "none"
    
});
};


};   

function viewMore(){
    page+=100;
    getCharacters(page);
    console.log(page);

}

viewMore();












