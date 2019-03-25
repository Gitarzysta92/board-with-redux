export default (state= [], action) => {
	switch (action.type) {
		case 'ADD_TASK':
			console.log(action);
			return [
				...state,
				{
					...action.task
				}
			]
		case 'REMOVE_TASK':
			return state.filter(task => task.id !== action.taskID );
		default:
			return state
	}
}