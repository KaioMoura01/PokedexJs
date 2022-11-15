function convertDetailsToModel (pokeDetail){
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;
    pokemon.types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    pokemon.type = pokemon.types[0];
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
    pokemon.hp = pokeDetail.stats[0].base_stat;
    pokemon.attack = pokeDetail.stats[1].base_stat;
    pokemon.defense = pokeDetail.stats[2].base_stat;
    pokemon.specialAttack = pokeDetail.stats[3].base_stat;
    pokemon.specialDefense = pokeDetail.stats[4].base_stat;
    pokemon.speed = pokeDetail.stats[5].base_stat;
    
    return pokemon;
}

const pokeApi = {}

pokeApi.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertDetailsToModel)
}

pokeApi.getPokemons = (offset = 0, limit = 12) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBoby) => jsonBoby.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails))
    .then((detailsRequests) => Promise.all(detailsRequests))
    .then((pokemonDetails) => pokemonDetails)
    .catch((error) => console.log(error))
}

pokeApi.pokeSingle = (number) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBoby) => convertDetailsToModel(jsonBoby))
    .then((pokemonDetails) => sample.single(pokemonDetails))
}