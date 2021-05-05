import { createStore } from 'redux';

const initialState = {
  pokemon: [],
}

const reducer = (state = initialState, action) => {
  if (action.type === 'LOAD_MONS') {
    return {
      ...state,
      pokemon: state.pokemon.concat(action.payload),
    }
  }

  return state;
};

const store = createStore(reducer);

export default store;