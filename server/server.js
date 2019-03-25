const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', function(socket) {
	console.log('Connected: ' + socket);
	socket.on('addTask', function(data) {
		console.log(data);
		socket.broadcast.emit('addTask', data);
	}),
	socket.on('removeTask', function(data) {
		console.log(data);
		socket.broadcast.emit('removeTask', data);
	})
});







http.listen(4000, function() {
	console.log('listening on *:4000');
});