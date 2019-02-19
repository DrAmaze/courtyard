import merge from 'lodash/merge';
import {
  RECEIVE_BEERS,
  RECEIVE_BEER,
  REMOVE_BEER
} from '../actions/beerActions';

const _nullBeerState = ({ drinks: [] });

const beerReducer = (state: any = {}, action: any): any => {
  Object.freeze(state);
  let newState;
  if (state.drinks) {
    newState = merge({}, state);
  } else {
    newState = merge({}, state, _nullBeerState);
  }
  switch (action.type) {
    case RECEIVE_BEERS:
      newState.drinks = action.beers;
      return newState;
    case RECEIVE_BEER:
      if (!newState.drinks) newState.drinks = [];
      newState.drinks.push(action.beer);
      return newState;
    case REMOVE_BEER:
      delete newState.drinks[action.beer.ID];
      return newState;
    default:
      return state;
  }
};

export default beerReducer;