import http from '@/http-common';

/**
 * Retrieves the Get request from "/pokemon?limit= ".
 */
const getAll = (): any => {
  return http.get('/pokemon-species?limit=1200');
};

/**
 * Retrieves the Get request from `/evolution-chain/${id}`.
 *
 * @param {Number} id The name of pokemon.
 */
const getEvolutionChain = (id: number): any => {
  return http.get(`/evolution-chain/${id}`);
};

/**
 * Retrieves the Get request from `/pokemon/${name}`.
 *
 * @param {String} name The name of pokemon.
 */
const get = (name: string): any => {
  return http.get(`/pokemon/${name}`);
};

/**
 * Retrieves the Get request from `/pokemon-species/${name}`.
 *
 * @param {String} name The name of pokemon.
 */
const getSpecies = (name: string): any => {
  return http.get(`/pokemon-species/${name}`);
};
/**
 * Get List of available languages.
 */
const getLanguages = () => {
  return http.get('/language');
};
/**
 * Retrieves the Get request from `/move/${name}`.
 *
 * @param {String} name The name of pokemon.
 */
const getMove = (name: string): any => {
  return http.get(`/move/${name}`);
};

/**
 * Retrieves the Get request from separate endpoint.
 */
export const pokemonListService = {
  getAll,
  get,
  getSpecies,
  getLanguages,
  getMove,
  getEvolutionChain
};

export default pokemonListService;
