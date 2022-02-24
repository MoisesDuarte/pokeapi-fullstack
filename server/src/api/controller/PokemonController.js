const api_url = process.env.POKEAPI_HOST;
const fetch = require('node-fetch');
const { capitalizeEveryWord } = require('../../utilities/stringUtilities');

async function fetchPokemonByName(req, res) {
    const { name } = req.params;

    try {
        const response = await fetch(`${api_url}/${name.toLowerCase()}`);
        const data = await response.json();

        if (response.status === 200) {
            const { name, abilities, types, sprites, game_indices } = data;

            const mappedAbilities = abilities.map(e => capitalizeEveryWord(e.ability.name));
            const mappedTypes = types.map(e => capitalizeEveryWord(e.type.name));
            const mappedGames = game_indices.map(e => capitalizeEveryWord(e.version.name));

            const pokemonData = {
                name: name.replace(/(^\w|\s\w)/g, m => m.toUpperCase()), 
                image: sprites.front_default, 
                abilities: mappedAbilities ,
                types: mappedTypes,
                gameAppearances: mappedGames
            };
            res.status(200).json(pokemonData);
        }
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

module.exports = { fetchPokemonByName };