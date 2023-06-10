const express = require('express');
const app = express();
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const io = require('socket.io')(server);

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.on('message', (data) => {
		console.log('Your Message: ', data);
		io.emit('message', data);
	});

	socket.on('joinRoom', (room) => {
		console.log(`${socket.id} just joined room ${room}`);

		socket.join(room);

		io.to(room).emit('roomJoined', `${socket.id} just joined the room`);
	});

	// Handle disconnection.
	socket.on('leaveRoom', (room) => {
		console.log(`${socket.id} has left room ${room}`);

		socket.leave(room);

		io.to(room).emit('roomLeft', `${socket.id} has left the room`);
	});
});

app.use('/api', routes);
module.exports = app;
