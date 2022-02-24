const api_url = 'https://pokeapi.co/api/v2/pokemon/';
const fetch = require('node-fetch');

async function fetchPokemonAbilitiesByName(req, res) {
    const { name } = req.params;

    try {
        const response = await fetch(`${api_url}/${name}`);
    } catch (err) {
        res.status(200).json({ message: err });
    }
}

module.exports = fetchPokemonAbilitiesByName;