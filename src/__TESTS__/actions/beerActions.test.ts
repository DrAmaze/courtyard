import * as actions from '../../actions/beerActions';

describe('Beer Actions: ', () => {
  it('should create an action to receive beers', () => {
    const beers = [
      { 'ID': 1, 'name': 'Crabbies' },
      { 'ID': 2, 'name': 'Fort Point' },
      { 'ID': 21, 'name': 'Really Tasty One' }
    ];
    const expectedAction = {
      type: actions.RECEIVE_BEERS,
      beers
    };
    expect(actions.receiveBeers(beers)).toEqual(expectedAction);
  });

  it('should create an action to receive a single beer', () => {
    const beer = { 'ID': 1, 'name': 'Crabbies' };
    const expectedAction = {
      type: actions.RECEIVE_BEER,
      beer
    };
    expect(actions.receiveBeer(beer)).toEqual(expectedAction);
  });

  it('should create an action to remove a single beer', () => {
    const beer = { 'ID': 1, 'name': 'Crabbies' };
    const expectedAction = {
      type: actions.REMOVE_BEER,
      beer
    };
    expect(actions.removeBeer(beer)).toEqual(expectedAction);
  });
}); 