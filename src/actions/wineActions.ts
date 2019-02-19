import { Wine } from '../schema';

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
