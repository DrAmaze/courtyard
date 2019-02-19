import { Beer } from '../schema';

export const RECEIVE_BEERS = 'RECEIVE_BEERS';
export const RECEIVE_BEER = 'RECEIVE_BEER';
export const REMOVE_BEER = 'REMOVE_BEER';

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
