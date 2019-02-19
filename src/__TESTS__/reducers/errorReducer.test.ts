import reducer from '../../reducers/errorReducer';
import * as actions from '../../actions/errorActions';

describe('Error Reducer: ', () => {
  const _null: any[] = [];

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(_null);
  });

  it('should handle CLEAR_BEER_ERRORS', () => {
    const _nullBeerErrors = { beerErrors: _null };
    const clearAction = {
      type: actions.CLEAR_BEER_ERRORS
    };
    expect(reducer({}, clearAction)).toEqual(_nullBeerErrors);
  });

  it('should handle CLEAR_WINE_ERRORS', () => {
    const _nullWineErrors = { wineErrors: _null };
    const clearAction = {
      type: actions.CLEAR_WINE_ERRORS
    };
    expect(reducer({}, clearAction)).toEqual(_nullWineErrors);
  });

  it('should handle RECEIVE_BEER_ERRORS', () => {
    const errors = 'Beer Not Found';
    const beerAction = {
      type: actions.RECEIVE_BEER_ERRORS,
      errors
    };
    expect(reducer({}, beerAction)).toEqual({ beerErrors: errors });
  });

  it('should handle RECEIVE_WINE_ERRORS', () => {
    const errors = 'Wine Not Found';
    const wineAction = {
      type: actions.RECEIVE_WINE_ERRORS,
      errors
    };
    expect(reducer({}, wineAction)).toEqual({ wineErrors: errors });
  });
}); 