import { combineReducers } from 'redux';

import beerReducer from './beerReducer';
import wineReducer from './wineReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  beerReducer,
  wineReducer,
  errorReducer
}); 