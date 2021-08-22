import Http from '../../../services/Http';
import { CACHED_ALL_POKEMON_KEY, CACHED_MY_POKEMON_KEY } from '../../../constants';

export const fetchPokemons = async(limit, offset, dispatch) => {
  try {
    let response = await Http.GET('pokemon', {limit, offset});
    let {count, next, previous} = response.data;
    localStorage.setItem(CACHED_ALL_POKEMON_KEY, JSON.stringify(response.data.results));
    await dispatch({ type: "FETCH_POKEMON_RESOLVED", payload: response.data.results });
    await dispatch({ type: "SAVE_POKEMON_PAGINATION", payload: {count, next, previous} });
  } catch (e) {

  }
}

export const fetchDetails = async(name) => {
  try {
    let response = await Http.GET('pokemon', '', name);
    return response.data;
  } catch (e) {
    return null;
  }
}
