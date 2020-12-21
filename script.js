const pokeName = document.querySelector('#poke-fact');
const pokeSearchBtn = document.querySelector('#poke-btn');
const pokeSearchBtn2 = document.querySelector('#poke-btn2');
const pokeSearchBtn3 = document.querySelector('#poke-btn3');
const pokeSearchBtn4 = document.querySelector('#poke-btn4');
const pokeSearchBtn5 = document.querySelector('#poke-btn5');
const pokeSearchBtn6 = document.querySelector('#poke-btn6');
const inputVal = document.querySelector('#input-number');

window.onscroll = function() {stickyFunc()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyFunc() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const getPokemonFromAPI = (elem) => {
    if (inputVal.tagName.length == 0)
        alert("Please input a name!");
	else {
		
		const name = inputVal.value;
		console.log(name);
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`) 
		.then( (response) => response.json() )
		.then( (resJson) => {
            console.log(resJson.id);
            //var obj = JSON.parse(resJson);
			pokeName.innerHTML = resJson.name + " number: " + resJson.id;
			//let imgURL = resJson[0].sprite;
			//console.log(imgURL);			
			//displayImage(imgURL, 200, 200, name);
			console.log(elem);
			grabImage(elem, resJson.id);
		})
		.catch( (err) => {
			console.log(err);
		});
	}
}
function grabImage(elem, pokeID){
	document.getElementById(elem).src = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`;
}

function displayImage(src, width, height, alt) {
	let img = document.createElement("img");
	img.src = src;
	img.alt = alt;
	img.width = width;
	img.height = height;
	document.body.removeChild(document.body.lastChild);
	document.body.appendChild(img);
}

function removeLastSearchImage() {
	document.body.removeChild(document.lastChild);
}

function chooseElem(){
	getPokemonFromAPI('imageid');
	//getPokemonFromAPI("#imageid");
}
function chooseElem2(){
	getPokemonFromAPI('imageid2');
}
function chooseElem3(){
	getPokemonFromAPI('imageid3');
}
function chooseElem4(){
	getPokemonFromAPI('imageid4');
}
function chooseElem5(){
	getPokemonFromAPI('imageid5');
}
function chooseElem6(){
	getPokemonFromAPI('imageid6');
}


pokeSearchBtn.addEventListener("click", chooseElem);
pokeSearchBtn2.addEventListener("click", chooseElem2);
pokeSearchBtn3.addEventListener("click", chooseElem3);
pokeSearchBtn4.addEventListener("click", chooseElem4);
pokeSearchBtn5.addEventListener("click", chooseElem5);
pokeSearchBtn6.addEventListener("click", chooseElem6);
