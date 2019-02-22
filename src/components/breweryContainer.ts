import { Dispatch } from "redux";
import { connect } from "react-redux";
import { fetchBeers } from '../actions/beerActions';
import Brewery from "./brewery";

const mapStateToProps = (state: any) => {
  console.log('STATETEA', state);
  if (state.beers && state.consumed) {
    return {
      drinks: state.beers.drinks,
      consumed: state.beers.consumed
    }
  } else {
    return {
      drinks: [],
      consumed: []
    }
  }
};

const mapDispatchToProps: any = (dispatch: Dispatch) => ({
  fetchBeers: () => dispatch(fetchBeers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Brewery);