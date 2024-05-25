

const button =document.getElementById('search-button');
const pokeName =document.getElementById('pokemon-name');


const pokeId =document.getElementById('pokemon-id');

const pokeWeight =document.getElementById('weight');

const pokeHeight =document.getElementById('height');

let image =document.getElementById('sprite');
  let types =document.getElementById('types');





function clear(){
types.innerText ='';
}






async function fetchData(){
  
  clear();


  try{
  
    
    const inputField = await document.getElementById('search-input').value.toLowerCase();
    
    const response =await 
fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputField}`);
if(!response.ok){
  alert('Pokémon not found')
  throw new Error('not found by alpha');
}

const data = await response.json();
pokeName.innerText = data.name.toUpperCase();
pokeId.innerText =`#${data.id}`;
pokeWeight.innerText =`Weight: ${data.weight}`;
pokeHeight.innerText =`Height: ${data.height}`;
for(let i=0; i < data.types.length;i++){
if(data.types[i]){
  let button = document.createElement('button');
  button.classList.add('button');
  let text = document.createTextNode(`${data.types[i].type.name.toUpperCase()}`);
  button.appendChild(text);
 
  types.appendChild(button);
}
}
 

const arr = [];
for(let ele in data.stats){
arr.push(data.stats[ele].base_stat);
}

const [hp1,attack2,defense3,sp4,sp5,speed6] = arr;


document.getElementById('hp').innerText = hp1;
document.getElementById('attack').innerText = attack2;
document.getElementById('defense').innerText = defense3;
document.getElementById('special-attack').innerText = sp4;
document.getElementById('special-defense').innerText = sp5;
document.getElementById('speed').innerText = speed6;
 



const pokemonSprite = data.sprites.front_default;

image.src=pokemonSprite;
image.style.display='block';

  
}
catch(err){
console.error(err);
}
}
button.addEventListener('click',fetchData);