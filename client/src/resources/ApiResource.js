import axios from 'axios';

class ApiResource {
  baseUrl = import.meta.env.VITE_SERVER_HOST;

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