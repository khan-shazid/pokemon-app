import { getCachedAllPokemons, getCachedMyPokemons } from '../pages/common/actions';

const initialState = {
    pokemonList: getCachedAllPokemons(),
    myPokemonList: getCachedMyPokemons(),
    pagination: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_POKEMON_RESOLVED": {
        return {
          ...state,
          pokemonList: action.payload
        };
      }
      case "SAVE_POKEMON_PAGINATION": {
        return {
          ...state,
          pagination: action.payload
        };
      }
      default:
        return state;
  }
}
