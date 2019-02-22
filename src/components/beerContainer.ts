import { Dispatch } from "redux";
import { connect } from "react-redux";
import {
  updateBeer,
  deleteBeer,
  fetchBeer,
} from '../actions/beerActions';
import Beer from "./beer";

const mapStateToProps = (state: any) => ({
  drinks: state.beers.drinks
});

const mapDispatchToProps: any = (dispatch: Dispatch) => ({
  fetchBeer: (id: any) => dispatch(fetchBeer(id)),
  updateBeer: (beer: Beer) => dispatch(updateBeer(beer)),
  deleteBeer: (beer: Beer) => dispatch(deleteBeer(beer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Beer);