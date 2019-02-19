import * as actions from '../../actions/wineActions';

describe('Wine Actions: ', () => {
  it('should create an action to receive wines', () => {
    const wines = [
      { 'ID': 4, 'name': 'Pinot Noir' },
      { 'ID': 7, 'name': 'Cab Sav' },
      { 'ID': 30, 'name': 'Something about full-bodies' }
    ];
    const expectedAction = {
      type: actions.RECEIVE_WINES,
      wines
    };
    expect(actions.receiveWines(wines)).toEqual(expectedAction);
  });

  it('should create an action to receive a single wine', () => {
    const wine = { 'ID': 21, 'name': 'Something about full-body' };
    const expectedAction = {
      type: actions.RECEIVE_WINE,
      wine
    };
    expect(actions.receiveWine(wine)).toEqual(expectedAction);
  });

  it('should create an action to remove a single wine', () => {
    const wine = { 'ID': 21, 'name': 'Something about full-body' };
    const expectedAction = {
      type: actions.REMOVE_WINE,
      wine
    };
    expect(actions.removeWine(wine)).toEqual(expectedAction);
  });
});
