import { Dispatch } from "redux";
import { connect } from "react-redux";
import { fetchBeers, createBeer } from '../actions/beerActions';
import Brewery from "./brewery";
import Beer from "./beer";

const mapStateToProps = (state: any) => ({
  drinks: state.beers.drinks || []
});

const mapDispatchToProps: any = (dispatch: Dispatch) => ({
  fetchBeers: () => dispatch(fetchBeers()),
  createBeer: (beer: Beer) => dispatch(createBeer(beer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Brewery);