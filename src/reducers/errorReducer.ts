import {
  RECEIVE_BEER_ERRORS,
  RECEIVE_WINE_ERRORS,
  CLEAR_BEER_ERRORS,
  CLEAR_WINE_ERRORS
} from '../actions/errorActions';

const _nullBeerErrors = { beerErrors: [] };
const _nullWineErrors = { wineErrors: [] };

export default (state: any[] = [], action: any) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BEER_ERRORS:
      return state.concat({}, state, { beerErrors: action.errors });
    case RECEIVE_WINE_ERRORS:
      return state.concat({}, state, { wineErrors: action.errors });
    case CLEAR_BEER_ERRORS:
      return _nullBeerErrors;
    case CLEAR_WINE_ERRORS:
      return _nullWineErrors;
    default:
      return state;
  }
};