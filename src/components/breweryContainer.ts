import { Dispatch } from "redux";
import { connect } from "react-redux";
import { fetchBeers } from '../actions/beerActions';
import Brewery from "./brewery";

const mapStateToProps = (state: any) => ({
  drinks: state.beers.drinks || []
});

const mapDispatchToProps: any = (dispatch: Dispatch) => ({
  fetchBeers: () => dispatch(fetchBeers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Brewery);