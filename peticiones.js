
const { get } = require('request');
const request=require('request');
let query=[]
let myDiv;
function getPokemonById(id){
    request(`https://pokeapi.co/api/v2/pokemon/${id}`, function(error, response, body){
        //console.log('body:', body);

      
    


        var pokemon=JSON.parse(body);
        myDiv = document.createElement("div");
        var h1=document.createElement("h1")
        var h2=document.createElement("h2")
        var h3=document.createElement("h3")
        var h4=document.createElement("h4")
//var PokePersonaje=pokemon.name
        h2.innerText=pokemon.name
        h1.innerText="N° "+pokemon.id
        h4.innerText="Habilidad: "+pokemon.abilities[0].ability.name
        h3.innerText="Tipo: " + pokemon.types[0].type.name
        var header=document.getElementById("header")
        getPokePic(pokemon.id);
        myDiv.appendChild(h1);
        myDiv.appendChild(h2);
        myDiv.appendChild(h3);
        myDiv.appendChild(h4);
        myDiv.classList.add("cards");
        myDiv.setAttribute("id", `${pokemon.id}`)
        header.appendChild(myDiv);
     
   
       
        
        //header.appendChild(h4);
      
      //  console.log(pokemon.id);
        //console.log(pokemon.name);

        const searchBar=document.getElementById('searchBar')
        searchBar.addEventListener('keyup',(e)=>{
            // if (e.key === 13) {
              document.getElementById(`${pokemon.id}`).style.display = 'none'
            // }
           const search=e.target.value;
              if (pokemon.name.includes(search) || search==pokemon.id){
                //console.log(query);
              //  console.log(pokemon.name);
                //console.log(pokemon.id);
                // var i=0;
                // while (i<160){
                //     i++
                //     myDiv.setAttribute("style", "display:none")
                // }
               
               
                
                
                
              
                document.getElementById(`${pokemon.id}`).style.display = 'block'
                
                
              }
               
              
               
             
             
            
                  
              }
              
              
              
         ); 
        // let divs=document.querySelectorAll("div.cards")




        });
}
 function getPokePic(id){
 var img = document.createElement("img");
 img.src = `http://pokefanaticos.com/pokedex/assets/images/pokemon_imagenes/${id}.png`;
 myDiv.appendChild(img);
 }

function datosPokemon(){
    var i=0;
    while(i<160){
         i++
        getPokemonById(i);
        
    }
}
function addIconType(){

}


    

// function searchPokemon(pokeSearch){
//     // if(document.getElementById("search").value==datosPokemon()){
//     //     console.log(pokemon.name);
        
//     // }
// var pokeSearch="pikachu"
//     if(getPokemonById(pokemon.name)=="pikachu"){
//         console.log(pokemon.name);
        
//     }
//     else{
//         console.log("noai")
//         console.log(pokemon.name)
//     }
// }
//var nana = pokemon.filter(searchPokemon);
//console.log(nana);
datosPokemon();




//browserify peticiones.js -o bundle.js