import { combineReducers } from 'redux';

import beers from './beerReducer';
import wines from './wineReducer';
import errors from './errorReducer';

export default combineReducers({
  beers,
  wines,
  errors
});
