export function getPokemonImageFromAPI(name) {
	fetch(`https://pokeapi.co/api/v2/pokemon/${name}`) 
	.then( (response) => response.json() )
	.then( (resJson) => {
		let id = resJson.id.toString();
		let src = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
		console.log(src);
		return src;
	})
	.catch( (err) => {
		console.log(err);
	});
}
