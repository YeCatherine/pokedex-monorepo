import axios from 'axios';

/**
 * Uses the base url and headers for fetching data.
 */
export default axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {
    'Content-type': 'application/json',
  },
});
