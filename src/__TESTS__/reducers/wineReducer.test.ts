import reducer from '../../reducers/wineReducer';
import * as actions from '../../actions/wineActions';

describe('Wine Reducer: ', () => {
  const _nullWineState = ({ drinks: [] });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle RECEIVE_WINES', () => {
    const wines = [
      { 'ID': 4, 'name': 'Pinot Noir' },
      { 'ID': 7, 'name': 'Cab Sav' },
      { 'ID': 30, 'name': 'Something about full-bodies' }
    ];
    const winesAction = {
      type: actions.RECEIVE_WINES,
      wines
    };
    expect(reducer({}, winesAction).drinks).toEqual(wines);
  });

  it('should handle RECEIVE_WINE', () => {
    const wine = { 'ID': 30, 'name': 'Something about full-bodies' };
    const wineAction = {
      type: actions.RECEIVE_WINE,
      wine
    };
    expect(reducer({}, wineAction)).toEqual({ drinks: [wine] });
  });

  it('should handle REMOVE_WINE if beer does NOT exist', () => {
    const wine = { 'ID': 30, 'name': 'Something about full-bodies' };
    const wineAction = {
      type: actions.REMOVE_WINE,
      wine
    };
    expect(reducer({}, wineAction)).toEqual(_nullWineState);
  });

  it('should handle REMOVE_WINE if beer DOES exist', () => {
    const wine = { 'ID': 30, 'name': 'Something about full-bodies' };
    const addWineAction = {
      type: actions.RECEIVE_WINE,
      wine
    };
    let state = reducer({}, addWineAction);
    expect(state.drinks).toContain(wine);
    const wineAction = {
      type: actions.REMOVE_WINE,
      wine
    };
    expect(reducer({}, wineAction)).toEqual(_nullWineState);
  });
}); 