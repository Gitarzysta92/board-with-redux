const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const users = require('./users');
const tasksBoard = require('./tasksBoard');

const sampleData = require('./sampleData');



sampleData.users.forEach(user => users.addUser(user));

sampleData.tasks.forEach(({owner, ...task}) => tasksBoard.addTask(owner, task));



io.on('connection', function(socket) {
	console.log('Connected: ', socket.id);

	// Provide app data on request
	socket.on('rehydrateApp', function(cb) {
		cb({
			users: users.getAllUsers(), 
			tasks: tasksBoard.getAllTasks()
		})
	})

	
	// Register new user
	socket.on('registerUser', function({name, color}, cb) {
		if (!(name && color)) {
			cb({'error': 'cannot create a user'});
			return;
		}
		const id = this.id;
		const user = users.addUser({ id, name, color });

		socket.broadcast.emit('addUser', user.getDetails());
		cb({id: user.id});
	});

	
	// Remove user with given id
	socket.on('disconnect', function() {
		users.removeUser(this.id);
		socket.broadcast.emit('removeUser', this.id);
		console.log('Disconnected: ', this.id);
	});


	// Add new task related to user which created it
	socket.on('addTask', function({ownerId, data = {}}, cb) {
		const { title, text } = data;
		const user = users.getUser(ownerId);

		if (!(title && text && user)) {
			cb({'error': 'cannot create a task'});
			return;
		}
		
		const { color } = user.getDetails();
		const task = tasksBoard.addTask(ownerId, { color, ...data});

		socket.broadcast.emit('addTask', task);
		cb({task: task});
	});


	// Update task with given id
	socket.on('updateTask', function({id, data}, cb) {
		const task = tasksBoard.getTask(id);

		if (!task) {
			cb({'error': 'cannot create a task'});
			return;
		}

		const updatedTask = task.updateContent(data);

		socket.broadcast.emit('updateTask', { task: updatedTask, id });
		cb({task: updatedTask});
	});


	// Remove task with given id
	socket.on('removeTask', function(id, cb) {
		tasksBoard.removeTask(id);
		socket.broadcast.emit('removeTask', id);
		cb(id);
	});
});


http.listen(4000, function() {
	console.log('listening on *:4000');
});