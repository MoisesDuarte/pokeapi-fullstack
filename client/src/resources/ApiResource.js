import axios from 'axios';

class ApiResource {
  // TODO: Change to .env definition later
  baseUrl = 'http://localhost:3000';

  async getPokemonByName(name) {
    try {
      const response = await axios.get(`${this.baseUrl}/pokemon/${name}`);
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default new ApiResource();