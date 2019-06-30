import io from 'socket.io-client';

const webSocket = io('http://localhost:4000');


const socket = {
	// Emit events
	registerUser: function(data, cb) {
		webSocket.emit('registerUser', data, cb);
	},
	unregisterUser: function(id) {
		webSocket.emit('unregisterUser', id);
	},
	addTask: function(data, cb) {
		webSocket.emit('addTask', data, cb);
	},
	updateTask: function(data, cb) {
		webSocket.emit('updateTask', data, cb);
	},
	removeTask: function(id, cb) {
		webSocket.emit('removeTask', id, cb);
	},
	rehydrateApp: function(cb) {
		webSocket.emit('rehydrateApp', cb);
	},
	// Listen events
	onAddUser: function(cb) {
		webSocket.on('addUser', cb);
	},
	onRemoveUser: function(cb) {
		webSocket.on('removeUser', cb);
	},
	onAddTask: function(cb) {
		webSocket.on('addTask', cb);
	},
	onUpdateTask: function(cb) {
		webSocket.on('updateTask', cb);
	},
	onRemoveTask: function(cb) {
		webSocket.on('removeTask', cb);
	}
}

export default socket;