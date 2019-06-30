import { combineReducers } from 'redux';


const user = (state = {}, action) => {
	switch (action.type) {
		case 'REGISTER_USER':
			const { id, name, color } = action.user;
			return { id, name, color }
		case 'UNREGISTER_USER':
			return {};
		default:
			return state
	}
}

const users = (state = [], action) => {
	switch (action.type) {
		case 'ADD_USER':
			return [ ...state, { ...action.user} ]
		case 'REMOVE_USER':
			return state.filter(user => user.id !== action.userID );
		default:
			return state
	}
} 


const tasks = (state= [], action) => {
	switch (action.type) {
		case 'ADD_TASK':
			return [ { ...action.task }, ...state ];
		case 'UPDATE_TASK':
			return state.map(task =>{
				return task.id === action.taskID ? Object.assign(task, action.task) : task
			});
		case 'REMOVE_TASK':
			return state.filter(task => task.id !== action.taskID);
		default:
			return state
	}
}

export default combineReducers({ user, users, tasks });