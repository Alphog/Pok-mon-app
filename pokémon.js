const inputField =document.getElementById('search-input');
const button =document.getElementById('search-button');
const pokeName =document.getElementById('pokemon-namee');


const pokeId =document.getElementById('pokemon-id');

const pokeWeight =document.getElementById('weightt');

const pokeHeight =document.getElementById('height');

const imagesDiv =document.getElementById('images');

const types =document.getElementById('types');

let hp1 =document.getElementById('hp1');
let attack2 =document.getElementById('attack2');
let defense3 =document.getElementById('defense3');
let sp4 =document.getElementById('sp4');
let sp5 =document.getElementById('sp5');
let speed6 =document.getElementById('speed6');


const stats =[hp1,attack2,defense3,sp4,sp5,speed6];







const pokemons_name = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/{name-or-id}';

const pokemons_list = fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/nidoran-f')
.then(strlist =>strlist.json())
.then(data => {
  let image = document.createElement('img');
  image.src=`${data.sprites.back_default}`;
  
  imagesDiv.appendChild(image);
});





button.addEventListener('click',()=>{
  let value = inputField.value;
  console.log(value);
});