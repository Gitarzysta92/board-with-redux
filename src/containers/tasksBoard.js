import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TasksList from '../components/tasks';
import TaskForm from '../components/taskForm';

import { addTask, updateTask, removeTask } from '../actions';


class TasksBoard extends Component {
	constructor(props) {
		super(props);
	}
	
	addTask = task => {
		const { dispatch, socket, user } = this.props;
		const data = {
			ownerId: user.id,
			data: task
		}
		socket.addTask(data, ({task, error}) => {
			if (error) return;
			const taskModel = this._createTaskModel(task);
			dispatch(addTask(taskModel));
		})
	}

	removeTask = id => {
		const { dispatch, socket } = this.props;
		socket.removeTask(id, function(id) {
			dispatch(removeTask(id));
		})
	}

	updateTask = (id, data) => {
		const { dispatch, socket } = this.props;
		socket.updateTask({id, data}, function({task, error}) {
			if (error) return;

			const { id } = task;
			dispatch(updateTask(id, task));	
		});
	}

	componentDidMount() {
		const { dispatch, socket } = this.props;
		socket.rehydrateApp(({tasks}) => {
			tasks.forEach(task => {
				const taskModel = this._createTaskModel(task);
				dispatch(addTask(taskModel));
			});
		});

		socket.onAddTask(task => {
			const taskModel = this._createTaskModel(task);
			dispatch(addTask(taskModel));
		});

		socket.onUpdateTask(({id, task}) => {
			const taskModel = this._createTaskModel(task);
			dispatch(updateTask(id, taskModel));
		});

		socket.onRemoveTask(id => {
			dispatch(removeTask(id));
		});
	}

	_createTaskModel = task => {
		return {
			...task,
			remove: () => this.removeTask(task.id),
			update: (id => data => this.updateTask(id, data))(task.id)
		}	
	}

	render() {
		console.log(this.props);
		return (
			<div className="tasks-list">
				<div className="row">
					<TaskForm onSubmit={this.addTask} color={this.props.user.color}/>
					<TasksList tasks={this.props.tasks} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	tasks: state.tasks
})

TasksBoard.propTypes = {
	dispatch: PropTypes.func.isRequired,
	socket: PropTypes.object.isRequired,
	tasks: PropTypes.array.isRequired,
	user: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(TasksBoard);