import merge from 'lodash/merge';
import {
  RECEIVE_WINES,
  RECEIVE_WINE,
  REMOVE_WINE
} from '../actions/wineActions';

const _nullWineState = ({ drinks: [] });

const wineReducer = (state: any = {}, action: any): any => {
  Object.freeze(state);
  let newState = state.drinks ? merge({}, state) : merge({}, state, _nullWineState);

  switch (action.type) {
    case RECEIVE_WINES:
      newState.drinks = action.wines;
      return newState;
    case RECEIVE_WINE:
      if (!newState.drinks) newState.drinks = [];
      newState.drinks.push(action.wine);
      return newState;
    case REMOVE_WINE:
      delete newState.drinks[action.wine.ID];
      return newState;
    default:
      return state;
  }
};

export default wineReducer;