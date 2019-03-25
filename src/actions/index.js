export const addTask = task => ({
	type: 'ADD_TASK',
	task
});

export const removeTask = taskID => ({
	type: 'REMOVE_TASK',
	taskID
});