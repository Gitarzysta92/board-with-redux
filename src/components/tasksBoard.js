import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tasks } from './tasksModel';
import Task from './task'


import io from 'socket.io-client';
const socket = io('http://localhost:4000');



const exampleTask = {
	id: 1,
	name: 'TaskName',
	establishDate: 'Date',
	category: 'category',
	taskStatus: {
		type: '',
		updateDate: '',
	},
	businessHours: 'sumOfparicipantsBusinessHours',
	taskOwner: 'userID',
	participants: ['usersIDs'],
	customProps: {},
	taskUpdates: [
		{
			title: 'Update Title',
			text: 'Some custom text',
			author: 'userID',
			updateDate: 'Date type object',
			taskActions: {
				AddbusinessHours: 2
			}
		}
	]
}




class Counter extends Component {
	constructor(props) {
		super(props);
		this.counter = 0;
	}


	componentDidMount() {
		socket.on('addTask', (task) => {
			this.props.addTask(task);
		});
		socket.on('removeTask', (taskID) => {
			this.props.removeTask(taskID);
		});
	}

	emitEvent() {
		socket.emit('action');	
	}

	createTask(){
		const newTask = Object.assign({}, exampleTask);
		this.counter += 1;
		newTask.id = this.counter;
		return newTask;
	}
	addTask = () => {
		const task = this.createTask();
		this.props.addTask(task);
		socket.emit('addTask', task);
	}

	removeTask = () => {
		socket.emit('removeTask', this.counter);
		this.props.removeTask(this.counter--);
	}


	prepare(tasks) {
		return tasks.map(task => <Task key={task.id} {...task}/>);
	}

	render() {
		const { tasks } = this.props;
		return (
			<div>
				<button onClick={this.addTask}>Add task</button>
				<button onClick={this.removeTask}>Remove task</button>
				{this.prepare(tasks)}
				
			</div>
		)
	}
}



Counter.propTypes = {
	tasks: PropTypes.array.isRequired,
	addTask: PropTypes.func.isRequired,
	removeTask: PropTypes.func.isRequired

}

export default Counter;