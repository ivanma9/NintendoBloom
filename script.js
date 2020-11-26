const pokeName = document.querySelector('#poke-fact');
const pokeSearchBtn = document.querySelector('#poke-btn');
const inputVal = document.querySelector('#input-number');

const getPokemonFromAPI = () => {
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
			
			displayImage(imgURL, 200, 200, name);
		})
		.catch( (err) => {
			console.log(err);
		});
	}
}

function displayImage(src, width, height, alt) {
	let img = document.createElement("img");
	img.src = src;
    img.width = width;
    img.height = height;
	img.alt = alt;
	document.body.removeChild(document.body.lastChild);
	document.body.appendChild(img);
}

function removeLastSearchImage() {
	document.body.removeChild(document.lastChild);
}

pokeSearchBtn.addEventListener("click", getPokemonFromAPI);
