import axios from 'axios';

class ApiResource {
  baseUrl = import.meta.env.VITE_SERVER_HOST;

   /**
   * Get pokemon by name
   * @param {string} name - A string to filter name by
   * @returns an object with the pokemon information
   */
  async getPokemonByName(name) {
    try {
      const response = await axios.get(`${this.baseUrl}/pokemon/${name}`);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
}

export default new ApiResource();