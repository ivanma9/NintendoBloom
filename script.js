const pokeName = document.querySelector('#poke-fact');
const pokeSearchBtn = document.querySelector('#poke-btn');
const pokeSearchBtn2 = document.querySelector('#poke-btn2');
const pokeSearchBtn3 = document.querySelector('#poke-btn3');
const pokeSearchBtn4 = document.querySelector('#poke-btn4');
const pokeSearchBtn5 = document.querySelector('#poke-btn5');
const pokeSearchBtn6 = document.querySelector('#poke-btn6');
const inputVal = document.querySelector('#input-number');
const poke1 = document.querySelector('#imageid');
const poke2 = document.querySelector('#imageid2');
const poke3 = document.querySelector('#imageid3');
const poke4 = document.querySelector('#imageid4');
const poke5 = document.querySelector('#imageid5');
const poke6 = document.querySelector('#imageid6');

const getPokemonFromAPI = (elem) => {
    if (inputVal.tagName.length == 0)
        alert("Please input a name!");
	else {
		
		const name = inputVal.value;
		fetch(`https://cors-anywhere.herokuapp.com/https://pokeapi.glitch.me/v1/pokemon/${name}`) 
		.then( (response) => response.json() )
		.then( (resJson) => {
            console.log(resJson[0]);
            //var obj = JSON.parse(resJson);
			pokeName.innerHTML = resJson[0].name + " number: " + resJson[0].number;
			let imgURL = resJson[0].sprite;
			console.log(imgURL);			
			displayImage(imgURL, elem, name);
		})
		.catch( (err) => {
			console.log(err);
		});
	}
}

function displayImage(src, elem, alt) {
	//let img = document.createElement("img");
	document.getElementById(elem).src=src;
	document.getElementById(elem).alt = alt;
	// document.body.removeChild(document.body.lastChild);
	// document.body.appendChild(img);
}

function removeLastSearchImage() {
	document.body.removeChild(document.lastChild);
}

function chooseElem(){
	getPokemonFromAPI(poke1);
}
function chooseElem2(){
	getPokemonFromAPI(poke2);
}
function chooseElem3(){
	getPokemonFromAPI(poke3);
}
function chooseElem4(){
	getPokemonFromAPI(poke4);
}
function chooseElem5(){
	getPokemonFromAPI(poke5);
}
function chooseElem6(){
	getPokemonFromAPI(poke6);
}


pokeSearchBtn.addEventListener("click", chooseElem);
pokeSearchBtn2.addEventListener("click", chooseElem2);
pokeSearchBtn3.addEventListener("click", chooseElem3);
pokeSearchBtn4.addEventListener("click", chooseElem4);
pokeSearchBtn5.addEventListener("click", chooseElem5);
pokeSearchBtn6.addEventListener("click", chooseElem6);
