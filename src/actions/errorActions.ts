// Beer error actions
export const RECEIVE_BEER_ERRORS = 'RECEIVE_BEER_ERRORS';
export const CLEAR_BEER_ERRORS = 'CLEAR_BEER_ERRORS';

export const receiveBeerErrors = (errors: any) => ({
  type: RECEIVE_BEER_ERRORS,
  errors
});

export const clearBeerErrors = () => ({
  type: CLEAR_BEER_ERRORS
});

// Wine error actions
export const RECEIVE_WINE_ERRORS = 'RECEIVE_WINE_ERRORS';
export const CLEAR_WINE_ERRORS = 'CLEAR_WINE_ERRORS';

export const receiveWineErrors = (errors: any) => ({
  type: RECEIVE_WINE_ERRORS,
  errors
});

export const clearWineErrors = () => ({
  type: CLEAR_WINE_ERRORS
});
