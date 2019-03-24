import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import Counter from '../components/Counter';


const mapStateToProps = (state, ownProps) => ({
	value: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onIncrement: () => dispatch(increment),
	onDecrement: () => dispatch(decrement),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter)