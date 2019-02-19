import reducer from '../../reducers/beerReducer';
import * as actions from '../../actions/beerActions';

describe('Beer Reducer: ', () => {
  const _nullBeerState = ({ drinks: [] });
  
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle RECEIVE_BEERS', () => {
    const beers = [
      { 'ID': 1, 'name': 'Crabbies' },
      { 'ID': 2, 'name': 'Fort Point' },
      { 'ID': 21, 'name': 'Really Tasty One' }
    ];
    const beersAction = {
      type: actions.RECEIVE_BEERS,
      beers
    };
    expect(reducer({}, beersAction).drinks).toEqual(beers);
  });

  it('should handle RECEIVE_BEER', () => {
    const beer = { 'ID': 1, 'name': 'Crabbies' };
    const beerAction = {
      type: actions.RECEIVE_BEER,
      beer
    };
    expect(reducer({}, beerAction)).toEqual({ drinks: [ beer ] });
  });

  it('should handle REMOVE_BEER if beer does NOT exist', () => {
    const beer = { 'ID': 1, 'name': 'Crabbies' };
    const beerAction = {
      type: actions.REMOVE_BEER,
      beer
    };
    expect(reducer({}, beerAction)).toEqual(_nullBeerState);
  });
  
  it('should handle REMOVE_BEER if beer DOES exist', () => {
    const beer = { 'ID': 1, 'name': 'Crabbies' };
    const addBeerAction = {
      type: actions.RECEIVE_BEER,
      beer
    };
    let state = reducer({}, addBeerAction);
    expect(state.drinks).toContain(beer);
    const beerAction = {
      type: actions.REMOVE_BEER,
      beer
    };
    expect(reducer({}, beerAction)).toEqual(_nullBeerState);
  });
}); 