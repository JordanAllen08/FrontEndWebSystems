import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../component/Link';

//Props mapping!
const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.setVisibilityFilter
});

//link.js uses this onClick
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);