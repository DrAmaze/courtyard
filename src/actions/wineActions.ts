import { apiConfig, Wine } from '../schema';
import fetch from 'cross-fetch';
import { Dispatch } from 'redux';

export const RECEIVE_WINES = 'RECEIVE_WINES';
export const RECEIVE_WINE = 'RECEIVE_WINE';
export const REMOVE_WINE = 'REMOVE_WINE';

export const receiveWines = (wines: Wine[]) => ({
  type: RECEIVE_WINES,
  wines
});

export const receiveWine = (wine: Wine) => ({
  type: RECEIVE_WINE,
  wine
});

export const removeWine = (wine: Wine) => ({
  type: REMOVE_WINE,
  wine
});

export const fetchWines: any = () => (dispatch: Dispatch) => (
  fetch(apiConfig + 'wines').then(res =>
    res.json(),
    err => console.log('ERROR: ', err)
  ).then(json =>
    dispatch(receiveWines(json))
  )
)

export const fetchWine: any = (id: any) => (dispatch: Dispatch) => {
  const url = apiConfig + 'wines/' + id;
  return fetch(url).then(res =>
    res.json(),
    err => console.log('ERROR: ', err)
  ).then(json =>
    dispatch(receiveWine(json))
  )
}