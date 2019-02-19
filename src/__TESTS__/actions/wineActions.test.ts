import * as actions from '../../actions/wineActions';

describe('Wine Actions: ', () => {
  it('should create an action to receive a single wine', () => {
    const wine = { 'ID': 21, 'name': 'Something about full-body' };
    const expectedAction = {
      type: actions.RECEIVE_WINE,
      wine
    };
    expect(actions.receiveWine(wine)).toEqual(expectedAction);
  });
});
