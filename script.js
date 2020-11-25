const pokeName = document.querySelector('#poke-fact');
const pokeSearchBtn = document.querySelector('#poke-btn');
const inputVal = document.querySelector('#input-number');

const getPokemonFromAPI = () => {
    if (inputVal.tagName.length == 0)
        alert("Please input a name!");
	else {
		const name = inputVal.value;
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`) 
		.then( (response) => response.json() )
		.then( (resJson) => {
            console.log(resJson);
            //var obj = JSON.parse(resJson);
			pokeName.innerHTML = resJson.name + " number: " + resJson.id;
			let imgURL = resJson.sprites.front_default;
			displayImage(imgURL, 90, 90, name);
		})
		.catch( (err) => {
			console.log(err);
		});
	}
}

const displayImage = function (src, width, height, alt) {
	let img = document.createElement("img");
	img.src = src;
    img.width = width;
    img.height = height;
	img.alt = alt;
	document.body.appendChild(img);
}

pokeSearchBtn.addEventListener("click", getPokemonFromAPI);
