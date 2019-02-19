export const RECEIVE_BEERS = 'RECEIVE_BEERS';
export const RECEIVE_BEER = 'RECEIVE_BEER';
export const REMOVE_BEER = 'REMOVE_BEER';

export const receiveBeers = (beers: any) => ({
  type: RECEIVE_BEERS,
  beers
});

export const receiveBeer = (beer: any) => ({
  type: RECEIVE_BEER,
  beer
});

export const removeBeer = (beer: any) => ({
  type: REMOVE_BEER,
  beer
});
