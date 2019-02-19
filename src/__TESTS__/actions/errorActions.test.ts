import * as actions from '../../actions/errorActions';

describe('Error Actions: ', () => {
  describe('Beer Actions: ', () => {
    it('should create an action to clear beer errors', () => {
      const expectedAction = {
        type: actions.CLEAR_BEER_ERRORS
      };
      expect(actions.clearBeerErrors()).toEqual(expectedAction);
    });

    it('should create an action to receive beer errors', () => {
      const errors = 'Beer Not Found';
      const expectedAction = {
        type: actions.RECEIVE_BEER_ERRORS,
        errors
      };
      expect(actions.receiveBeerErrors(errors)).toEqual(expectedAction);
    });
  });

  describe('Wine Actions: ', () => {
    it('should create an action to clear wine errors', () => {
      const expectedAction = {
        type: actions.CLEAR_WINE_ERRORS
      };
      expect(actions.clearWineErrors()).toEqual(expectedAction);
    });
  
    it('should create an action to receive wine errors', () => {
      const errors = 'Wine Not Found';
      const expectedAction = {
        type: actions.RECEIVE_WINE_ERRORS,
        errors
      };
      expect(actions.receiveWineErrors(errors)).toEqual(expectedAction);
    });
  });
});