import { CACHED_ALL_POKEMON_KEY, CACHED_MY_POKEMON_KEY } from '../../../constants';

export const getCachedAllPokemons = () => {
  return localStorage.getItem(CACHED_ALL_POKEMON_KEY) ? JSON.parse(localStorage.getItem(CACHED_ALL_POKEMON_KEY)) : [];
}

export const getCachedMyPokemons = () => {
  return localStorage.getItem(CACHED_MY_POKEMON_KEY) ? JSON.parse(localStorage.getItem(CACHED_MY_POKEMON_KEY)) : [];
}
