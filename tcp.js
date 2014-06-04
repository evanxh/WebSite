var net = require("net");

var client_count=0;

var server = net.createServer(function (socket) {
	
	client_count ++ 
	
	console.log("Client "+ client_count+ " conected.");
	socket.write("Conected to server. \r\n")

	socket.pipe(socket)

});

server.listen(8080, "127.0.0.1");

