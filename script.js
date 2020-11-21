const pokeName = document.querySelector('#poke-fact');
const pokeSearchBtn = document.querySelector('#poke-btn');
const inputVal = document.querySelector('#input-number');

const getPokemonFromAPI = () => {
    if (inputVal.tagName.length == 0)
        alert("Please input a name!");
	else {
		const name = inputVal.value;
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`) 
		.then( (response) => response.json())
		.then( (resJson) => {
            console.log(resJson);
            //var obj = JSON.parse(resJson);
            pokeName.innerHTML = resJson.name + " number: " + resJson.id;
		})
		.catch( (err) => {
			console.log(err);
		});
	}
}

pokeSearchBtn.addEventListener("click", getPokemonFromAPI);
