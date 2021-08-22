import { combineReducers } from 'redux';
import pokemonReducer from './pokemon';

const appReducers = combineReducers({
    pokemon: pokemonReducer
});

const reducers = (state,action) =>{
  return appReducers(state, action)
}

export default reducers;
