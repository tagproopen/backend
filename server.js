var app = require('http').Server(app);
var io = require('socket.io')(app);

app.listen(2000);
console.log("Server started.");

io.sockets.on('connection', function(socket) {
	console.log('connected!', new Date());

	socket.on('signIn', function(data) {
		socket.emit('startGame', data);
	})
	
})
