// Task Actions
export const addTask = task => ({
	type: 'ADD_TASK',
	task
});

export const updateTask = (taskID, task) => ({
	type: 'UPDATE_TASK',
	taskID,
	task
});

export const removeTask = taskID => ({
	type: 'REMOVE_TASK',
	taskID
});


// Current User Actions
export const registerUser = user => ({
	type: 'REGISTER_USER',
	user
});

export const unregisterUser = () => ({
	type: 'UNREGISTER_USER'
});


// Active Users Actions
export const addUser = user => ({
	type: 'ADD_USER',
	user
});

export const removeUser = userID => ({
	type: 'REMOVE_USER',
	userID
});