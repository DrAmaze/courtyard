import { Wine } from '../schema';

export const RECEIVE_WINE = 'RECEIVE_WINE';

export const receiveWine = (wine: Wine) => ({
  type: RECEIVE_WINE,
  wine
});
