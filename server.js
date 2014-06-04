var http = require('http');
var url = require('url');
var fs = require ('fs');
var server;

server = http.createServer( function (request,response) {
	
	var path = url.parse(request.url).pathname;

	switch(path) {

		case '/case1':

		response.writeHead(200 {'Content-type': 'text/plain'})

		response.write('whats up!')

		response.end();

		case ("/case2"):
			fs.readfile(__dirname+'/index.html',function  (err,data) {
				
			if (err) return send404(response);
			response.writeHead(200 {'Content-type': 'text/plain'})
			response.write(data,'utf8')
			response.end();


			});	

			break;
			default: send404(response);

	

	}	
	



});
			send404 = function  (response) {
			
			response.writeHead(404)
			response.write('Error:404\n');
			response.end();
			}




			server.listen(8080);










