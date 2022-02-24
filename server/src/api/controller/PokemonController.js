const api_url = 'https://pokeapi.co/api/v2/pokemon';
const fetch = require('node-fetch');

async function fetchPokemonAbilitiesByName(req, res) {
    const { name } = req.params;

    try {
        const response = await fetch(`${api_url}/${name}`);
        const data = await response.json();

        if (response.status === 200) {
            const abilities = data.abilities.length > 0 ? data.abilities.map(e => e.ability.name) : [];
            res.status(200).json(abilities);
        }
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

module.exports = { fetchPokemonAbilitiesByName };