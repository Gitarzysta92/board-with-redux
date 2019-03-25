import { connect } from 'react-redux';
import { addTask, removeTask } from '../actions';
import tasksBoard from '../components/tasksBoard';


const mapStateToProps = (state, ownProps) => ({
	tasks: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	addTask: task => dispatch(addTask(task)),
	removeTask: id => dispatch(removeTask(id)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(tasksBoard)