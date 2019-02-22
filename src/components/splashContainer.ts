import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = (state: any) => ({
  consumed: state.consumed
});

export default connect(
  mapStateToProps,
  null
)(Splash);