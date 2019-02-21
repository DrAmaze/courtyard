import { Dispatch } from "redux";
import { connect } from "react-redux";
import Winery from "./winery";

const mapStateToProps = (state: any) => ({
  drinks: state.drinks
});

const mapDispatchToProps = (dispatch: Dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Winery);