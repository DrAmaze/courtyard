import { apiConfig, Beer } from '../schema';
import fetch from 'cross-fetch';
import { Dispatch, AnyAction } from 'redux';

export const RECEIVE_BEERS = 'RECEIVE_BEERS';
export const RECEIVE_BEER = 'RECEIVE_BEER';
export const REMOVE_BEER = 'REMOVE_BEER';

// interface Action {
//   type: string;
// }

// interface BeersAction extends Action {
//   beers: Beer[];
// }

// interface BeerAction extends Action {
//   beer: Beer;
// }

export const receiveBeers = (beers: Beer[]) => ({
  type: RECEIVE_BEERS,
  beers
});

export const receiveBeer = (beer: Beer) => ({
  type: RECEIVE_BEER,
  beer
});

export const removeBeer = (beer: Beer) => ({
  type: REMOVE_BEER,
  beer
});

export const fetchBeers: any = () => (dispatch: Dispatch) => (
  fetch(apiConfig + 'beers').then(res => 
    res.json(),
    err => console.log('ERROR: ', err)
  ).then(json =>
    dispatch(receiveBeers(json))
  )
)

export const fetchBeer: any = (id: any) => (dispatch: Dispatch) => {
  const url = apiConfig + 'beers/' + id;
  return fetch(url).then(res => 
    res.json(),
    err => console.log('ERROR: ', err)
  ).then(json =>
    dispatch(receiveBeer(json))
  )
}

export const createBeer: any = (beer: Beer) => (dispatch: Dispatch) => {
  const options = { method: 'POST', body: JSON.stringify(beer) };
  return fetch(apiConfig + 'beers', options).then(res =>
    res.json(),
    err => console.log('ERROR: ', err)
  ).then(json => 
    dispatch(receiveBeer(json))
  )
}

export const updateBeer: any = (beer: Beer) => (dispatch: Dispatch) => {
  const url = apiConfig + 'beers/' + beer.ID;
  const options = { method: 'PUT', body: JSON.stringify(beer) };
  return fetch(url, options).then(res =>
    res.json(),
    err => console.log('ERROR: ', err)
  ).then(json => 
    dispatch(receiveBeer(json))
  )
}

export const deleteBeer: any = (beer: Beer) => (dispatch: Dispatch) => {
  const url = apiConfig + 'beers/' + beer.ID;
  const options = { method: 'DELETE' };
  return fetch(url, options).then(res =>
    res.json(),
    err => console.log('ERROR: ', err)
  ).then(json => 
    dispatch(removeBeer(json))
  )
}
