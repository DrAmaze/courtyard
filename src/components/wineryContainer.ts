import { Dispatch } from "redux";
import { connect } from "react-redux";
import Winery from "./winery";
import { fetchWines } from "../actions/wineActions";

const mapStateToProps = (state: any) => ({
  drinks: state.wines.drinks || []
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchWines: () => dispatch(fetchWines())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Winery);