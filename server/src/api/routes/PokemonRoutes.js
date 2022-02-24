const express = require('express');
const router = express.Router();

const PokemonController = require("../controller/PokemonController");

router.get('/:name', PokemonController.fetchPokemonByName);

module.exports = router;