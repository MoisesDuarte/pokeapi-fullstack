// ? Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// ? App Setup and Middlewares
const app = express();
app.use(cors());
app.use(morgan('dev'));

// ? Routing
const pokemonRoutes = require('./api/routes/PokemonRoutes');

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is Online' });
});

app.use('/pokemon', pokemonRoutes);

// ? Port listening
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
